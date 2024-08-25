import { Result } from "@sapphire/result";
import { load } from "js-yaml";
import { ErrorCodes } from "../errors/ErrorCodes";
import { FancyScriptError } from "../errors/Errors";

export const loadYAMLData = async (data: string) => {
  const result = await Result.fromAsync(
    async () =>
      await load(data, {
        json: true,
      }),
  );

  if (result.isErr()) {
    throw new FancyScriptError(ErrorCodes.INVALID_YAML_DATA);
  }

  return result.unwrap();
};
