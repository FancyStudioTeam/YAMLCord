import type { ErrorCodes } from "./ErrorCodes";
import { ErrorMessages } from "./ErrorMessages";

export const getErrorMessage = (code: ErrorCodes, ...args: string[]): string =>
  typeof ErrorMessages[code] === "function" ? ErrorMessages[code](...args) : ErrorMessages[code];

export class FancyScriptError extends Error {
  code: ErrorCodes;

  constructor(code: ErrorCodes, ...args: string[]) {
    super(getErrorMessage(code, ...args));
    this.name = `${this.constructor.name} [${code}]`;
    this.code = code;

    Error.captureStackTrace(this, FancyScriptError);
  }
}
