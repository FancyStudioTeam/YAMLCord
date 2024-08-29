import { match } from "ts-pattern";
import type { ZodSchema, z } from "zod";
import type { ResultErrorType } from "#types";
import { FancyScriptError } from "#util/errors/Errors";
import { ErrorCodes } from "../errors/ErrorCodes";

const throwError = (error: ResultErrorType) => {
  throw new FancyScriptError(error[0], ...error.slice(1));
};

export const zodValidationMatch = <T extends ZodSchema>(zodSchema: ZodSchema, dataToValidate: unknown): z.infer<T> => {
  const { error, data } = zodSchema.safeParse(dataToValidate);

  if (error) {
    match(error.issues[0])
      .with(
        {
          code: "invalid_type",
        },
        (issue) => throwError([ErrorCodes.INVALID_VALUE_TYPE, issue.expected, issue.received]),
      )
      .with(
        {
          code: "too_small",
        },
        (issue) => throwError([ErrorCodes.INVALID_ARRAY_LENGTH, "min", issue.minimum]),
      )
      .with(
        {
          code: "too_big",
        },
        (issue) => throwError([ErrorCodes.INVALID_ARRAY_LENGTH, "max", issue.maximum]),
      )
      .otherwise(() => throwError([ErrorCodes.GENERAL_ERROR]));
  }

  return data;
};
