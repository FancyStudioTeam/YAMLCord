import { throwError } from "@errors";
import { WaitSchema } from "@functions/functions/wait/schemas/WaitSchema.js";
import { SequenceType } from "@types";
import { zod } from "@utils";
import type { YAMLCordWaitFunction } from "./types.js";

export const validateWaitFunction = async (sequence: unknown): Promise<YAMLCordWaitFunction> => ({
  data: await zod(WaitSchema, sequence).catch((error) => throwError(error)),
  name: "wait",
  type: SequenceType.FUNCTION,
});
