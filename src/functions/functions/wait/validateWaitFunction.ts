import { throwError } from "@errors";
import { WaitSchema } from "@functions/functions/wait/schemas/WaitSchema.js";
import type { WaitFunction } from "@functions/functions/wait/types.js";
import { SequenceType } from "@types";
import { zod } from "@utils";

export const validateWaitFunction = async (sequence: unknown): Promise<WaitFunction> => ({
  data: await zod(WaitSchema, sequence).catch((error) => throwError(error)),
  name: "wait",
  type: SequenceType.FUNCTION,
});
