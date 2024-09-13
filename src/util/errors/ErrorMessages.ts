import { ErrorCodes } from "./ErrorCodes";

// biome-ignore lint/suspicious/noExplicitAny:
export const ErrorMessages: Record<ErrorCodes, string | ((...args: any[]) => string)> = {
  [ErrorCodes.GENERAL_ERROR]: "A general error occurred",

  [ErrorCodes.INVALID_YAML_DATA]:
    "Invalid YAML data. This may be due to an identation problem, duplicate keys or bad syntax",
  [ErrorCodes.INVALID_MAX_STRING_LENGTH]: (length: number) =>
    `Invalid string length. Max length is ${length} characters`,
  [ErrorCodes.INVALID_MIN_STRING_LENGTH]: (length: number) =>
    `Invalid string length. Min length is ${length} characters`,
  [ErrorCodes.INVALID_MAX_ARRAY_LENGTH]: (length: number) => `Invalid array length. Max length is ${length} elements`,
  [ErrorCodes.INVALID_MIN_ARRAY_LENGTH]: (length: number) => `Invalid array length. Min length is ${length} elements`,

  [ErrorCodes.UNKNOWN_GLOBAL_PROPERTY]: (property: string) => `Unknown global property "${property}"`,
  [ErrorCodes.UNKNOWN_GLOBAL_FUNCTION]: (functionName: string) => `Unknown global function "${functionName}"`,
};
