import { ErrorCodes, getErrorMessage } from "@errors";
import { describe, expect, it } from "vitest";
import { baseLoader, fileName, loadYAMLData } from "../../utils.js";

const loader = (path: string) => baseLoader(__dirname, path);

describe("YAMLCord Class Function: loadYAMLData", () => {
  describe("Success cases (1xxx)", () => {
    it("[1001]", async ({ task }) =>
      await expect(loadYAMLData(loader(fileName(task.name)))).resolves.toStrictEqual({
        string: "Hello, world!",
      }));

    it("[1002]", async ({ task }) =>
      await expect(loadYAMLData(loader(fileName(task.name)))).resolves.toStrictEqual({
        number: 1234,
      }));

    it("[1003]", async ({ task }) =>
      await expect(loadYAMLData(loader(fileName(task.name)))).resolves.toStrictEqual({
        null: null,
      }));

    it("[1004]", async ({ task }) =>
      await expect(loadYAMLData(loader(fileName(task.name)))).resolves.toStrictEqual({
        array: ["Hello", "world!"],
      }));

    it("[1005]", async ({ task }) =>
      await expect(loadYAMLData(loader(fileName(task.name)))).resolves.toStrictEqual({
        boolean: true,
      }));

    it("[1006]", async ({ task }) =>
      await expect(loadYAMLData(loader(fileName(task.name)))).resolves.toStrictEqual({
        sequences: [
          {
            if: "[message.content] eq '!hello'",
            then: [
              {
                create_message: {
                  content: "Hello, world!",
                  reply: "no_ping",
                },
              },
              {
                create_reaction: "👋",
              },
            ],
          },
        ],
      }));
  });

  describe("Failure cases (2xxx)", () => {
    it("[2001]", async ({ task }) =>
      await expect(loadYAMLData(loader(fileName(task.name)))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_YAML_DATA),
      ));
  });
});
