import type { Conditional } from "@conditionals/types.js";
import type { Function } from "@functions/types.js";

export enum SequenceType {
  CONDITIONAL,
  FUNCTION,
}

export type Sequence = Conditional | Function;
