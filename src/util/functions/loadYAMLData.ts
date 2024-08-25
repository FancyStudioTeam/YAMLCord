import { Result } from "@sapphire/result";
import { load } from "js-yaml";
import { ErrorCodes } from "../errors/ErrorCodes";
import { FancyScriptError } from "../errors/Errors";

export const loadYAMLData = async (data: string) => {
  const result = await Result.fromAsync(async () => await load(data));

  if (result.isErr()) {
    throw new FancyScriptError(ErrorCodes.INVALID_YAML_DATA);
  }

  const loadedData = result.unwrap();

  if (typeof loadedData === "string") {
    throw new FancyScriptError(ErrorCodes.CANNOT_BE_STRING);
  }

  return loadedData;
};
