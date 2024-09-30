import type { AddReactionSchema } from "@functions/functions/add_reaction/schemas/AddReactionSchema.js";
import type { SequenceType } from "@types";
import type { z } from "zod";

export type AddReactionFunction = {
  data: z.infer<typeof AddReactionSchema>;
  name: "add_reaction";
  type: SequenceType.FUNCTION;
};
