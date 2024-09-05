import { Result } from "@sapphire/result";
import { load } from "js-yaml";
import { ErrorCodes } from "../../errors/ErrorCodes";
import { throwError } from "../../errors/throwError";
import type { ResultErrorType } from "../types";

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
