import { z } from "zod";

export const ConditionalSchema = z.object({
  if: z.string(),
  then: z.array(z.unknown()),
  else: z.array(z.unknown()).optional(),
});

export const ConditionalIfVariableSchema = z.enum([
  "[date_now]",
  "[guild_id]",
  "[guild_name]",
  "[message_content]",
  "[owner_id]",
  "[owner_name]",
  "[user_id]",
  "[user_name]",
]);
export const ConditionalIfOperatorSchema = z.enum(["eq", "neq"]);
export const ConditionalIfValueSchema = z
  .string()
  .regex(/^'.+'$/)
  .transform((value) => value.slice(1, -1));
