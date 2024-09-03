import { Result } from "@sapphire/result";
import type { z } from "zod";
import { type Conditional, type ResultErrorType, type Sequence, SequenceType } from "#types";
import { isRawConditionalObject } from "#util/functions/util/isRawConditionalObject";
import { throwError } from "#util/throwError";
import { validateFunction } from "../functions/validateFunction";
import { zodValidationMatch } from "../util/zodValidationMatch";
import { ConditionalSchema } from "./schemas/ConditionalSchemas";
import { validateConditionalOperator } from "./util/functions/validateConditionalOperator";
import { validateConditionalValue } from "./util/functions/validateConditionalValue";
import { validateConditionalVariable } from "./util/functions/validateConditionalVariable";

export const validateConditional = async (conditional: unknown): Promise<Conditional> => {
  const result = await Result.fromAsync<z.infer<ConditionalSchemaType>, ResultErrorType>(
    async () => await zodValidationMatch<ConditionalSchemaType>(ConditionalSchema, conditional),
  );

  if (result.isErr()) {
    throwError(result.unwrapErr());
  }

  const data = result.unwrap();
  const [rawVariable, rawOperator, ...rawValue] = data.if.split(" ");
  const [variable, operator, value] = await Promise.all([
    validateConditionalVariable(rawVariable),
    validateConditionalOperator(rawOperator),
    validateConditionalValue(rawValue.join(" ")),
  ]);
  const thenSequences: Sequence[] = [];
  const elseSequences: Sequence[] = [];

  for (const sequence of data.then) {
    thenSequences.push(
      isRawConditionalObject(sequence) ? await validateConditional(sequence) : await validateFunction(sequence),
    );
  }

  if (data.else?.length) {
    for (const sequence of data.else) {
      elseSequences.push(
        isRawConditionalObject(sequence) ? await validateConditional(sequence) : await validateFunction(sequence),
      );
    }
  }

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
