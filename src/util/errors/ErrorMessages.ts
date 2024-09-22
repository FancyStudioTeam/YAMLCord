import { ErrorCodes } from "./ErrorCodes";

const disjunctionFormat = new Intl.ListFormat("en", {
  type: "disjunction",
});

// biome-ignore lint/suspicious/noExplicitAny:
export const ErrorMessages: Record<ErrorCodes, string | ((...args: any[]) => string)> = {
  [ErrorCodes.UNDOCUMENTED_ERROR]: "An undocumented error has occurred",

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
  [ErrorCodes.INVALID_VALUE_TYPE]: (expected: string | string[], received: string) =>
    `Invalid value type. Expected ${Array.isArray(expected) ? disjunctionFormat.format(expected) : expected}, received ${received}`,
  [ErrorCodes.INVALID_MIN_NUMBER_VALUE]: (length: number) => `Invalid number value. Minimum value is ${length}`,
  [ErrorCodes.INVALID_MAX_NUMBER_VALUE]: (length: number) => `Invalid number value. Maximum value is ${length}`,
  [ErrorCodes.INVALID_STRING_REGEX]: "Invalid string value. The value does not match the regex",
  [ErrorCodes.INVALID_ENUM_VALUE]: (expected: string[], received: string) =>
    `Invalid enum value. Expected ${disjunctionFormat.format(expected)}, received ${received}`,
  /* [ErrorCodes.INVALID_UNION]: (errors: string[]) =>
    `Invalid union. Received ${errors.map((error) => error).join(", ")}`, */

  [ErrorCodes.UNKNOWN_GLOBAL_PROPERTY]: (property: string) => `Unknown global property. Received ${property}`,
  [ErrorCodes.UNKNOWN_GLOBAL_FUNCTION]: (functionName: string) => `Unknown global function. Received ${functionName}`,

  [ErrorCodes.EXCEEDED_MAXIMUM_DEPTH]: (depth: number) => `Exceeded maximum depth. Maximum depth is ${depth}`,
  [ErrorCodes.EXCEEDED_MAXIMUM_FUNCTION_CALLS]: (functionName: string, calls: number) =>
    `Exceeded maximum function calls. Maximum ${functionName} calls is ${calls}`,
};
