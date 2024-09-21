import { ConditionalIfValueSchema } from "#conditionals/schemas/ConditionalSchemas.js";
import { throwError } from "#errors";
import { zod } from "#zod";

export const validateConditionalValue = async (value: unknown) =>
  await zod(ConditionalIfValueSchema, value).catch((error) => throwError(error));
