import { z } from "zod";

export const CreateSequencesSchemas = z.array(z.unknown()).min(1);
