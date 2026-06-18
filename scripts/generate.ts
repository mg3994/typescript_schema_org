import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCHEMA_URL = 'https://schema.org/version/latest/schemaorg-current-https.jsonld';
const OUTPUT_DIR = path.join(__dirname, '../src/generated');

async function generate() {
  console.log('Fetching schema...');
  const response = await axios.get(SCHEMA_URL);
  const data = response.data;
  const nodes = data['@graph'];

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const classes: any[] = [];
  const properties: any[] = [];

  nodes.forEach((node: any) => {
    const type = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];
    if (type.includes('rdfs:Class')) {
      classes.push(node);
    } else if (type.includes('rdf:Property')) {
      properties.push(node);
    }
  });

  const classMap = new Map();
  classes.forEach(c => classMap.set(c['@id'], c));

  const propertyMapNode = new Map();
  properties.forEach(p => propertyMapNode.set(p['@id'], p));

  const subclassesMap = new Map<string, string[]>();
  classes.forEach(c => {
    const parents = Array.isArray(c['rdfs:subClassOf']) ? c['rdfs:subClassOf'] : [c['rdfs:subClassOf']].filter(Boolean);
    parents.forEach((p: any) => {
      const parentId = p['@id'];
      if (!subclassesMap.has(parentId)) subclassesMap.set(parentId, []);
      subclassesMap.get(parentId)!.push(c['@id']);
    });
  });

  function getTransitiveSubclasses(classId: string): string[] {
    const subs = subclassesMap.get(classId) || [];
    let allSubs = [...subs];
    subs.forEach(s => {
      allSubs = allSubs.concat(getTransitiveSubclasses(s));
    });
    return Array.from(new Set(allSubs));
  }

  const typeHierarchy: Record<string, string[]> = {};
  classes.forEach(c => {
    const classId = c['@id'];
    const className = classId.replace('schema:', '');
    const subs = getTransitiveSubclasses(classId).map(s => s.replace('schema:', ''));
    typeHierarchy[className] = [className, ...subs];
  });

  const propertyToRanges = new Map<string, string[]>();
  properties.forEach(p => {
    const ranges = Array.isArray(p['schema:rangeIncludes']) ? p['schema:rangeIncludes'] : [p['schema:rangeIncludes']].filter(Boolean);
    propertyToRanges.set(p['@id'], ranges.map((r: any) => r['@id']));
  });

  const classToProperties = new Map<string, string[]>();
  properties.forEach(p => {
    const domains = Array.isArray(p['schema:domainIncludes']) ? p['schema:domainIncludes'] : [p['schema:domainIncludes']].filter(Boolean);
    domains.forEach((d: any) => {
      if (!classToProperties.has(d['@id'])) classToProperties.set(d['@id'], []);
      classToProperties.get(d['@id'])!.push(p['@id']);
    });
  });

  function getInheritedProperties(classId: string): string[] {
    let props = classToProperties.get(classId) || [];
    const parents = Array.isArray(classMap.get(classId)?.['rdfs:subClassOf'])
      ? classMap.get(classId)['rdfs:subClassOf']
      : [classMap.get(classId)?.['rdfs:subClassOf']].filter(Boolean);

    parents.forEach((p: any) => {
      props = props.concat(getInheritedProperties(p['@id']));
    });
    return Array.from(new Set(props));
  }

  const propertyMetadata: Record<string, Record<string, string[]>> = {};
  const filesByLetter: Record<string, string[]> = {};

  console.log('Generating TypeScript interfaces and metadata...');

  classes.forEach(c => {
    const classId = c['@id'];
    const className = classId.replace('schema:', '');
    const sanitizedClassName = className.replace(/[:.-]/g, '_').replace(/^[0-9]/, '_$&');

    let letter = sanitizedClassName[0].toUpperCase();
    if (/[0-9]/.test(letter) || letter === '_') {
      letter = 'Special';
    }
    if (!filesByLetter[letter]) filesByLetter[letter] = [];

    const allowedTypes = typeHierarchy[className] || [className];
    const allowedTypesStr = allowedTypes.map(t => `'${t}'`).join(' | ');

    let interfaceContent = `export interface ${sanitizedClassName} {\n`;
    interfaceContent += `  '@context'?: any;\n`;
    interfaceContent += `  '@type'?: ${allowedTypesStr} | Array<${allowedTypesStr}>;\n`;
    interfaceContent += `  '@id'?: string;\n`;

    const classProps = getInheritedProperties(classId);
    const classPropMeta: Record<string, string[]> = {};

    classProps.forEach(propId => {
      const propName = propId.replace('schema:', '');
      const ranges = propertyToRanges.get(propId) || [];
      const rangeNames = ranges.map(r => r.replace('schema:', ''));
      classPropMeta[propName] = rangeNames;

      const tsRanges = rangeNames.map(rName => {
        if (['Text', 'URL', 'CssSelectorType', 'PronounceableText'].includes(rName)) return 'string';
        if (['Number', 'Integer', 'Float'].includes(rName)) return 'number';
        if (['Boolean'].includes(rName)) return 'boolean';
        if (['Date', 'DateTime', 'Time'].includes(rName)) return 'string';
        const sanitizedRName = rName.replace(/[:.-]/g, '_').replace(/^[0-9]/, '_$&');
        return `s.${sanitizedRName}`;
      });

      const uniqueTsRanges = Array.from(new Set(tsRanges));
      if (uniqueTsRanges.length > 0) {
        const rangeUnion = uniqueTsRanges.join(' | ');
        interfaceContent += `  ${propName}?: ${rangeUnion} | Array<${rangeUnion}>;\n`;
      } else {
        interfaceContent += `  ${propName}?: any | Array<any>;\n`;
      }
    });

    interfaceContent += `}\n\n`;

    let classObjectContent = `export const ${sanitizedClassName} = {\n`;
    classObjectContent += `  validate: (data: any): data is ${sanitizedClassName} => s.validate(data, '${className}'),\n`;
    classObjectContent += `  deserialize: (json: string): ${sanitizedClassName} => s.deserialize(json, '${className}'),\n`;
    classObjectContent += `  serialize: (data: ${sanitizedClassName}): string => s.serialize(data),\n`;
    classObjectContent += `};\n\n`;

    filesByLetter[letter].push(interfaceContent + classObjectContent);
    propertyMetadata[className] = classPropMeta;
  });

  // Write files
  const indexExports: string[] = [];
  Object.keys(filesByLetter).sort().forEach(letter => {
    let content = `import * as s from './index';\n\n`;
    content += filesByLetter[letter].join('\n');
    fs.writeFileSync(path.join(OUTPUT_DIR, `${letter}.ts`), content);
    indexExports.push(`export * from './${letter}';`);
  });

  // Export Context and other shared types
  const sharedTypes = `export type Context = string | Record<string, any>;\n`;
  fs.writeFileSync(path.join(OUTPUT_DIR, 'shared.ts'), sharedTypes);
  indexExports.push(`export * from './shared';`);

  // Write typeHierarchy
  const hierarchyContent = `export const typeHierarchy: Record<string, string[]> = ${JSON.stringify(typeHierarchy, null, 2)};\n`;
  fs.writeFileSync(path.join(OUTPUT_DIR, 'typeHierarchy.ts'), hierarchyContent);
  indexExports.push(`export * from './typeHierarchy';`);

  // Write propertyMetadata
  const metadataContent = `export const propertyMetadata: Record<string, Record<string, string[]>> = ${JSON.stringify(propertyMetadata, null, 2)};\n`;
  fs.writeFileSync(path.join(OUTPUT_DIR, 'propertyMetadata.ts'), metadataContent);
  indexExports.push(`export * from './propertyMetadata';`);

  indexExports.push(`export * from '../utils';`);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), indexExports.join('\n'));

  console.log('Generation complete!');
}

generate().catch(console.error);
