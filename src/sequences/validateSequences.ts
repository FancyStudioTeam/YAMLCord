import { validateConditional } from "#conditionals/validateConditional.js";
import { throwError } from "#errors";
import { validateFunction } from "#functions/validateFunction.js";
import type { Sequence } from "#types";
import { zod } from "#zod";
import { SequencesSchema } from "./schemas/SequencesSchema.js";

export const isRawConditionalObject = (sequence: unknown) =>
  typeof sequence === "object" && sequence !== null && "if" in sequence && "then" in sequence;

export const validateSequences = async (sequence: unknown): Promise<Sequence[]> => {
  const data = await zod(SequencesSchema, sequence).catch((error) => throwError(error));
  const sequences: Sequence[] = [];

  for (const sequence of data) {
    sequences.push(
      isRawConditionalObject(sequence) ? await validateConditional(sequence) : await validateFunction(sequence),
    );
  }

  return sequences;
};
