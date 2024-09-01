import { ErrorCodes } from "./ErrorCodes";

// biome-ignore lint/suspicious/noExplicitAny:
export const ErrorMessages: Record<ErrorCodes, string | ((...args: any[]) => string)> = {
  [ErrorCodes.GENERAL_ERROR]: "A general error occurred",

  [ErrorCodes.INVALID_YAML_DATA]: "Invalid YAML data",
  [ErrorCodes.INVALID_VALUE_TYPE]: (expected: string, received: string) =>
    `Invalid value type. Expected "${expected}", received "${received}"`,
  [ErrorCodes.INVALID_ARRAY_LENGTH]: (type: "min" | "max", length: number) =>
    `Invalid array length. Expected ${type === "max" ? "at most" : "at least"} ${length} item(s)`,
  [ErrorCodes.INVALID_ENUM_VALUE]: (expected: string, received: string) =>
    `Invalid enum value. Expected "${expected}", received "${received}"`,
  [ErrorCodes.INVALUD_REGEX_VALUE]: "Invalid regex value",

  [ErrorCodes.UNKNOWN_GLOBAL_PROPERTY]: (property: string) => `Unknown global property "${property}"`,
  [ErrorCodes.UNKNOWN_GLOBAL_FUNCTION]: (functionName: string) => `Unknown global function "${functionName}"`,
};
