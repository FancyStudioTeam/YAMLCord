import type { Function as YAMLCordFunction } from "@functions/types";

export type YAMLCordParserOptions = Partial<{
  disabledFunctions: FunctionNames[];
  maximumFunctionCalls: {
    [K in YAMLCordFunction as K["name"]]?: number;
  };
}>;

type FunctionNames = YAMLCordFunction["name"];
