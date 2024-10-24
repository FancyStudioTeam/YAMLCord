import { ErrorCodes, throwError } from "@errors";
import { validateSequences } from "@sequences/validateSequences.js";
import type { YAMLCordSequence } from "@types";
import { load } from "js-yaml";
import { match } from "ts-pattern";

export class YAMLCordParser {
  load = async (data: string) => {
    const loadedData = new Promise((resolve) => {
      resolve(load(data));
    });

    return loadedData
      .then((data) => {
        return data;
      })
      .catch(() => throwError([ErrorCodes.INVALID_YAML_DATA]));
  };

  parse = async (
    data: string,
  ): Promise<{
    custom: {
      variables: null;
    };
    sequences: YAMLCordSequence[];
  }> => {
    const yamlData = await this.load(data);
    const loadedDataObject = new Object(yamlData);
    const sequences: YAMLCordSequence[] = [];

    for (const [property, data] of Object.entries(loadedDataObject)) {
      await match(property)
        .with("sequences", async () => sequences.push(...(await validateSequences(data))))
        .otherwise((property) => throwError([ErrorCodes.UNKNOWN_GLOBAL_PROPERTY, property]));
    }

    return {
      custom: {
        variables: null,
      },
      sequences,
    };
  };
}
