import { throwError } from "#errors";
import { SequenceType } from "#types";
import { zod } from "#zod";
import { AddReactionSchema } from "./schemas/AddReactionSchema.js";
import type { AddReactionFunction } from "./types.js";

export const validateAddReactionFunction = async (sequence: unknown): Promise<AddReactionFunction> => {
  const data = await zod(AddReactionSchema, sequence).catch((error) => throwError(error));

  return {
    data: Array.isArray(data) ? Array.from(new Set(data)) : data,
    name: "add_reaction",
    type: SequenceType.FUNCTION,
  };
};
