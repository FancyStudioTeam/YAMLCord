import type { ConditionalIfOperator } from "#types";
import { throwError } from "../../util/errors/throwError";
import { zodValidationMatch } from "../../util/util/zodValidationMatch";
import { ConditionalIfOperatorSchema } from "../schemas/ConditionalSchemas";

export const validateConditionalOperator = async (operator: unknown) => {
  const data = await zodValidationMatch(ConditionalIfOperatorSchema, operator).catch((error) => throwError(error));
  const operatorMap: Record<typeof data, ConditionalIfOperator> = {
    eq: "===",
  };

  return operatorMap[data];
};
