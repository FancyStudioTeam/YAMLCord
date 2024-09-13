import { match } from "ts-pattern";
import type { ZodSchema, z } from "zod";
import type { ResultErrorType } from "#types";
import { ErrorCodes } from "../errors/ErrorCodes";

export const zodValidationMatch = async <T extends ZodSchema>(
  zodSchema: ZodSchema,
  dataToValidate: unknown,
): Promise<z.infer<T>> =>
  new Promise((resolve, reject) => {
    const { error, data } = zodSchema.safeParse(dataToValidate);

    if (error) {
      match(error.issues[0])
        .with(
          {
            code: "invalid_type",
          },
          (issue) => reject([ErrorCodes.INVALID_VALUE_TYPE, issue.expected, issue.received]),
        )
        .with(
          {
            code: "too_small",
          },
          (issue) => {
            let rejectData: ResultErrorType = [ErrorCodes.GENERAL_ERROR];

            match(issue.type)
              .with("array", () => (rejectData = [ErrorCodes.INVALID_MIN_ARRAY_LENGTH, issue.minimum]))
              .with("string", () => (rejectData = [ErrorCodes.INVALID_MIN_STRING_LENGTH, issue.minimum]));

            reject(rejectData);
          },
        )
        .with(
          {
            code: "too_big",
          },
          (issue) => {
            let rejectData: ResultErrorType = [ErrorCodes.GENERAL_ERROR];

            match(issue.type)
              .with("array", () => (rejectData = [ErrorCodes.INVALID_MAX_ARRAY_LENGTH, issue.maximum]))
              .with("string", () => (rejectData = [ErrorCodes.INVALID_MAX_STRING_LENGTH, issue.maximum]));

            reject(rejectData);
          },
        )
        .otherwise(() => reject([ErrorCodes.GENERAL_ERROR]));
    }

    resolve(data);
  });
