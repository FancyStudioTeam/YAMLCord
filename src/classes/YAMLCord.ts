import { load } from "js-yaml";
import { match } from "ts-pattern";
import { ErrorCodes, throwError } from "#errors";
import { validateSequences } from "#sequences/validateSequences.js";
import type { Sequence } from "#types";

export class YAMLCord {
  loadYAMLData = async (data: string) => {
    const loadedData = new Promise((resolve) => {
      resolve(load(data));
    });

    return loadedData
      .then((data) => {
        return data;
      })
      .catch(() => throwError([ErrorCodes.INVALID_YAML_DATA]));
  };

  createSequencesFromData = async (
    data: string,
  ): Promise<{
    custom_variables: null;
    sequences: Sequence[];
  }> => {
    const yamlData = await this.loadYAMLData(data);
    const loadedDataObject = Object(yamlData);
    const sequences: Sequence[] = [];

    for (const [property, data] of Object.entries(loadedDataObject)) {
      await match(property)
        .with("sequences", async () => sequences.push(...(await validateSequences(data))))
        .otherwise((property) => throwError([ErrorCodes.UNKNOWN_GLOBAL_PROPERTY, property]));
    }

    return {
      custom_variables: null,
      sequences,
    };
  };
}
