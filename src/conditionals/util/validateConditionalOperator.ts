import { throwError } from "@errors";
import type { YAMLCordConditional } from "@types";
import { zod } from "@utils";
import { ConditionalIfOperatorSchema } from "../schemas/ConditionalSchemas.js";

export const validateConditionalOperator = async (operator: unknown) => {
  const data = await zod(ConditionalIfOperatorSchema, operator).catch((error) => throwError(error));
  const operatorMap: Record<typeof data, YAMLCordConditionalOperators> = {
    eq: "===",
    neq: "!==",
  };

  return operatorMap[data];
};

type YAMLCordConditionalOperators = YAMLCordConditional["data"]["if"]["operator"];
