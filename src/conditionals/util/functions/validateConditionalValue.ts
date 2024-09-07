import { Result } from "@sapphire/result";
import type { z } from "zod";
import type { ResultErrorType } from "#types";
import { ErrorCodes } from "../../../util/errors/ErrorCodes";
import { throwError } from "../../../util/errors/throwError";
import { zodValidationMatch } from "../../../util/functions/zodValidationMatch";
import { ConditionalIfValueSchema } from "../../schemas/ConditionalSchemas";

export const validateConditionalValue = async (value: unknown) => {
  const result = await Result.fromAsync<z.infer<ConditionalIfValueSchemaType>, ResultErrorType>(
    async () => await zodValidationMatch<ConditionalIfValueSchemaType>(ConditionalIfValueSchema, value),
  );

  if (result.isErr()) {
    throwError(result.unwrapErr());
  }

  const data = result.unwrap();
  const regex = /^'(.*)'$/;
  const matchedValue = data.match(regex);

  if (!matchedValue) {
    return throwError([ErrorCodes.INVALUD_REGEX_VALUE]);
  }

  return matchedValue[1];
};

type ConditionalIfValueSchemaType = typeof ConditionalIfValueSchema;
