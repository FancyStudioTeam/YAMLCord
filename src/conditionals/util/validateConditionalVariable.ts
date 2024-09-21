import { ConditionalIfVariableSchema } from "#conditionals/schemas/ConditionalSchemas.js";
import { throwError } from "#errors";
import { zod } from "#zod";

export const validateConditionalVariable = async (variable: unknown) =>
  await zod(ConditionalIfVariableSchema, variable).catch((error) => throwError(error));
