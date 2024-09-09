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

  const data = result.unwrap();
  let validData = data;

  if (Array.isArray(data)) {
    validData = [];

    for (const element of data) {
      validData.push(element.trim());
    }
  } else {
    validData = data.trim();
  }

  return {
    data: Array.isArray(validData) ? Array.from(new Set(validData)) : validData,
    name: "add_reaction",
    type: SequenceType.FUNCTION,
  };
};

type AddReactionSchemaType = typeof AddReactionSchema;
