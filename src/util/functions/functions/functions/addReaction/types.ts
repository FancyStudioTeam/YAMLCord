import type { z } from "zod";
import type { SequenceType } from "../../../types";
import type { AddReactionFunctionSchema } from "./schema";

export type AddReactionFunction = {
  data: z.infer<typeof AddReactionFunctionSchema>;
  name: "add_reaction";
  type: SequenceType.FUNCTION;
};
