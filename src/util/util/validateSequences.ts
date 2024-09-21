import { validateFunction } from "#functions/validateFunction.js";
import type { Sequence } from "#types";
import { validateConditional } from "../../conditionals/validateConditional";
import { throwError } from "../errors/throwError";
import { CreateSequencesSchema } from "../schemas/CreateSequencesSchema";
import { isRawConditionalObject } from "./isRawConditionalObject";
import { zod } from "./zod";

export const validateSequences = async (sequence: unknown): Promise<Sequence[]> => {
  const data = await zod(CreateSequencesSchema, sequence).catch((error) => throwError(error));
  const sequences: Sequence[] = [];

  for (const sequence of data) {
    sequences.push(
      isRawConditionalObject(sequence) ? await validateConditional(sequence) : await validateFunction(sequence),
    );
  }

  return sequences;
};
