import type { z } from "zod";
import type { SequenceType } from "#types";
import type { CreateMessageSchema } from "./schemas/CreateMessageSchema";

export type CreateMessageFunction = {
  data: z.infer<typeof CreateMessageSchema>;
  name: "create_message";
  type: SequenceType.FUNCTION;
};
