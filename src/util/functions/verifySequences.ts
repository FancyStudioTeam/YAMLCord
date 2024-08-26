import { match } from "ts-pattern";
import { ErrorCodes } from "#util/errors/ErrorCodes";
import { FancyScriptError } from "#util/errors/Errors";
import { CreateSequencesSchemas } from "./schemas/CreateSequencesSchemas";

export const verifySequences = (sequence: unknown) => {
  const { error } = CreateSequencesSchemas.sequences.safeParse(sequence);

  if (error) {
    match(error.issues[0])
      .with(
        {
          code: "invalid_type",
        },
        (issue) => {
          throw new FancyScriptError(ErrorCodes.INVALID_VALUE_TYPE, issue.expected, issue.received);
        },
      )
      .with(
        {
          code: "too_small",
        },
        () => {
          throw new FancyScriptError(ErrorCodes.GENERAL_ERROR);
        },
      )
      .otherwise(() => {
        throw new FancyScriptError(ErrorCodes.GENERAL_ERROR);
      });
  }
};
