import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const SCHEMA_URL = 'https://schema.org/version/latest/schemaorg-current-https.jsonld';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface SchemaNode {
  '@id': string;
  '@type': string | string[];
  'rdfs:comment'?: any;
  'rdfs:label'?: any;
  'rdfs:subClassOf'?: any;
  'schema:domainIncludes'?: any;
  'schema:rangeIncludes'?: any;
  'schema:isPartOf'?: any;
  'schema:source'?: any;
  'owl:equivalentClass'?: any;
  [key: string]: any;
}

async function generate() {
  console.log('Fetching schema...');
  const response = await axios.get(SCHEMA_URL);
  const data = response.data;
  const nodes: SchemaNode[] = data['@graph'];

  const classes: Record<string, SchemaNode> = {};
  const properties: Record<string, SchemaNode[]> = {}; // domain -> properties
  const allProperties: Record<string, SchemaNode> = {};
  const enumerations: Record<string, string[]> = {}; // enumId -> values

  console.log('Processing nodes...');
  for (const node of nodes) {
    const type = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];
    if (type.includes('rdfs:Class')) {
      classes[node['@id']] = node;
    } else if (type.includes('rdf:Property')) {
      allProperties[node['@id']] = node;
      const domains = node['schema:domainIncludes'];
      if (domains) {
        const domainList = Array.isArray(domains) ? domains : [domains];
        for (const domain of domainList) {
          const domainId = domain['@id'];
          if (!properties[domainId]) properties[domainId] = [];
          properties[domainId].push(node);
        }
      }
    } else {
      const nodeTypes = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];
      for (const t of nodeTypes) {
        if (t && t.startsWith('schema:')) {
          if (!enumerations[t]) enumerations[t] = [];
          enumerations[t].push(node['@id']);
        }
      }
    }
  }

  const generatedDir = path.resolve(__dirname, '../src/generated');
  if (fs.existsSync(generatedDir)) {
    fs.rmSync(generatedDir, { recursive: true });
  }
  fs.mkdirSync(generatedDir, { recursive: true });

  console.log('Generating Types and Zod schemas...');

  const typeMap: Record<string, { zod: string, ts: string }> = {
    'schema:Text': { zod: 'z.string()', ts: 'string' },
    'schema:URL': { zod: 'z.string().url()', ts: 'string' },
    'schema:Number': { zod: 'z.number()', ts: 'number' },
    'schema:Integer': { zod: 'z.number().int()', ts: 'number' },
    'schema:Float': { zod: 'z.number()', ts: 'number' },
    'schema:Boolean': { zod: 'z.boolean()', ts: 'boolean' },
    'schema:Date': { zod: 'z.string()', ts: 'string' },
    'schema:DateTime': { zod: 'z.string()', ts: 'string' },
    'schema:Time': { zod: 'z.string()', ts: 'string' },
    'schema:DataType': { zod: 'z.union([z.string(), z.number(), z.boolean()])', ts: 'string | number | boolean' }
  };

  const getCleanName = (id: string) => {
    let name = id.replace(/^schema:/, '').replace(/[^a-zA-Z0-9]/g, '_');
    if (/^[0-9]/.test(name)) {
      name = '_' + name;
    }
    return name;
  };

  const getInheritedProperties = (classId: string): SchemaNode[] => {
    let props = properties[classId] || [];
    const node = classes[classId];
    if (node && node['rdfs:subClassOf']) {
      const parents = Array.isArray(node['rdfs:subClassOf']) ? node['rdfs:subClassOf'] : [node['rdfs:subClassOf']];
      for (const parent of parents) {
        if (parent['@id']) {
          props = props.concat(getInheritedProperties(parent['@id']));
        }
      }
    }
    return props;
  };

  const classIds = Object.keys(classes).sort();

  let indexContent = `export * from './base';\n`;

  const baseContent = `import { z } from 'zod';\n\nexport type Context = string | Record<string, string>;\nexport const ContextSchema = z.union([z.string(), z.record(z.string(), z.string())]);\n`;
  fs.writeFileSync(path.join(generatedDir, 'base.ts'), baseContent);

  const filesContent: Record<string, string> = {};

  for (const classId of classIds) {
    const className = getCleanName(classId);
    if (typeMap[classId]) continue;

    const firstChar = className[0].toUpperCase();
    const fileName = /^[A-Z]/.test(firstChar) ? firstChar : 'Others';
    if (!filesContent[fileName]) {
      filesContent[fileName] = `import { z } from 'zod';\nimport * as s from './index';\n\n`;
      indexContent += `export * from './${fileName}';\n`;
    }

    const node = classes[classId];
    const enumValues = enumerations[classId];

    if (enumValues && enumValues.length > 0) {
      filesContent[fileName] += `export type ${className} = ${enumValues.map(v => `'${v}'`).join(' | ')};\n`;
      const valLiterals = enumValues.map(v => `z.literal('${v}')`);
      filesContent[fileName] += `export const ${className}Schema = z.union([${valLiterals.join(', ')}]);\n\n`;
    } else {
      let interfaceContent = `export interface ${className} {\n`;
      interfaceContent += `  '@context'?: s.Context;\n`;
      interfaceContent += `  '@type'?: string | string[];\n`;
      interfaceContent += `  '@id'?: string;\n`;

      let schemaContent = `export const ${className}Schema: z.ZodType<${className}> = z.lazy(() => z.object({\n`;
      schemaContent += `  '@context': s.ContextSchema.optional(),\n`;
      schemaContent += `  '@type': z.union([z.string(), z.array(z.string())]).optional(),\n`;
      schemaContent += `  '@id': z.string().optional(),\n`;

      const classProps = getInheritedProperties(classId);
      const seenProps = new Set<string>();

      for (const prop of classProps) {
        const propId = prop['@id'];
        if (seenProps.has(propId)) continue;
        seenProps.add(propId);

        const propName = propId.replace('schema:', '');
        const ranges = prop['schema:rangeIncludes'];
        const rangeList = Array.isArray(ranges) ? ranges : [ranges];

        const tsTypes = rangeList.map(r => {
          if (!r) return 'any';
          const rId = r['@id'];
          if (typeMap[rId]) return typeMap[rId].ts;
          const rName = getCleanName(rId);
          if (classes[rId]) return `s.${rName}`;
          return 'any';
        });

        const zodTypes = rangeList.map(r => {
          if (!r) return 'z.any()';
          const rId = r['@id'];
          if (typeMap[rId]) return typeMap[rId].zod;
          const rName = getCleanName(rId);
          if (classes[rId]) return `s.${rName}Schema`;
          return 'z.any()';
        });

        const uniqueTsTypes = [...new Set(tsTypes)];
        const uniqueZodTypes = [...new Set(zodTypes)];

        const tsTypeStr = uniqueTsTypes.join(' | ');
        const zodTypeStr = uniqueZodTypes.length > 1 ? `z.union([${uniqueZodTypes.join(', ')}])` : uniqueZodTypes[0];

        interfaceContent += `  ${propName}?: ${tsTypeStr} | Array<${tsTypeStr}>;\n`;
        schemaContent += `  ${propName}: z.union([${zodTypeStr}, z.array(${zodTypeStr})]).optional(),\n`;
      }

      interfaceContent += `}\n\n`;
      schemaContent += `}));\n\n`;

      filesContent[fileName] += interfaceContent + schemaContent;
    }
  }

  for (const fileName in filesContent) {
    fs.writeFileSync(path.join(generatedDir, `${fileName}.ts`), filesContent[fileName]);
  }
  fs.writeFileSync(path.join(generatedDir, 'index.ts'), indexContent);

  console.log('Generation complete!');
}

generate().catch(console.error);
