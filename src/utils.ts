import { typeHierarchy } from './generated/typeHierarchy';
import { propertyMetadata } from './generated/propertyMetadata';

/**
 * Recursively adds @type to an object and its children if missing,
 * based on the expected type and Schema.org metadata.
 */
export function hydrate(data: any, expectedType: string): any {
  if (data === null || data === undefined || typeof data !== 'object') {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map(item => hydrate(item, expectedType));
  }

  // Use a copy to avoid mutation if needed, but for now we mutate for performance
  const result = data;

  // 1. Set @type if missing
  if (!result['@type']) {
    result['@type'] = expectedType;
  }

  // 2. Hydrate children based on property metadata
  const actualType = Array.isArray(result['@type']) ? result['@type'][0] : result['@type'];
  const props = propertyMetadata[actualType];

  if (props) {
    for (const propName of Object.keys(result)) {
      if (propName.startsWith('@')) continue;

      const allowedRanges = props[propName];
      if (allowedRanges && allowedRanges.length > 0) {
        // Find the first non-primitive range to use as a hint for hydration
        const complexRange = allowedRanges.find(r =>
          !['Text', 'Number', 'Integer', 'Float', 'Boolean', 'Date', 'DateTime', 'Time', 'URL'].includes(r)
        );

        if (complexRange) {
          result[propName] = hydrate(result[propName], complexRange);
        }
      }
    }
  }

  return result;
}

/**
 * Serializes a Schema.org object to a JSON-LD string.
 * Automatically adds the @context if it's missing.
 */
export function serialize(data: any): string {
  const output = {
    '@context': 'https://schema.org',
    ...data,
  };
  return JSON.stringify(output);
}

/**
 * Deserializes a JSON-LD string into a Schema.org object.
 * Automatically adds @type if missing.
 */
export function deserialize<T>(json: string, expectedType: string): T {
  const data = JSON.parse(json);
  return hydrate(data, expectedType) as T;
}

/**
 * Validates that an object conforms to the expected Schema.org type based on its @type property.
 * Can be used as a generic type guard: validate<Person>(data, 'Person')
 */
export function validate<T>(data: any, expectedType: string): data is T {
  if (!data || typeof data !== 'object') return false;

  const actualTypes = Array.isArray(data['@type']) ? data['@type'] : [data['@type']];
  const validTypes = typeHierarchy[expectedType];

  if (!validTypes) {
    return actualTypes.includes(expectedType);
  }

  return actualTypes.some((type: string) => validTypes.includes(type));
}

/**
 * Asserts that an object is of the expected Schema.org type.
 * Throws an error if validation fails.
 */
export function assertType<T>(data: any, expectedType: string): T {
  if (!validate(data, expectedType)) {
    throw new Error(`Object is not a valid ${expectedType}. Found @type: ${data['@type']}`);
  }
  return data as T;
}
