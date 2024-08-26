import { Result } from "@sapphire/result";
import type { z } from "zod";
import type { ResultErrorType } from "#types";
import { FancyScriptError } from "#util/errors/Errors";
import { CreateSequencesSchemas } from "./schemas/CreateSequencesSchemas";
import { zodValidationMatch } from "./zodValidationMatch";

export const verifySequences = async (sequence: unknown) => {
  const result = await Result.fromAsync<z.infer<CreateSequenceSchemaType>, ResultErrorType>(
    async () => await zodValidationMatch<CreateSequenceSchemaType>(CreateSequencesSchemas.sequences, sequence),
  );

  if (result.isErr()) {
    const unwrappedError = result.unwrapErr();

    throw new FancyScriptError(unwrappedError[0], ...unwrappedError.slice(1));
  }

  const data = result.unwrap();

  return data;
};

type CreateSequenceSchemaType = typeof CreateSequencesSchemas.sequences;
