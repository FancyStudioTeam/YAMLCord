import type { z } from "zod";
import type { VariableSchema } from "./schemas/VariableSchema.js";

export type YAMLCordVariables = z.infer<typeof VariableSchema>;
