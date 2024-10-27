import type { ErrorCodes } from "@errors";

export type ResultErrorType = [ErrorCodes, ...unknown[]];

export * from "@conditionals/types";
export * from "@functions/types";
export * from "@index";
export * from "@sequences/types";
export * from "@variables/types";
