import { describe, it, expect } from 'vitest';
import { Person, serialize, deserialize, validate, assertType } from '../src/index';

describe('Schema LD Library (Zero Dependency)', () => {
  it('should serialize a Person with context', () => {
    const person: Person = {
      '@type': 'Person',
      name: 'John Doe',
      jobTitle: 'Software Engineer'
    };
    const json = serialize(person);
    const parsed = JSON.parse(json);
    expect(parsed['@context']).toBe('https://schema.org');
    expect(parsed.name).toBe('John Doe');
  });

  it('should deserialize a JSON string', () => {
    const json = '{"@type": "Person", "name": "Jane Doe"}';
    const person = deserialize<Person>(json);
    expect(person.name).toBe('Jane Doe');
    expect(person['@type']).toBe('Person');
  });

  it('should validate a Person type correctly', () => {
    const person = {
      '@type': 'Person',
      name: 'John Doe'
    };
    expect(validate(person, 'Person')).toBe(true);
  });

  it('should validate a subclass as its parent type', () => {
    const patient = {
      '@type': 'Patient',
      name: 'Jane Smith'
    };
    // Patient is a subclass of Person
    expect(validate(patient, 'Person')).toBe(true);
  });

  it('should fail validation for unrelated types', () => {
    const product = {
      '@type': 'Product',
      name: 'Super Gadget'
    };
    expect(validate(product, 'Person')).toBe(false);
  });

  it('should handle array @type during validation', () => {
    const multiType = {
      '@type': ['Person', 'Patient'],
      name: 'John Patient'
    };
    expect(validate(multiType, 'Person')).toBe(true);
    expect(validate(multiType, 'Patient')).toBe(true);
  });

  it('should assert types correctly', () => {
    const person = {
      '@type': 'Person',
      name: 'John Doe'
    };
    const validatedPerson = assertType<Person>(person, 'Person');
    expect(validatedPerson.name).toBe('John Doe');

    expect(() => assertType(person, 'Product')).toThrow();
  });
});
