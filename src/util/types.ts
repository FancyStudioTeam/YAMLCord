import type { Conditional } from "../conditionals/types";
import type { Function } from "../functions/types";
import type { ErrorCodes } from "./errors/ErrorCodes";

export enum SequenceType {
  CONDITIONAL,
  FUNCTION,
}

export type ResultErrorType = [ErrorCodes, ...unknown[]];

export type Sequence = Conditional | Function;
