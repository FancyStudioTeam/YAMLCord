import { Result } from "@sapphire/result";
import type { z } from "zod";
import type { ResultErrorType, Sequence } from "#types";
import { throwError } from "#util/throwError";
import { validateConditional } from "./conditionals/validateConditional";
import { CreateSequencesSchemas } from "./schemas/CreateSequencesSchemas";
import { zodValidationMatch } from "./zodValidationMatch";

const isRawConditionalObject = (sequence: unknown) =>
  typeof sequence === "object" && sequence !== null && "if" in sequence && "then" in sequence;

export const validateSequences = async (sequence: unknown): Promise<Sequence[]> => {
  const result = await Result.fromAsync<z.infer<CreateSequenceSchemaType>, ResultErrorType>(
    async () => await zodValidationMatch<CreateSequenceSchemaType>(CreateSequencesSchemas.sequences, sequence),
  );

  if (result.isErr()) {
    throwError(result.unwrapErr());
  }

  const sequences: Sequence[] = [];
  const data = result.unwrap();

  for (const sequence of data) {
    if (isRawConditionalObject(sequence)) {
      sequences.push(await validateConditional(sequence));
    }
  }

  return sequences;
};

type CreateSequenceSchemaType = typeof CreateSequencesSchemas.sequences;
