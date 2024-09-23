import { throwError } from "#errors";
import { SequenceType } from "#types";
import { zod } from "#zod";
import { WaitSchema } from "./schemas/WaitSchema.js";
import type { WaitFunction } from "./types.js";

export const validateWaitFunction = async (sequence: unknown): Promise<WaitFunction> => ({
  data: await zod(WaitSchema, sequence).catch((error) => throwError(error)),
  name: "wait",
  type: SequenceType.FUNCTION,
});
