import { match } from "ts-pattern";
import type { Sequence } from "#types";
import { ErrorCodes } from "#util/errors/ErrorCodes";
import { FancyScriptError } from "#util/errors/Errors";
import { loadYAMLData } from "./loadYAMLData";
import { verifySequences } from "./verifySequences";

export const createSequences = async (
  data: string,
): Promise<{
  sequences: Sequence[];
}> => {
  const loadedData = await Object(loadYAMLData(data));
  const sequences: Sequence[] = [];

  for (const [property, data] of Object.entries(loadedData)) {
    match(property)
      .with("sequences", () => verifySequences(data))
      .otherwise((property) => {
        throw new FancyScriptError(ErrorCodes.UNKNOWN_GLOBAL_PROPERTY, property);
      });
  }

  return {
    sequences,
  };
};
