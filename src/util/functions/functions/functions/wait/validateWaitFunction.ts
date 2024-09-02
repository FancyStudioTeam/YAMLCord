import { Result } from "@sapphire/result";
import type { z } from "zod";
import { type ResultErrorType, SequenceType } from "#types";
import { zodValidationMatch } from "#util/functions/util/zodValidationMatch.js";
import { throwError } from "#util/throwError.js";
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
