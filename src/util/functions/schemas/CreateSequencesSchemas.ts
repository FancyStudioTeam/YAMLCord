import { z } from "zod";

export const CreateSequencesSchemas = {
  sequences: z.array(z.unknown()).min(1),
};
