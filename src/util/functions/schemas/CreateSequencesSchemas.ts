import { z } from "zod";

export const CreateSequencesSchemas = {
  sequences: z.array().min(1),
};
