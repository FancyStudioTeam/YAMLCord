import { match } from "ts-pattern";
import type { z } from "zod";
import { ErrorCodes } from "../errors/ErrorCodes";

export const zodValidationMatch = async <T extends z.ZodSchema>(
  zodSchema: T,
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
          ({ validation }) => match(validation).with("regex", () => reject([ErrorCodes.INVALID_STRING_REGEX])),
        )
        .with(
          {
            code: "invalid_type",
          },
          ({ expected, received }) => reject([ErrorCodes.INVALID_VALUE_TYPE, expected, received]),
        )
        .with(
          {
            code: "too_small",
          },
          ({ type, minimum }) =>
            match(type)
              .with("array", () => reject([ErrorCodes.INVALID_MIN_ARRAY_LENGTH, minimum]))
              .with("number", () => reject([ErrorCodes.INVALID_MIN_NUMBER_VALUE, minimum]))
              .with("string", () => reject([ErrorCodes.INVALID_MIN_STRING_LENGTH, minimum])),
        )
        .with(
          {
            code: "too_big",
          },
          ({ type, maximum }) =>
            match(type)
              .with("array", () => reject([ErrorCodes.INVALID_MAX_ARRAY_LENGTH, maximum]))
              .with("number", () => reject([ErrorCodes.INVALID_MAX_NUMBER_VALUE, maximum]))
              .with("string", () => reject([ErrorCodes.INVALID_MAX_STRING_LENGTH, maximum])),
        )
        .otherwise(() => reject([ErrorCodes.UNDOCUMENTED_ERROR]));
    }

    resolve(data);
  });
