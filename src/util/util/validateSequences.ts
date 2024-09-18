import { Result } from "@sapphire/result";
import type { z } from "zod";
import { validateFunction } from "#functions/validateFunction.js";
import type { ResultErrorType, Sequence } from "#types";
import { validateConditional } from "../../conditionals/validateConditional";
import { throwError } from "../errors/throwError";
import { CreateSequencesSchema } from "../schemas/CreateSequencesSchema";
import { isRawConditionalObject } from "./isRawConditionalObject";
import { zodValidationMatch } from "./zodValidationMatch";

export const validateSequences = async (sequence: unknown): Promise<Sequence[]> => {
  const result = await Result.fromAsync<z.infer<CreateSequenceSchemaType>, ResultErrorType>(
    async () => await zodValidationMatch(CreateSequencesSchema, sequence),
  );

  if (result.isErr()) {
    throwError(result.unwrapErr());
  }

  const sequences: Sequence[] = [];
  const data = result.unwrap();

  for (const sequence of data) {
    sequences.push(
      isRawConditionalObject(sequence) ? await validateConditional(sequence) : await validateFunction(sequence),
    );
  }

  return sequences;
};

type CreateSequenceSchemaType = typeof CreateSequencesSchema;
