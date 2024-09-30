import type { z } from "zod";
import type { VariableSchema } from "./schemas/VariableSchema.js";

export type ResolvedVariables = z.infer<typeof VariableSchema>;
