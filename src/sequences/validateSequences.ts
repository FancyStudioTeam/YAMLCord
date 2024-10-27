import { validateConditional } from "@conditionals/validateConditional";
import { throwError } from "@errors";
import { validateFunction } from "@functions/validateFunction";
import type { YAMLCordSequence } from "@types";
import { zod } from "@utils";
import { SequencesSchema } from "./schemas/SequencesSchema.js";

export const isRawConditionalObject = (sequence: unknown) =>
  typeof sequence === "object" && sequence !== null && "if" in sequence && "then" in sequence;

export const validateSequences = async (sequence: unknown): Promise<YAMLCordSequence[]> => {
  const data = await zod(SequencesSchema, sequence).catch((error) => throwError(error));
  const sequences: YAMLCordSequence[] = [];

  for (const sequence of data) {
    sequences.push(
      isRawConditionalObject(sequence) ? await validateConditional(sequence) : await validateFunction(sequence),
    );
  }

  return sequences;
};
