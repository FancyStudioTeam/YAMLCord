import { Result } from "@sapphire/result";
import type { z } from "zod";
import { type Conditional, type ResultErrorType, type Sequence, SequenceType } from "#types";
import { validateFunction } from "../functions/validateFunction";
import { throwError } from "../util/errors/throwError";
import { isRawConditionalObject } from "../util/util/isRawConditionalObject";
import { zodValidationMatch } from "../util/util/zodValidationMatch";
import { ConditionalSchema } from "./schemas/ConditionalSchemas";
import { validateConditionalOperator } from "./util/validateConditionalOperator";
import { validateConditionalValue } from "./util/validateConditionalValue";
import { validateConditionalVariable } from "./util/validateConditionalVariable";

export const validateConditional = async (conditional: unknown): Promise<Conditional> => {
  const result = await Result.fromAsync<z.infer<ConditionalSchemaType>, ResultErrorType>(
    async () => await zodValidationMatch(ConditionalSchema, conditional),
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
