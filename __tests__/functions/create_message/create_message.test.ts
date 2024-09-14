import { describe, expect, it } from "vitest";
import { validateFunction } from "../../../src/functions/validateFunction";
import { SequenceType } from "../../../src/types";
import { ErrorCodes } from "../../../src/util/errors/ErrorCodes";
import { getErrorMessage } from "../../../src/util/errors/Errors";
import { loadYAMLData } from "../../../src/util/util/loadYAMLData";
import { baseLoader, fileName } from "../../utils";

const loader = (path: string) => baseLoader(__dirname, path);

describe("YAMLCord Function: create_message", () => {
  describe("Success cases (1xxx)", () => {
    it("[1001]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).resolves.toStrictEqual({
        data: "Hello, world!",
        name: "create_message",
        type: SequenceType.FUNCTION,
      }));

    it("[1002]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).resolves.toStrictEqual({
        data: {
          content: "Hello, world!",
        },
        name: "create_message",
        type: SequenceType.FUNCTION,
      }));

    it("[1003]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).resolves.toStrictEqual({
        data: {
          content: "Hello, world!",
          reply: "no_ping",
        },
        name: "create_message",
        type: SequenceType.FUNCTION,
      }));
  });

  describe("Failure cases (2xxx)", () => {
    it("[2001]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_MIN_STRING_LENGTH, 1),
      ));

    it("[2002]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.UNDOCUMENTED_ERROR),
      ));

    it("[2003]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.UNDOCUMENTED_ERROR),
      ));
  });
});
