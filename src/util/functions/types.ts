import type { ErrorCodes } from "#util/errors/ErrorCodes";
import type { Conditional } from "./conditionals/types";

export enum SequenceType {
  CONDITIONAL,
  FUNCTION,
}

export type ResultErrorType = [ErrorCodes, ...unknown[]];

export type Sequence = Conditional;
