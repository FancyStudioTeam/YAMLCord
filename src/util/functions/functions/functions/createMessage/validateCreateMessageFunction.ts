import { Result } from "@sapphire/result";
import type { z } from "zod";
import { type ResultErrorType, SequenceType } from "#types";
import { zodValidationMatch } from "#util/functions/util/zodValidationMatch";
import { throwError } from "#util/throwError";
import { CreateMessageContentSchema, CreateMessageFunctionSchema } from "./schema";
import type { CreateMessageFunction } from "./types";

export const validateCreateMessageFunction = async (sequence: unknown): Promise<CreateMessageFunction> => {
  let result: Result<z.infer<CreateMessageFunctionSchemaType | CreateMessageContentSchemaType>, ResultErrorType>;

  if (sequence !== null && typeof sequence === "object") {
    result = await Result.fromAsync<z.infer<CreateMessageFunctionSchemaType>, ResultErrorType>(
      async () => await zodValidationMatch<CreateMessageFunctionSchemaType>(CreateMessageFunctionSchema, sequence),
    );
  } else {
    result = await Result.fromAsync<z.infer<CreateMessageContentSchemaType>, ResultErrorType>(
      async () => await zodValidationMatch<CreateMessageContentSchemaType>(CreateMessageContentSchema, sequence),
    );
  }

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
type CreateMessageContentSchemaType = typeof CreateMessageContentSchema;
