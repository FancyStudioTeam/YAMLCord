import { Result } from "@sapphire/result";
import type { z } from "zod";
import { type ResultErrorType, SequenceType } from "#types";
import { throwError } from "../../../util/errors/throwError";
import { zodValidationMatch } from "../../../util/functions/zodValidationMatch";
import { WaitSchema } from "./schemas/WaitSchema";
import type { WaitFunction } from "./types";

export const validateWaitFunction = async (sequence: unknown): Promise<WaitFunction> => {
  const result = await Result.fromAsync<z.infer<WaitSchemaType>, ResultErrorType>(
    async () => await zodValidationMatch<WaitSchemaType>(WaitSchema, sequence),
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

type WaitSchemaType = typeof WaitSchema;
