import type { ResultErrorType } from "../../types";
import { FancyScriptError } from "./Errors";

export const throwError = (error: ResultErrorType) => {
  throw new FancyScriptError(error[0], ...error.slice(1));
};
