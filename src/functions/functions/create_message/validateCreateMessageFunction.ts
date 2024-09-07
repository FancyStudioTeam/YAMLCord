import { Result } from "@sapphire/result";
import type { z } from "zod";
import { type ResultErrorType, SequenceType } from "../../../types";
import { throwError } from "../../../util/errors/throwError";
import { zodValidationMatch } from "../../../util/util/zodValidationMatch";
import { CreateMessageSchema } from "./schemas/CreateMessageSchema";
import type { CreateMessageFunction } from "./types";

export const validateCreateMessageFunction = async (sequence: unknown): Promise<CreateMessageFunction> => {
  const result = await Result.fromAsync<z.infer<CreateMessageSchemaType>, ResultErrorType>(
    async () => await zodValidationMatch<CreateMessageSchemaType>(CreateMessageSchema, sequence),
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

type CreateMessageSchemaType = typeof CreateMessageSchema;
