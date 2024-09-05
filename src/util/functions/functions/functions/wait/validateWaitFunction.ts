import { Result } from "@sapphire/result";
import type { z } from "zod";
import { throwError } from "../../../../errors/throwError";
import { type ResultErrorType, SequenceType } from "../../../types";
import { zodValidationMatch } from "../../../util/zodValidationMatch";
import { WaitFunctionSchema } from "./schema";
import type { WaitFunction } from "./types";

export const validateWaitFunction = async (sequence: unknown): Promise<WaitFunction> => {
  const result = await Result.fromAsync<z.infer<WaitFunctionSchemaType>, ResultErrorType>(
    async () => await zodValidationMatch<WaitFunctionSchemaType>(WaitFunctionSchema, sequence),
  );

  if (result.isErr()) {
    throwError(result.unwrapErr());
  }

  return {
    data: result.unwrap(),
    name: "wait",
    type: SequenceType.FUNCTION,
  };
};

type WaitFunctionSchemaType = typeof WaitFunctionSchema;
