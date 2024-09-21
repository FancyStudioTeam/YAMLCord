import { match } from "ts-pattern";
import type { z } from "zod";
import { ErrorCodes } from "#errors";
import type { ResultErrorType } from "#types";

const zodIssueToErrorCode = (issue: z.ZodIssue) =>
  match(issue)
    .returnType<ResultErrorType>()
    .with(
      {
        code: "invalid_string",
      },
      ({ validation }) =>
        match(validation)
          .returnType<ResultErrorType>()
          .with("regex", () => [ErrorCodes.INVALID_STRING_REGEX])
          .otherwise(() => [ErrorCodes.UNDOCUMENTED_ERROR]),
    )
    .with(
      {
        code: "invalid_type",
      },
      ({ expected, received }) => [ErrorCodes.INVALID_VALUE_TYPE, expected, received],
    )
    .with(
      {
        code: "too_small",
      },
      ({ type, minimum }) =>
        match(type)
          .returnType<ResultErrorType>()
          .with("array", () => [ErrorCodes.INVALID_MIN_ARRAY_LENGTH, minimum])
          .with("number", () => [ErrorCodes.INVALID_MIN_NUMBER_VALUE, minimum])
          .with("string", () => [ErrorCodes.INVALID_MIN_STRING_LENGTH, minimum])
          .otherwise(() => [ErrorCodes.UNDOCUMENTED_ERROR]),
    )
    .with(
      {
        code: "too_big",
      },
      ({ type, maximum }) =>
        match(type)
          .returnType<ResultErrorType>()
          .with("array", () => [ErrorCodes.INVALID_MAX_ARRAY_LENGTH, maximum])
          .with("number", () => [ErrorCodes.INVALID_MAX_NUMBER_VALUE, maximum])
          .with("string", () => [ErrorCodes.INVALID_MAX_STRING_LENGTH, maximum])
          .otherwise(() => [ErrorCodes.UNDOCUMENTED_ERROR]),
    )
    .with(
      {
        code: "invalid_enum_value",
      },
      ({ received, options }) => [ErrorCodes.INVALID_ENUM_VALUE, options, received],
    )
    .otherwise(() => [ErrorCodes.UNDOCUMENTED_ERROR]);

export const zod = async <T extends z.ZodSchema>(schema: T, toValidate: unknown): Promise<z.infer<T>> =>
  new Promise((resolve, reject) => {
    const { error, data } = schema.safeParse(toValidate);

    if (error) reject(zodIssueToErrorCode(error.issues[0]));

    resolve(data);
  });
