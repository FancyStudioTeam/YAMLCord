import { Result } from "@sapphire/result";
import type { z } from "zod";
import { throwError } from "../../../../errors/throwError";
import { type ResultErrorType, SequenceType } from "../../../types";
import { zodValidationMatch } from "../../../util/zodValidationMatch";
import { AddReactionFunctionSchema } from "./schema";
import type { AddReactionFunction } from "./types";

export const validateAddReactionFunction = async (sequence: unknown): Promise<AddReactionFunction> => {
  const result = await Result.fromAsync<z.infer<AddReactionFunctionSchemaType>, ResultErrorType>(
    async () => await zodValidationMatch<AddReactionFunctionSchemaType>(AddReactionFunctionSchema, sequence),
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

type AddReactionFunctionSchemaType = typeof AddReactionFunctionSchema;
