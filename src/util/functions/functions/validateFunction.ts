import { match } from "ts-pattern";
import { SequenceType } from "#types";
import type { Function } from "#types";
import { ErrorCodes } from "#util/errors/ErrorCodes";
import { throwError } from "#util/throwError";
import { validateAddReactionFunction } from "./functions/addReaction/validateAddReactionFunction";
import { validateCreateMessageFunction } from "./functions/createMessage/validateCreateMessageFunction";
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
      .with("add_reaction", async () => (validFunction = await validateAddReactionFunction(value)))
      .with("create_message", async () => (validFunction = await validateCreateMessageFunction(value)))
      .with("wait", async () => (validFunction = await validateWaitFunction(value)))
      .otherwise((key) => throwError([ErrorCodes.UNKNOWN_GLOBAL_FUNCTION, key]));
  }

  if (!isValid(validFunction)) return throwError([ErrorCodes.GENERAL_ERROR]);

  return validFunction;
};
