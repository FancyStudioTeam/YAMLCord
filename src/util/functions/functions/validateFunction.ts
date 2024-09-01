import { SequenceType } from "#types";
import type { Function } from "./types";

export const validateFunction = async (sequence: unknown): Promise<Function> => {
  console.log(sequence);

  return {
    type: SequenceType.FUNCTION,
    data: {
      content: "Hello, world!",
    },
    name: "create_message",
  };
};
