import { match } from "ts-pattern";
import { SequenceType } from "#types";
import type { Function } from "#types";
import { ErrorCodes } from "#util/errors/ErrorCodes";
import { throwError } from "#util/throwError";
import { validateCreateMessageFunction } from "./functions/createMessage/validateCreateReactionFunction";
import { validateCreateReactionFunction } from "./functions/createReaction/validateCreateReactionFunction";
import { validateWaitFunction } from "./functions/wait/validateWaitFunction";

const isValid = (sequence: unknown): sequence is Function => {
  return match(sequence)
    .with(
      {
        type: SequenceType.FUNCTION,
      },
      () => true,
    )
    .otherwise(() => false);
};

export const validateFunction = async (sequence: unknown): Promise<Function> => {
  let validFunction: Function | unknown;

  for (const [key, value] of Object.entries(Object(sequence))) {
    await match(key)
      .with("create_message", async () => (validFunction = await validateCreateMessageFunction(value)))
      .with("create_reaction", async () => (validFunction = await validateCreateReactionFunction(value)))
      .with("wait", async () => (validFunction = await validateWaitFunction(value)))
      .otherwise((key) => throwError([ErrorCodes.UNKNOWN_GLOBAL_FUNCTION, key]));
  }

  if (!isValid(validFunction)) return throwError([ErrorCodes.GENERAL_ERROR]);

  return validFunction;
};
