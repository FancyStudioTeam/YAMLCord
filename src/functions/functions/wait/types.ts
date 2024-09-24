import type { WaitSchema } from "@functions/functions/wait/schemas/WaitSchema.js";
import type { SequenceType } from "@types";
import type { z } from "zod";

export type WaitFunction = {
  data: z.infer<typeof WaitSchema>;
  name: "wait";
  type: SequenceType.FUNCTION;
};
