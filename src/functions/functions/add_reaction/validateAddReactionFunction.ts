import { throwError } from "@errors";
import { SequenceType } from "@types";
import { zod } from "@utils";
import { AddReactionSchema } from "./schemas/AddReactionSchema.js";
import type { AddReactionFunction } from "./types.js";

export const validateAddReactionFunction = async (sequence: unknown): Promise<AddReactionFunction> => ({
  data: await zod(AddReactionSchema, sequence).catch((error) => throwError(error)),
  name: "add_reaction",
  type: SequenceType.FUNCTION,
});
