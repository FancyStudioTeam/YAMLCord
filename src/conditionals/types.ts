import type { ResolvedVariables, Sequence, SequenceType } from "#types";

export type ResolvedConditionalIfOperator = "===" | "!==";

export interface Conditional {
  type: SequenceType.CONDITIONAL;
  data: {
    if: {
      operator: ResolvedConditionalIfOperator;
      value: string | ResolvedVariables;
      variable: string | ResolvedVariables;
    };
    then: Sequence[];
    else?: Sequence[];
  };
}
