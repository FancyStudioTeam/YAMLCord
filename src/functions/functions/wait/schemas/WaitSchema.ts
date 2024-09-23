import { z } from "zod";

// Main
export const WaitSchema = z
  .number()
  .min(1)
  .max(300)
  .positive()
  .transform((value) => value * 1000);
