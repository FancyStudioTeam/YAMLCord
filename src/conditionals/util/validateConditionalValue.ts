import { throwError } from "@errors";
import { zod } from "@utils";
import { ConditionalIfValueSchema } from "../schemas/ConditionalSchemas.js";

export const validateConditionalValue = async (value: unknown) =>
  await zod(ConditionalIfValueSchema, value).catch((error) => throwError(error));
