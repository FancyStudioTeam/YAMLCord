import { z } from "zod";

export const WaitFunctionSchema = z.number().positive().int().min(1).max(500);
