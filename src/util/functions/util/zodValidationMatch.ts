import { match } from "ts-pattern";
import type { ZodSchema, z } from "zod";
import { ErrorCodes } from "../../errors/ErrorCodes";

export const zodValidationMatch = async <T extends ZodSchema>(
  zodSchema: ZodSchema,
  dataToValidate: unknown,
): Promise<z.infer<T>> =>
  new Promise((resolve, reject) => {
    const { error, data } = zodSchema.safeParse(dataToValidate);

    if (error) {
      console.log(error.issues[0]);
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
          (issue) => reject([ErrorCodes.INVALID_ARRAY_LENGTH, "min", issue.minimum]),
        )
        .with(
          {
            code: "too_big",
          },
          (issue) => reject([ErrorCodes.INVALID_ARRAY_LENGTH, "max", issue.maximum]),
        )
        .with(
          {
            code: "invalid_enum_value",
          },
          (issue) => reject([ErrorCodes.INVALID_ENUM_VALUE, issue.options.join(", "), issue.received]),
        )
        .otherwise(() => reject([ErrorCodes.GENERAL_ERROR]));
    }

    resolve(data);
  });
