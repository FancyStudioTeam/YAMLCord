import { ErrorCodes } from "./ErrorCodes";

export const ErrorMessages: Record<ErrorCodes, string> = {
  [ErrorCodes.UNKNOWN_ERROR]: "An unknown error occurred",
  [ErrorCodes.INVALID_YAML_DATA]: "Invalid YAML data",
  [ErrorCodes.CANNOT_BE_STRING]: "YAML data cannot return a string",
};
