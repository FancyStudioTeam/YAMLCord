import { z } from "zod";

const AddReactionStringSchema = z.string();
const AddReactionArraySchema = z.array(AddReactionStringSchema);

export const AddReactionFunctionSchema = z.union([AddReactionStringSchema, AddReactionArraySchema]);
