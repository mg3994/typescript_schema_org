import { typeHierarchy } from './generated/typeHierarchy';

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
 * Does not perform validation.
 */
export function deserialize<T>(json: string): T {
  return JSON.parse(json) as T;
}

/**
 * Validates that an object conforms to the expected Schema.org type based on its @type property.
 * This is a lightweight check that verifies if the object's @type is the expected type or a valid subclass.
 *
 * @param data The object to validate
 * @param expectedType The Schema.org class name (e.g., 'Person')
 * @returns boolean
 */
export function validate(data: any, expectedType: string): boolean {
  if (!data || typeof data !== 'object') return false;

  const actualTypes = Array.isArray(data['@type']) ? data['@type'] : [data['@type']];
  const validTypes = typeHierarchy[expectedType];

  if (!validTypes) {
    // If the expected type is not in our hierarchy, we can only check for exact match
    return actualTypes.includes(expectedType);
  }

  // Check if any of the actual types are valid for the expected type (itself or subclasses)
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
