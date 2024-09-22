import { ConditionalIfOperatorSchema } from "#conditionals/schemas/ConditionalSchemas.js";
import { throwError } from "#errors";
import type { ConditionalIfOperator } from "#types";
import { zod } from "#zod";

export const validateConditionalOperator = async (operator: unknown) => {
  const data = await zod(ConditionalIfOperatorSchema, operator).catch((error) => throwError(error));
  const operatorMap: Record<typeof data, ConditionalIfOperator> = {
    eq: "===",
    neq: "!==",
  };

  return operatorMap[data];
};
