import { describe, it, expect } from 'vitest';
import { PersonSchema, OrganizationSchema, serialize, deserialize, validate } from '../src/index';

describe('SchemaLD', () => {
  it('should validate a correct Person object', () => {
    const person = {
      '@type': 'Person',
      name: 'John Doe',
      jobTitle: 'Software Engineer',
      url: 'https://example.com/johndoe'
    };

    const validated = validate(PersonSchema, person);
    expect(validated.name).toBe('John Doe');
  });

  it('should fail validation for incorrect types', () => {
    const person = {
      '@type': 'Person',
      name: 123, // Should be string
    };

    expect(() => validate(PersonSchema, person)).toThrow();
  });

  it('should serialize to JSON-LD string with context', async () => {
    const person = {
      '@type': 'Person',
      name: 'Jane Doe'
    };

    const json = await serialize(person);
    const parsed = JSON.parse(json);
    expect(parsed['@context']).toBe('https://schema.org');
    expect(parsed.name).toBe('Jane Doe');
  });

  it('should deserialize and validate from JSON string', async () => {
    const jsonStr = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Bob Smith'
    });

    const person = await deserialize(PersonSchema, jsonStr);
    expect(person.name).toBe('Bob Smith');
  });

  it('should handle complex nested structures', () => {
    const org = {
      '@type': 'Organization',
      name: 'Tech Corp',
      location: {
        '@type': 'Place',
        name: 'Silicon Valley',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 Tech Way'
        }
      }
    };

    const validated = validate(OrganizationSchema, org);
    expect(validated.name).toBe('Tech Corp');
    expect(validated.location.name).toBe('Silicon Valley');
    expect(validated.location.address.streetAddress).toBe('123 Tech Way');
  });
});
