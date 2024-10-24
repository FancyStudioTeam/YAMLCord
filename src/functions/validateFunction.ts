import { ErrorCodes, throwError } from "@errors";
import { SequenceType, type YAMLCordFunction } from "@types";
import { match } from "ts-pattern";

const isValid = (sequence: unknown): sequence is YAMLCordFunction =>
  typeof sequence === "object" && sequence !== null && "type" in sequence && sequence.type === SequenceType.FUNCTION;

export const validateFunction = async (sequence: unknown): Promise<YAMLCordFunction> => {
  let validFunction: YAMLCordFunction | unknown;

  for (const [key, value] of Object.entries(new Object(sequence))) {
    await match(key)
      .with(
        "add_reaction()",
        async () =>
          (validFunction = await import("./functions/add_reaction/validateAddReactionFunction.js").then(
            ({ validateAddReactionFunction }) => validateAddReactionFunction(value),
          )),
      )
      .with(
        "create_message()",
        async () =>
          (validFunction = await import("./functions/create_message/validateCreateMessageFunction.js").then(
            ({ validateCreateMessageFunction }) => validateCreateMessageFunction(value),
          )),
      )
      .with(
        "wait()",
        async () =>
          (validFunction = await import("./functions/wait/validateWaitFunction.js").then(({ validateWaitFunction }) =>
            validateWaitFunction(value),
          )),
      )
      .otherwise((key) => throwError([ErrorCodes.UNKNOWN_GLOBAL_FUNCTION, key]));
  }

  if (!isValid(validFunction)) {
    return throwError([ErrorCodes.UNDOCUMENTED_ERROR]);
  }

  return validFunction;
};
