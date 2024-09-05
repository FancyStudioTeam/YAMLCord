import type { z } from "zod";
import type { SequenceType } from "../../../types";
import type { CreateMessageFunctionSchema } from "./schema";

export type CreateMessageFunction = {
  data: z.infer<typeof CreateMessageFunctionSchema>;
  name: "create_message";
  type: SequenceType.FUNCTION;
};
