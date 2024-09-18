import { SequenceType } from "#types";
import { throwError } from "../../../util/errors/throwError";
import { zodValidationMatch } from "../../../util/util/zodValidationMatch";
import { WaitSchema } from "./schemas/WaitSchema";
import type { WaitFunction } from "./types";

export const validateWaitFunction = async (sequence: unknown): Promise<WaitFunction> => ({
  data: await zodValidationMatch(WaitSchema, sequence).catch((error) => throwError(error)),
  name: "wait",
  type: SequenceType.FUNCTION,
});
