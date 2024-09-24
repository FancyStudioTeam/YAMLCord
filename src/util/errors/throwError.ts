import { YAMLCordError } from "@errors";
import type { ResultErrorType } from "@types";

export const throwError = (error: ResultErrorType) => {
  throw new YAMLCordError(error[0], ...error.slice(1));
};
