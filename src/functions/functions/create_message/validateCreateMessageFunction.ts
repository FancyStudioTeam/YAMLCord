import { throwError } from "#errors/throwError";
import { SequenceType } from "../../../types";
import { zodValidationMatch } from "../../../util/util/zodValidationMatch";
import { CreateMessageSchema } from "./schemas/CreateMessageSchema";
import type { CreateMessageFunction } from "./types";

export const validateCreateMessageFunction = async (sequence: unknown): Promise<CreateMessageFunction> => ({
  data: await zodValidationMatch(CreateMessageSchema, sequence).catch((error) => throwError(error)),
  name: "create_message",
  type: SequenceType.FUNCTION,
});
