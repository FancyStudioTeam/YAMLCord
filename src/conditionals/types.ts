import type { Sequence, SequenceType, YAMLCordVariables } from "@types";

type YAMLCordConditionalOperators = "===" | "!==";

export interface YAMLCordConditional {
  type: SequenceType.CONDITIONAL;
  data: {
    if: {
      operator: YAMLCordConditionalOperators;
      value: string | YAMLCordVariables;
      variable: string | YAMLCordVariables;
    };
    then: Sequence[];
    else?: Sequence[];
  };
}
