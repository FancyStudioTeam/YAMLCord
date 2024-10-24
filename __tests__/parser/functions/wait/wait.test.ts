import { ErrorCodes, getErrorMessage } from "@errors";
import { validateFunction } from "@functions/validateFunction.js";
import { YAMLCordParser } from "@index";
import { SequenceType } from "@types";
import { describe, expect, it } from "vitest";
import { baseLoader, fileName } from "../../utils.js";

const fileLoader = (path: string) => baseLoader(__dirname, path);
const loader = (data: string) => new YAMLCordParser().load(data);

describe("YAMLCord Function: wait", () => {
  describe("Success cases (1xxx)", () => {
    it("[1001]", async ({ task }) =>
      await expect(validateFunction(await loader(fileLoader(fileName(task.name))))).resolves.toStrictEqual({
        data: 5000,
        name: "wait",
        type: SequenceType.FUNCTION,
      }));

    it("[1002]", async ({ task }) =>
      await expect(validateFunction(await loader(fileLoader(fileName(task.name))))).resolves.toStrictEqual({
        data: 1000,
        name: "wait",
        type: SequenceType.FUNCTION,
      }));

    it("[1003]", async ({ task }) =>
      await expect(validateFunction(await loader(fileLoader(fileName(task.name))))).resolves.toStrictEqual({
        data: 300000,
        name: "wait",
        type: SequenceType.FUNCTION,
      }));

    it("[1004]", async ({ task }) =>
      await expect(validateFunction(await loader(fileLoader(fileName(task.name))))).resolves.toStrictEqual({
        data: 12500,
        name: "wait",
        type: SequenceType.FUNCTION,
      }));
  });

  describe("Failure cases (2xxx)", () => {
    it("[2001]", async ({ task }) =>
      await expect(validateFunction(await loader(fileLoader(fileName(task.name))))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_MIN_NUMBER_VALUE, 1),
      ));

    it("[2002]", async ({ task }) =>
      await expect(validateFunction(await loader(fileLoader(fileName(task.name))))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_MIN_NUMBER_VALUE, 1),
      ));

    it("[2003]", async ({ task }) =>
      await expect(validateFunction(await loader(fileLoader(fileName(task.name))))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_MAX_NUMBER_VALUE, 300),
      ));

    it("[2004]", async ({ task }) =>
      await expect(validateFunction(await loader(fileLoader(fileName(task.name))))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.UNKNOWN_GLOBAL_FUNCTION, "wait"),
      ));
  });
});
