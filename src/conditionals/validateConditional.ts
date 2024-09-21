import { throwError } from "#errors";
import { validateFunction } from "#functions/validateFunction.js";
import { type Conditional, type Sequence, SequenceType } from "#types";
import { zod } from "#zod";
import { ConditionalSchema } from "./schemas/ConditionalSchemas";
import { validateConditionalOperator } from "./util/validateConditionalOperator";
import { validateConditionalValue } from "./util/validateConditionalValue";
import { validateConditionalVariable } from "./util/validateConditionalVariable";

export const isRawConditionalObject = (sequence: unknown) =>
  typeof sequence === "object" && sequence !== null && "if" in sequence && "then" in sequence;

export const validateConditional = async (conditional: unknown): Promise<Conditional> => {
  const data = await zod(ConditionalSchema, conditional).catch((error) => throwError(error));
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
