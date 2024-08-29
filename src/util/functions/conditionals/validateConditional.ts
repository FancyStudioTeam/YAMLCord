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
  const variable = validateConditionalOperator(rawVariable);
  const operator = validateConditionalValue(rawOperator);
  const value = validateConditionalVariable(rawValue.join(" "));

  return {
    type: SequenceType.CONDITIONAL,
    data: {
      if: {
        operator,
        value,
        variable,
      },
    },
  };
};

type ConditionalSchemaType = typeof ConditionalSchema;
