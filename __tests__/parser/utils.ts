import { readFileSync } from "node:fs";
import { join } from "node:path";

const TASK_ID_REGEX = /\[(\d+)\]/;

export const baseLoader = (dirname: string, path: string) =>
  readFileSync(join(dirname, "files", `${path}.yml`), "utf-8");

export const getTaskId = (taskName: string) => String(taskName.match(TASK_ID_REGEX)?.at(1));

export const fileName = (taskName: string) => {
  const taskId = getTaskId(taskName);
  const parentDirectory = taskId.startsWith("1") ? "1xxx" : "2xxx";

  return `${parentDirectory}/Test_${taskId}`;
};
