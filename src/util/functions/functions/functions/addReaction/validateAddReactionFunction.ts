import { Result } from "@sapphire/result";
import type { z } from "zod";
import { throwError } from "../../../../errors/throwError";
import { type ResultErrorType, SequenceType } from "../../../types";
import { zodValidationMatch } from "../../../util/zodValidationMatch";
import { AddReactionSchema } from "./schema";
import type { AddReactionFunction } from "./types";

export const validateAddReactionFunction = async (sequence: unknown): Promise<AddReactionFunction> => {
  const result = await Result.fromAsync<z.infer<AddReactionSchemaType>, ResultErrorType>(
    async () => await zodValidationMatch<AddReactionSchemaType>(AddReactionSchema, sequence),
  );

  if (result.isErr()) {
    throwError(result.unwrapErr());
  }

  return {
    data: result.unwrap(),
    name: "add_reaction",
    type: SequenceType.FUNCTION,
  };
};

type AddReactionSchemaType = typeof AddReactionSchema;
