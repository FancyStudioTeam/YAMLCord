import type { Conditional } from "../conditionals/types";
import type { Function } from "../functions/types";

export enum SequenceType {
  CONDITIONAL,
  FUNCTION,
}

export type Sequence = Conditional | Function;
