import { describe, it, expect } from 'vitest';
import { Person, serialize, deserialize, validate, assertType } from '../src/index';

describe('Schema LD Library (Enhanced)', () => {
  it('should auto-hydrate @type during deserialization', () => {
    const json = '{ "name": "Jane Doe"}';
    // Using global deserialize
    const person = deserialize<Person>(json, 'Person');
    expect(person['@type']).toBe('Person');
    expect(person.name).toBe('Jane Doe');

    // Using class-specific deserialize
    const person2 = Person.deserialize(json);
    expect(person2['@type']).toBe('Person');
    expect(person2.name).toBe('Jane Doe');
  });

  it('should auto-hydrate nested objects', () => {
    const json = JSON.stringify({
      name: 'John Doe',
      address: {
        streetAddress: '123 Main St',
        addressLocality: 'Anytown'
      }
    });

    const person = Person.deserialize(json);
    expect(person['@type']).toBe('Person');
    expect(person.address).toBeDefined();
    if (person.address && typeof person.address === 'object' && !Array.isArray(person.address)) {
      expect(person.address['@type']).toBe('PostalAddress');
    }
  });

  it('should support class-based validation (Type Guard)', () => {
    const data = {
      '@type': 'Person',
      name: 'John'
    };

    if (Person.validate(data)) {
      // TypeScript knows data is Person here
      expect(data.name).toBe('John');
    } else {
      throw new Error('Should have validated');
    }
  });

  it('should validate subclasses in class-based validation', () => {
    const patient = {
      '@type': 'Patient',
      name: 'Jane'
    };
    expect(Person.validate(patient)).toBe(true);
  });

  it('should serialize with context', () => {
    const person: Person = {
      name: 'John'
    };
    const json = Person.serialize(person);
    const parsed = JSON.parse(json);
    expect(parsed['@context']).toBe('https://schema.org');
    // Note: serialize doesn't automatically hydrate, hydrate is part of deserialize
  });
});
