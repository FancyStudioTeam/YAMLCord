import { type Conditional, type Function, type Sequence, SequenceType } from "#types";

export { YAMLCord } from "./classes/YAMLCord";
export { SequenceType } from "./sequences/types";

export const isConditional = (sequence: Sequence): sequence is Conditional =>
  sequence.type === SequenceType.CONDITIONAL;
export const isFunction = (sequence: Sequence): sequence is Function => sequence.type === SequenceType.FUNCTION;
