import type { SequenceType } from "@types";
import type { z } from "zod";
import type { CreateMessageSchema } from "./schemas/CreateMessageSchema.js";

export type YAMLCordCreateMessageFunction = {
  data: z.infer<typeof CreateMessageSchema>;
  name: "create_message";
  type: SequenceType.FUNCTION;
};
