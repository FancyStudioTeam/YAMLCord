import type { SequenceType } from "#types";

export type Function = CreateMessageFunction | WaitFunction;

export type CreateMessageFunction = {
  data: {
    content: string;
    reply?: "no_ping" | "ping";
  };
  name: "create_message";
  type: SequenceType.FUNCTION;
};

export type WaitFunction = {
  data: number;
  name: "wait";
  type: SequenceType.FUNCTION;
};
