import { ErrorCodes } from "@errors";
import type { ResultErrorType } from "@types";
import { match } from "ts-pattern";
import type { z } from "zod";

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
      ({ received }) => [ErrorCodes.INVALID_VALUE_TYPE, received],
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
      ({ received }) => [ErrorCodes.INVALID_ENUM_VALUE, received],
    )
    /*.with(
      {
        code: "invalid_union",
      },
      ({ unionErrors }) => {
        return [ErrorCodes.INVALID_UNION, unionErrors.map(({ issues }) => zodIssueToErrorCode(issues[0])[0])];
      },
    )*/
    .otherwise(() => [ErrorCodes.UNDOCUMENTED_ERROR]);

export const zod = async <T extends z.ZodSchema>(schema: T, toValidate: unknown): Promise<z.infer<T>> =>
  new Promise((resolve, reject) => {
    const { error, data } = schema.safeParse(toValidate);

    if (error) {
      reject(zodIssueToErrorCode(error.issues[0]));
    }

    resolve(data);
  });
