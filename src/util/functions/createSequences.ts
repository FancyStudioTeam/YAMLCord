import { match } from "ts-pattern";
import type { Sequence } from "#types";
import { ErrorCodes } from "#util/errors/ErrorCodes";
import { throwError } from "#util/throwError";
import { loadYAMLData } from "./util/loadYAMLData";
import { validateSequences } from "./util/validateSequences";

export const createSequences = async (
  data: string,
): Promise<{
  sequences: Sequence[];
}> => {
  const loadedData = await Object(loadYAMLData(data));
  const sequences: Sequence[] = [];

  for (const [property, data] of Object.entries(loadedData)) {
    await match(property)
      .with("sequences", async () => sequences.push(...(await validateSequences(data))))
      .otherwise((property) => throwError([ErrorCodes.UNKNOWN_GLOBAL_PROPERTY, property]));
  }

  return {
    sequences,
  };
};
