import type { z } from "zod";
import type { SequenceType } from "#types";
import type { AddReactionSchema } from "./schemas/AddReactionSchema";

export type AddReactionFunction = {
  data: z.infer<typeof AddReactionSchema>;
  name: "add_reaction";
  type: SequenceType.FUNCTION;
};
