import { zod } from "#zod";
import { throwError } from "../../util/errors/throwError";
import { ConditionalIfValueSchema } from "../schemas/ConditionalSchemas";

export const validateConditionalValue = async (value: unknown) =>
  await zod(ConditionalIfValueSchema, value).catch((error) => throwError(error));
