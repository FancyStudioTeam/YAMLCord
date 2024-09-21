import type { z } from "zod";
import type { SequenceType } from "#types";
import type { WaitSchema } from "./schemas/WaitSchema";

export type WaitFunction = {
  data: z.infer<typeof WaitSchema>;
  name: "wait";
  type: SequenceType.FUNCTION;
};
