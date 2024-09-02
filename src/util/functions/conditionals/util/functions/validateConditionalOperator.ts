import { Result } from "@sapphire/result";
import type { z } from "zod";
import type { ConditionalIfOperator, ResultErrorType } from "#types";
import { zodValidationMatch } from "#util/functions/util/zodValidationMatch.js";
import { throwError } from "#util/throwError.js";
import { ConditionalIfOperatorSchema } from "../../schemas/ConditionalSchemas";

export const validateConditionalOperator = async (operator: unknown) => {
  const result = await Result.fromAsync<z.infer<ConditionalIfOperatorSchemaType>, ResultErrorType>(
    async () => await zodValidationMatch<ConditionalIfOperatorSchemaType>(ConditionalIfOperatorSchema, operator),
  );

  if (result.isErr()) {
    throwError(result.unwrapErr());
  }

  const data = result.unwrap();
  const operatorMap: Record<typeof data, ConditionalIfOperator> = {
    eq: "===",
  };

  return operatorMap[data];
};

type ConditionalIfOperatorSchemaType = typeof ConditionalIfOperatorSchema;
