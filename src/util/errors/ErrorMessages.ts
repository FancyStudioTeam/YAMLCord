import { ErrorCodes } from "./ErrorCodes";

export const ErrorMessages: Record<ErrorCodes, string | ((data: string) => string)> = {
  [ErrorCodes.GENERAL_ERROR]: "A general error occurred",
  [ErrorCodes.INVALID_YAML_DATA]: "Invalid YAML data",
  [ErrorCodes.UNKNOWN_GLOBAL_PROPERTY]: (property: string) => `Unknown global property: ${property}`,
};
