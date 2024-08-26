import type { Conditional } from "./conditionals/types";

export enum SequenceType {
  CONDITIONAL,
  FUNCTION,
}

export type Sequence = Conditional;
