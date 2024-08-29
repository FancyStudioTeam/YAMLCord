import { Result } from "@sapphire/result";
import type { z } from "zod";
import { type Conditional, type ResultErrorType, SequenceType } from "#types";
import { throwError } from "#util/throwError";
import { zodValidationMatch } from "../zodValidationMatch";
import { ConditionalSchema } from "./schemas/ConditionalSchemas";

export const validateConditional = async (conditional: unknown): Promise<Conditional> => {
  const result = await Result.fromAsync<z.infer<ConditionalSchemaType>, ResultErrorType>(() =>
    zodValidationMatch<ConditionalSchemaType>(ConditionalSchema, conditional),
  );

  console.log(result);

  if (result.isErr()) {
    throwError(result.unwrapErr());
  }

  const data = result.unwrap();

  console.log("DATA:", data);

  return {
    type: SequenceType.CONDITIONAL,
    data: {
      if: {
        operator: "===",
        value: "!hello",
        variable: "[message.content]",
      },
    },
  };
};

type ConditionalSchemaType = typeof ConditionalSchema;
