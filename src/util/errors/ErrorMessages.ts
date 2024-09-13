import { ErrorCodes } from "./ErrorCodes";

// biome-ignore lint/suspicious/noExplicitAny:
export const ErrorMessages: Record<ErrorCodes, string | ((...args: any[]) => string)> = {
  [ErrorCodes.GENERAL_ERROR]: "A general error occurred",

  [ErrorCodes.INVALID_YAML_DATA]:
    "Invalid YAML data. This may be due to an identation problem, duplicate keys or bad syntax",
  [ErrorCodes.INVALID_MAX_STRING_LENGTH]: (length: number) =>
    `Invalid string length. Maximum length is ${length} characters`,
  [ErrorCodes.INVALID_MIN_STRING_LENGTH]: (length: number) =>
    `Invalid string length. Minimum length is ${length} characters`,
  [ErrorCodes.INVALID_MAX_ARRAY_LENGTH]: (length: number) =>
    `Invalid array length. Maximum length is ${length} elements`,
  [ErrorCodes.INVALID_MIN_ARRAY_LENGTH]: (length: number) =>
    `Invalid array length. Minimum length is ${length} elements`,
  [ErrorCodes.INVALID_VALUE_TYPE]: (expected: string, received: string) =>
    `Invalid value type. Expected "${expected}", received "${received}"`,
  [ErrorCodes.INVALID_MIN_NUMBER_VALUE]: (length: number) => `Invalid number value. Minimum value is ${length}`,
  [ErrorCodes.INVALID_MAX_NUMBER_VALUE]: (length: number) => `Invalid number value. Maximum value is ${length}`,
  [ErrorCodes.INVALID_STRING_REGEX]: "Invalid string value. The value does not match the regex",

  [ErrorCodes.UNKNOWN_GLOBAL_PROPERTY]: (property: string) => `Unknown global property "${property}"`,
  [ErrorCodes.UNKNOWN_GLOBAL_FUNCTION]: (functionName: string) => `Unknown global function "${functionName}"`,
};
