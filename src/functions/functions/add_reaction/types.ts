import type { SequenceType } from "@types";
import type { z } from "zod";
import type { AddReactionSchema } from "./schemas/AddReactionSchema.js";

export type YAMLCordAddReactionFunction = {
  data: z.infer<typeof AddReactionSchema>;
  name: "add_reaction";
  type: SequenceType.FUNCTION;
};
