import type { ErrorCodes } from "./ErrorCodes";
import { ErrorMessages } from "./ErrorMessages";

export const getErrorMessage = (code: ErrorCodes, data?: string): string =>
  typeof ErrorMessages[code] === "function" ? ErrorMessages[code](String(data)) : ErrorMessages[code];

export class FancyScriptError extends Error {
  code: ErrorCodes;

  constructor(code: ErrorCodes, data?: string) {
    super(getErrorMessage(code, data));
    this.name = `${this.constructor.name} [${code}]`;
    this.code = code;

    Error.captureStackTrace(this, FancyScriptError);
  }
}
