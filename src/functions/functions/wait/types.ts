import type { SequenceType } from "@types";
import type { z } from "zod";
import type { WaitSchema } from "./schemas/WaitSchema.js";

export type YAMLCordWaitFunction = {
  data: z.infer<typeof WaitSchema>;
  name: "wait";
  type: SequenceType.FUNCTION;
};
