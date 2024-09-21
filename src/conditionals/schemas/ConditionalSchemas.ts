import { z } from "zod";

export const ConditionalSchema = z.object({
  if: z.string(),
  then: z.array(z.unknown()),
  else: z.array(z.unknown()).optional(),
});

export const ConditionalIfVariableSchema = z.string().regex(/^\[[^[\]]+\]$/);
export const ConditionalIfOperatorSchema = z.enum(["eq", "neq"]);
export const ConditionalIfValueSchema = z
  .string()
  .regex(/^'.+'$/)
  .transform((value) => value.slice(1, -1));
