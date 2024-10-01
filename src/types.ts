import type { ErrorCodes } from "@errors";

export type ResultErrorType = [ErrorCodes, ...unknown[]];

export * from "@conditionals/types.js";
export * from "@functions/types.js";
export * from "@index";
export * from "@sequences/types.js";
export * from "@variables/types.js";
