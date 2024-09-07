import { Result } from "@sapphire/result";
import type { z } from "zod";
import { type ResultErrorType, SequenceType } from "../../../types";
import { throwError } from "../../../util/errors/throwError";
import { zodValidationMatch } from "../../../util/util/zodValidationMatch";
import { AddReactionSchema } from "./schemas/AddReactionSchema";
import type { AddReactionFunction } from "./types";

export const validateAddReactionFunction = async (sequence: unknown): Promise<AddReactionFunction> => {
  const result = await Result.fromAsync<z.infer<AddReactionSchemaType>, ResultErrorType>(
    async () => await zodValidationMatch<AddReactionSchemaType>(AddReactionSchema, sequence),
  );

  if (result.isErr()) {
    throwError(result.unwrapErr());
  }

  return {
    data: Array.isArray(result.unwrap()) ? Array.from(new Set(result.unwrap())) : result.unwrap(),
    name: "add_reaction",
    type: SequenceType.FUNCTION,
  };
};

type AddReactionSchemaType = typeof AddReactionSchema;
