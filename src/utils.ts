import * as jsonld from 'jsonld';
import { z } from 'zod';

export const SCHEMA_CONTEXT = 'https://schema.org';

/**
 * Validates an object against a given Zod schema.
 */
export function validate<T>(schema: z.ZodType<T>, data: unknown): T {
  return schema.parse(data);
}

/**
 * Serializes a TypeScript model to a JSON-LD string.
 * Automatically adds the @context if missing.
 */
export async function serialize(data: any, options: { compact?: boolean } = {}): Promise<string> {
  let json = { ...data };
  if (!json['@context']) {
    json['@context'] = SCHEMA_CONTEXT;
  }

  if (options.compact) {
    json = await jsonld.compact(json, SCHEMA_CONTEXT as any);
  }

  return JSON.stringify(json, null, 2);
}

/**
 * Deserializes a JSON string into a TypeScript model and validates it.
 */
export async function deserialize<T>(schema: z.ZodType<T>, jsonStr: string): Promise<T> {
  const data = JSON.parse(jsonStr);
  return validate(schema, data);
}

/**
 * Expands a JSON-LD object to its full form.
 */
export async function expand(data: any): Promise<any> {
  return jsonld.expand(data);
}

/**
 * Compacts a JSON-LD object using a specific context.
 */
export async function compact(data: any, context: any = SCHEMA_CONTEXT): Promise<any> {
  return jsonld.compact(data, context);
}
