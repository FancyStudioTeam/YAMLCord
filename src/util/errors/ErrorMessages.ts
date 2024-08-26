import { ErrorCodes } from "./ErrorCodes";

// biome-ignore lint/suspicious/noExplicitAny:
export const ErrorMessages: Record<ErrorCodes, string | ((...args: any[]) => string)> = {
  [ErrorCodes.GENERAL_ERROR]: "A general error occurred",

  [ErrorCodes.INVALID_YAML_DATA]: "Invalid YAML data",
  [ErrorCodes.INVALID_VALUE_TYPE]: (expected: string, received: string) =>
    `Invalid value type. Expected "${expected}", received "${received}"`,

  [ErrorCodes.UNKNOWN_GLOBAL_PROPERTY]: (property: string) => `Unknown global property "${property}"`,
};
