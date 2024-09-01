import { Result } from "@sapphire/result";
import type { z } from "zod";
import type { ResultErrorType } from "#types";
import { zodValidationMatch } from "#util/functions/zodValidationMatch";
import { throwError } from "#util/throwError";
import { ConditionalIfVariableSchema } from "../../schemas/ConditionalSchemas";

export const validateConditionalVariable = async (variable: unknown) => {
  const result = await Result.fromAsync<z.infer<ConditionalIfVariableSchemaType>, ResultErrorType>(
    async () => await zodValidationMatch<ConditionalIfVariableSchemaType>(ConditionalIfVariableSchema, variable),
  );

  if (result.isErr()) {
    throwError(result.unwrapErr());
  }

  return result.unwrap();
};

type ConditionalIfVariableSchemaType = typeof ConditionalIfVariableSchema;
