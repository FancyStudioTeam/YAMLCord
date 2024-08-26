import { match } from "ts-pattern";
import type { Sequence } from "#types";
import { ErrorCodes } from "#util/errors/ErrorCodes";
import { FancyScriptError } from "#util/errors/Errors";
import { loadYAMLData } from "./loadYAMLData";

export const createSequences = async (
  data: string,
): Promise<{
  sequences: Sequence[];
}> => {
  const loadedData = await Object(loadYAMLData(data));
  const sequences: Sequence[] = [];

  for (const [property] of Object.entries(loadedData)) {
    match(property)
      .with("sequences", () => {})
      .otherwise((property) => {
        throw new FancyScriptError(ErrorCodes.UNKNOWN_GLOBAL_PROPERTY, property);
      });
  }

  return {
    sequences,
  };
};
