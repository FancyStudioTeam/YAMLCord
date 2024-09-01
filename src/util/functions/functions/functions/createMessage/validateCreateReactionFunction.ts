import { Result } from "@sapphire/result";
import type { z } from "zod";
import { type ResultErrorType, SequenceType } from "#types";
import { zodValidationMatch } from "#util/functions/zodValidationMatch";
import { throwError } from "#util/throwError";
import { CreateMessageFunctionSchema } from "./schema";
import type { CreateMessageFunction } from "./types";

export const validateCreateMessageFunction = async (sequence: unknown): Promise<CreateMessageFunction> => {
  const result = await Result.fromAsync<z.infer<CreateMessageFunctionSchemaType>, ResultErrorType>(
    async () => await zodValidationMatch<CreateMessageFunctionSchemaType>(CreateMessageFunctionSchema, sequence),
  );

  if (result.isErr()) {
    throwError(result.unwrapErr());
  }

  return {
    data: result.unwrap(),
    name: "create_message",
    type: SequenceType.FUNCTION,
  };
};

type CreateMessageFunctionSchemaType = typeof CreateMessageFunctionSchema;
