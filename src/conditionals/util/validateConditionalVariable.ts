import { throwError } from "@errors";
import { zod } from "@utils";
import { ConditionalIfVariableSchema } from "../schemas/ConditionalSchemas.js";

export const validateConditionalVariable = async (variable: unknown) =>
  await zod(ConditionalIfVariableSchema, variable).catch((error) => throwError(error));
