import { ConditionalIfOperatorSchema } from "@conditionals/schemas/ConditionalSchemas.js";
import { throwError } from "@errors";
import type { ResolvedConditionalIfOperator } from "@types";
import { zod } from "@utils/zod.js";

export const validateConditionalOperator = async (operator: unknown) => {
  const data = await zod(ConditionalIfOperatorSchema, operator).catch((error) => throwError(error));
  const operatorMap: Record<typeof data, ResolvedConditionalIfOperator> = {
    eq: "===",
    neq: "!==",
  };

  return operatorMap[data];
};
