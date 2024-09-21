import { SequenceType } from "#types";
import { throwError } from "../../../util/errors/throwError";
import { zod } from "../../../util/util/zod";
import { WaitSchema } from "./schemas/WaitSchema";
import type { WaitFunction } from "./types";

export const validateWaitFunction = async (sequence: unknown): Promise<WaitFunction> => ({
  data: await zod(WaitSchema, sequence).catch((error) => throwError(error)),
  name: "wait",
  type: SequenceType.FUNCTION,
});
