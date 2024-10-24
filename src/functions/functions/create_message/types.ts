import type { CreateMessageSchema } from "@functions/functions/create_message/schemas/CreateMessageSchema.js";
import type { SequenceType } from "@types";
import type { z } from "zod";

export type YAMLCordCreateMessageFunction = {
  data: z.infer<typeof CreateMessageSchema>;
  name: "create_message";
  type: SequenceType.FUNCTION;
};
