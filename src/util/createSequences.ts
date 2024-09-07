import { match } from "ts-pattern";
import type { Sequence } from "#types";
import { ErrorCodes } from "./errors/ErrorCodes";
import { throwError } from "./errors/throwError";
import { loadYAMLData } from "./functions/loadYAMLData";
import { validateSequences } from "./functions/validateSequences";

export const createSequences = async (
  data: string,
): Promise<{
  custom_variables: unknown;
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
    custom_variables: null,
    sequences,
  };
};
