import { z } from 'zod';

export type Context = string | Record<string, string>;
export const ContextSchema = z.union([z.string(), z.record(z.string(), z.string())]);
