import type { ErrorCodes } from "./ErrorCodes";
import { ErrorMessages } from "./ErrorMessages";

// biome-ignore lint/suspicious/noExplicitAny:
export const getErrorMessage = (code: ErrorCodes, ...args: any[]): string =>
  typeof ErrorMessages[code] === "function" ? ErrorMessages[code](...args) : ErrorMessages[code];

export class YAMLCordError extends Error {
  code: ErrorCodes;

  // biome-ignore lint/suspicious/noExplicitAny:
  constructor(code: ErrorCodes, ...args: any[]) {
    super(getErrorMessage(code, ...args));
    this.name = `${this.constructor.name} [${code}]`;
    this.code = code;

    Error.captureStackTrace(this, YAMLCordError);
  }
}
