import { z } from "zod";

export const ConditionalSchema = z.object({
  if: z.string(),
  then: z.array(z.any()),
  else: z.array(z.any()).optional(),
});
