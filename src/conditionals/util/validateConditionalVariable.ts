import { throwError } from "../../util/errors/throwError";
import { zodValidationMatch } from "../../util/util/zodValidationMatch";
import { ConditionalIfVariableSchema } from "../schemas/ConditionalSchemas";

export const validateConditionalVariable = async (variable: unknown) =>
  await zodValidationMatch(ConditionalIfVariableSchema, variable).catch((error) => throwError(error));
