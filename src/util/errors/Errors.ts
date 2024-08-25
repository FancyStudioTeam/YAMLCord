import type { ErrorCodes } from "./ErrorCodes";
import { ErrorMessages } from "./ErrorMessages";

const getErrorMessage = (code: ErrorCodes) => ErrorMessages[code];

export class FancyScriptError extends Error {
  code: ErrorCodes;

  constructor(code: ErrorCodes) {
    super(getErrorMessage(code));
    this.name = `${this.constructor.name} [${code}]`;
    this.code = code;

    Error.captureStackTrace(this, FancyScriptError);
  }
}
