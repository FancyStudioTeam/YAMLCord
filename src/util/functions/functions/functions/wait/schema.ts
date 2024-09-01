import { z } from "zod";

export const WaitFunctionSchema = z.number().positive().int();
