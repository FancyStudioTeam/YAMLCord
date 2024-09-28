import type { Sequence, SequenceType } from "#types";

export type ResolvedConditionalIfOperator = "===" | "!==";

export interface Conditional {
  type: SequenceType.CONDITIONAL;
  data: {
    if: {
      operator: ResolvedConditionalIfOperator;
      value: string;
      variable: string;
    };
    then: Sequence[];
    else?: Sequence[];
  };
}
