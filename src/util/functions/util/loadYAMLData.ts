import { Result } from "@sapphire/result";
import { load } from "js-yaml";
import type { ResultErrorType } from "#types";
import { ErrorCodes } from "#util/errors/ErrorCodes.js";
import { throwError } from "#util/throwError.js";

export const loadYAMLData = async (data: string) => {
  const result = await Result.fromAsync<unknown, ResultErrorType>(
    async () =>
      await load(data, {
        json: true,
      }),
  );

  if (result.isErr()) {
    throwError([ErrorCodes.INVALID_YAML_DATA]);
  }

  return result.unwrap();
};
