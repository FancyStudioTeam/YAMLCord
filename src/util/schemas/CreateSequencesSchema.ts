import { z } from "zod";

export const CreateSequencesSchema = z.array(z.unknown()).min(1);
