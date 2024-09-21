import { load } from "js-yaml";
import { ErrorCodes } from "../errors/ErrorCodes";
import { throwError } from "../errors/throwError";

export const loadYAMLData = async (data: string) => {
  const loadedData = new Promise((resolve) => {
    resolve(load(data));
  });

  return loadedData
    .then((data) => {
      return data;
    })
    .catch(() => throwError([ErrorCodes.INVALID_YAML_DATA]));
};
