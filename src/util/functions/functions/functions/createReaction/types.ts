import type { z } from "zod";
import type { SequenceType } from "#types";
import type { CreateReactionFunctionSchema } from "./schema";

export type CreateReactionFunction = {
  data: z.infer<typeof CreateReactionFunctionSchema>;
  name: "create_reaction";
  type: SequenceType.FUNCTION;
};
