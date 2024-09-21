import { throwError } from "../../util/errors/throwError";
import { zodValidationMatch } from "../../util/util/zodValidationMatch";
import { ConditionalIfValueSchema } from "../schemas/ConditionalSchemas";

export const validateConditionalValue = async (value: unknown) =>
  await zodValidationMatch(ConditionalIfValueSchema, value).catch((error) => throwError(error));
