import { throwError } from "#errors";
import { SequenceType } from "#types";
import { zod } from "#zod";
import { CreateMessageSchema } from "./schemas/CreateMessageSchema";
import type { CreateMessageFunction } from "./types";

export const validateCreateMessageFunction = async (sequence: unknown): Promise<CreateMessageFunction> => ({
  data: await zod(CreateMessageSchema, sequence).catch((error) => throwError(error)),
  name: "create_message",
  type: SequenceType.FUNCTION,
});
