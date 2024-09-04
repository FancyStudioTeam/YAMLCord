import { z } from "zod";

export const CreateSequencesSchemas = z.array(z.object({})).min(1);
