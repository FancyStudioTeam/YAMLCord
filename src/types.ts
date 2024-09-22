import type { ErrorCodes } from "#errors";
import type { Conditional } from "#types";
import type { Function } from "#types";

export enum SequenceType {
  CONDITIONAL,
  FUNCTION,
}

export type ResultErrorType = [ErrorCodes, ...unknown[]];

export type Sequence = Conditional | Function;

export * from "./index";
export * from "./functions/types";
export * from "./conditionals/types";
