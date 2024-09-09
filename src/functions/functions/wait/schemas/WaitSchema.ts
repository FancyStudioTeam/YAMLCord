import { z } from "zod";

export const WaitSchema = z.number().positive().int().min(1).max(300);
