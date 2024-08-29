import type { SequenceType } from "#types";

export type ConditionalIfOperator = "===";

export interface Conditional {
  type: SequenceType.CONDITIONAL;
  data: {
    if: {
      operator: ConditionalIfOperator;
      value: string;
      variable: string;
    };
    then: unknown[];
    else?: unknown[];
  };
}
