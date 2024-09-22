import type { ErrorCodes } from "#errors";

export enum SequenceType {
  CONDITIONAL,
  FUNCTION,
}

export type ResultErrorType = [ErrorCodes, ...unknown[]];

export * from "./conditionals/types";
export * from "./functions/types";
export * from "./index";
export * from "./sequences/types";
