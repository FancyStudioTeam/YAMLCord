import { readFileSync } from "node:fs";
import { join } from "node:path";
import { YAMLCordParser } from "@index";

const yamlCord = new YAMLCordParser();
const REGEX = /\[(\d+)\]/;

export const loadYAMLData = async (data: string) => await yamlCord.load(data);

export const parseYAMLData = async (data: string) => await yamlCord.parse(data);

export const baseLoader = (dirname: string, path: string) =>
  readFileSync(join(dirname, "files", `${path}.yml`), "utf-8");

export const getTaskId = (taskName: string) => String(taskName.match(REGEX)?.at(1));

export const fileName = (taskName: string) => {
  const taskId = getTaskId(taskName);
  const parentDirectory = taskId.startsWith("1") ? "1xxx" : "2xxx";

  return `${parentDirectory}/Test_${taskId}`;
};
