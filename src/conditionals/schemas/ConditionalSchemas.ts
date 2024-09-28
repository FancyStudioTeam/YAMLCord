import { z } from "zod";
import { VariableSchema } from "#variables/schemas/VariableSchema.js";

export const ConditionalSchema = z.object({
  if: z.string(),
  then: z.array(z.unknown()),
  else: z.array(z.unknown()).optional(),
});

export const ConditionalIfVariableSchema = VariableSchema;
export const ConditionalIfOperatorSchema = z.enum(["eq", "neq"]);

const ConditionalIfValueWithValueSchema = z
  .string()
  .regex(/^'.+'$/)
  .transform((value) => value.slice(1, -1));
const ConditionalIfValueWithVariableSchema = ConditionalIfVariableSchema;
export const ConditionalIfValueSchema = z.union([
  ConditionalIfValueWithValueSchema,
  ConditionalIfValueWithVariableSchema,
]);
