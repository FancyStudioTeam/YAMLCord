import type { z } from "zod";
import type { SequenceType } from "#types";
import type { CreateMessageContentSchema, CreateMessageFunctionSchema } from "./schema";

export type CreateMessageFunction = {
  data: z.infer<typeof CreateMessageFunctionSchema | typeof CreateMessageContentSchema>;
  name: "create_message";
  type: SequenceType.FUNCTION;
};
