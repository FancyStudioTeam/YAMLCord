import { z } from "zod";

export const WaitSchema = z.number().min(1).max(300).positive().int();
