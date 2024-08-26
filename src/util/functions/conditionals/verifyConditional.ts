import { type Conditional, SequenceType } from "#types";

export const verifyConditional = (conditional: unknown): Conditional => {
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
