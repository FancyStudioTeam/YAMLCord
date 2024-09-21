import { validateFunction } from "#functions/validateFunction.js";
import type { Sequence } from "#types";
import { zod } from "#zod";
import { validateConditional } from "../conditionals/validateConditional";
import { throwError } from "../util/errors/throwError";
import { isRawConditionalObject } from "../util/util/isRawConditionalObject";
import { SequencesSchema } from "./schemas/SequencesSchema";

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
