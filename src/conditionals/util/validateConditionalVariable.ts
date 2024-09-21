import { throwError } from "../../util/errors/throwError";
import { zod } from "../../util/util/zod";
import { ConditionalIfVariableSchema } from "../schemas/ConditionalSchemas";

export const validateConditionalVariable = async (variable: unknown) =>
  await zod(ConditionalIfVariableSchema, variable).catch((error) => throwError(error));
