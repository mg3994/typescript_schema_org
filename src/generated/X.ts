import { z } from 'zod';
import * as s from './index';

export interface XPathType {
  '@context'?: s.Context;
  '@type'?: 'XPathType' | Array<'XPathType'>;
  '@id'?: string;
}

export const XPathTypeSchema: z.ZodType<XPathType> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('XPathType'), z.array(z.literal('XPathType'))]).optional(),
  '@id': z.string().optional(),
}));
