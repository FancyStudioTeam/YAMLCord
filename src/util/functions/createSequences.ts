import { loadYAMLData } from "./loadYAMLData";

export const createSequences = async (data: string) => {
  const loadedData = await loadYAMLData(data);

  return loadedData;
};
