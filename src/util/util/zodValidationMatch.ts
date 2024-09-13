import { match } from "ts-pattern";
import type { ZodSchema, z } from "zod";
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
            code: "invalid_string",
          },
          (issue) => {
            match(issue.validation).with("regex", () => reject([ErrorCodes.INVALID_STRING_REGEX]));
          },
        )
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
            match(issue.type)
              .with("array", () => reject([ErrorCodes.INVALID_MIN_ARRAY_LENGTH, issue.minimum]))
              .with("number", () => reject([ErrorCodes.INVALID_MIN_NUMBER_VALUE, issue.minimum]))
              .with("string", () => reject([ErrorCodes.INVALID_MIN_STRING_LENGTH, issue.minimum]));
          },
        )
        .with(
          {
            code: "too_big",
          },
          (issue) => {
            match(issue.type)
              .with("array", () => reject([ErrorCodes.INVALID_MAX_ARRAY_LENGTH, issue.maximum]))
              .with("number", () => reject([ErrorCodes.INVALID_MAX_NUMBER_VALUE, issue.maximum]))
              .with("string", () => reject([ErrorCodes.INVALID_MAX_STRING_LENGTH, issue.maximum]));
          },
        )
        .otherwise(() => reject([ErrorCodes.GENERAL_ERROR]));
    }

    resolve(data);
  });
