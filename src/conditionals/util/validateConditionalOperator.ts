import type { ConditionalIfOperator } from "#types";
import { throwError } from "../../util/errors/throwError";
import { zod } from "../../util/util/zod";
import { ConditionalIfOperatorSchema } from "../schemas/ConditionalSchemas";

export const validateConditionalOperator = async (operator: unknown) => {
  const data = await zod(ConditionalIfOperatorSchema, operator).catch((error) => throwError(error));
  const operatorMap: Record<typeof data, ConditionalIfOperator> = {
    eq: "===",
  };

  return operatorMap[data];
};
