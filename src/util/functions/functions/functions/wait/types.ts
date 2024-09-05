import type { z } from "zod";
import type { SequenceType } from "../../../types";
import type { WaitFunctionSchema } from "./schema";

export type WaitFunction = {
  data: z.infer<typeof WaitFunctionSchema>;
  name: "wait";
  type: SequenceType.FUNCTION;
};
