import type { SequenceType } from "#types";

type ConditionalIfOperator = "===";

export interface Conditional {
  type: SequenceType.CONDITIONAL;
  data: {
    if: {
      operator: ConditionalIfOperator;
      value: string;
      variable: string;
    };
  };
}
