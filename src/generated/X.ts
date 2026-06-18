import { z } from 'zod';
import * as s from './index';

export interface XPathType {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const XPathTypeSchema: z.ZodType<XPathType> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));
