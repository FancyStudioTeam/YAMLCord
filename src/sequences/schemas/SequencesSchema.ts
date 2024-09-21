import { z } from "zod";

export const SequencesSchema = z.array(z.unknown()).min(1);
