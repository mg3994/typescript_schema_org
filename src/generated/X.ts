import * as s from './index';

export interface XPathType {
  '@context'?: any;
  '@type'?: 'XPathType' | Array<'XPathType'>;
  '@id'?: string;
}

export const XPathType = {
  validate: (data: any): data is XPathType => s.validate(data, 'XPathType'),
  deserialize: (json: string): XPathType => s.deserialize(json, 'XPathType'),
  serialize: (data: XPathType): string => s.serialize(data),
};
