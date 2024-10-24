import { throwError } from "@errors";
import { SequenceType } from "@types";
import { zod } from "@utils";
import { CreateMessageSchema } from "./schemas/CreateMessageSchema.js";
import type { YAMLCordCreateMessageFunction } from "./types.js";

export const validateCreateMessageFunction = async (sequence: unknown): Promise<YAMLCordCreateMessageFunction> => ({
  data: await zod(CreateMessageSchema, sequence).catch((error) => throwError(error)),
  name: "create_message",
  type: SequenceType.FUNCTION,
});
