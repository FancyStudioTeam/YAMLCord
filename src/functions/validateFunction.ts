import { match } from "ts-pattern";
import { type Function, SequenceType } from "#types";
import { ErrorCodes } from "../util/errors/ErrorCodes";
import { throwError } from "../util/errors/throwError";
import { validateAddReactionFunction } from "./_/add_reaction/validateAddReactionFunction";
import { validateCreateMessageFunction } from "./_/create_message/validateCreateMessageFunction";
import { validateWaitFunction } from "./_/wait/validateWaitFunction";

const isValid = (sequence: unknown): sequence is Function =>
  typeof sequence === "object" && sequence !== null && "type" in sequence && sequence.type === SequenceType.FUNCTION;

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
