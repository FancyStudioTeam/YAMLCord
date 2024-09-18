import { Result } from "@sapphire/result";
import type { z } from "zod";
import type { ResultErrorType } from "#types";
import { throwError } from "../../util/errors/throwError";
import { zodValidationMatch } from "../../util/util/zodValidationMatch";
import { ConditionalIfValueSchema } from "../schemas/ConditionalSchemas";

export const validateConditionalValue = async (value: unknown) => {
  const result = await Result.fromAsync<z.infer<ConditionalIfValueSchemaType>, ResultErrorType>(
    async () => await zodValidationMatch(ConditionalIfValueSchema, value),
  );

  if (result.isErr()) {
    throwError(result.unwrapErr());
  }

  return result.unwrap();
};

type ConditionalIfValueSchemaType = typeof ConditionalIfValueSchema;
