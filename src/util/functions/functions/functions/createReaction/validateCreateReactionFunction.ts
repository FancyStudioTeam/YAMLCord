import { Result } from "@sapphire/result";
import type { z } from "zod";
import { type ResultErrorType, SequenceType } from "#types";
import { zodValidationMatch } from "#util/functions/util/zodValidationMatch.js";
import { throwError } from "#util/throwError.js";
import { CreateReactionFunctionSchema } from "./schema";
import type { CreateReactionFunction } from "./types";

export const validateCreateReactionFunction = async (sequence: unknown): Promise<CreateReactionFunction> => {
  const result = await Result.fromAsync<z.infer<CreateReactionFunctionSchemaType>, ResultErrorType>(
    async () => await zodValidationMatch<CreateReactionFunctionSchemaType>(CreateReactionFunctionSchema, sequence),
  );

  if (result.isErr()) {
    throwError(result.unwrapErr());
  }

  return {
    data: result.unwrap(),
    name: "create_reaction",
    type: SequenceType.FUNCTION,
  };
};

type CreateReactionFunctionSchemaType = typeof CreateReactionFunctionSchema;
