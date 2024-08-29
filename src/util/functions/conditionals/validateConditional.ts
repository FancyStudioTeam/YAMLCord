import { Result } from "@sapphire/result";
import type { z } from "zod";
import { type Conditional, type ResultErrorType, SequenceType } from "#types";
import { throwError } from "#util/throwError";
import { zodValidationMatch } from "../zodValidationMatch";
import { ConditionalSchema } from "./schemas/ConditionalSchemas";
import { validateConditionalOperator } from "./util/functions/validateConditionalOperator";
import { validateConditionalValue } from "./util/functions/validateConditionalValue";
import { validateConditionalVariable } from "./util/functions/validateConditionalVariable";

export const validateConditional = async (conditional: unknown): Promise<Conditional> => {
  const result = await Result.fromAsync<z.infer<ConditionalSchemaType>, ResultErrorType>(() =>
    zodValidationMatch<ConditionalSchemaType>(ConditionalSchema, conditional),
  );

  if (result.isErr()) {
    throwError(result.unwrapErr());
  }

  const data = result.unwrap();
  const [rawVariable, rawOperator, ...rawValue] = data.if.split(" ");
  const variable = validateConditionalVariable(rawVariable);
  const operator = await validateConditionalOperator(rawOperator);
  const value = validateConditionalValue(rawValue.join(" "));
  const thenSequences: unknown[] = [];
  const elseSequences: unknown[] = [];

  return {
    type: SequenceType.CONDITIONAL,
    data: {
      if: {
        operator,
        value,
        variable,
      },
      then: thenSequences,
      else: elseSequences,
    },
  };
};

type ConditionalSchemaType = typeof ConditionalSchema;
