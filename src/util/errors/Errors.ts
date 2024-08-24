import type { ErrorCodes } from "./ErrorCodes";
import { ErrorMessages } from "./ErrorMessages";

export class FancyScriptError extends Error {
  code: ErrorCodes;

  constructor(code: ErrorCodes) {
    super(ErrorMessages[code]);
    this.name = `${this.constructor.name} [${code}]`;
    this.code = code;

    Error.captureStackTrace(this, FancyScriptError);
  }
}
