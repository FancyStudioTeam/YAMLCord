import { SequenceType } from "../../../types";
import { throwError } from "../../../util/errors/throwError";
import { zod } from "../../../util/util/zod";
import { AddReactionSchema } from "./schemas/AddReactionSchema";
import type { AddReactionFunction } from "./types";

export const validateAddReactionFunction = async (sequence: unknown): Promise<AddReactionFunction> => {
  const data = await zod(AddReactionSchema, sequence).catch((error) => throwError(error));

  return {
    data: Array.isArray(data) ? Array.from(new Set(data)) : data,
    name: "add_reaction",
    type: SequenceType.FUNCTION,
  };
};
