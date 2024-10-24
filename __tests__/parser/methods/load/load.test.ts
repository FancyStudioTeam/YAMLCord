import { ErrorCodes, getErrorMessage } from "@errors";
import { YAMLCordParser } from "@index";
import { describe, expect, it } from "vitest";
import { baseLoader, fileName } from "../../utils.js";

const fileLoader = (path: string) => baseLoader(__dirname, path);
const loader = (data: string) => new YAMLCordParser().load(data);

describe("YAMLCordParser Class: Load Method Tests", () => {
  describe("Success Cases (1xxx)", () => {
    it("[1001]", async ({ task: { name } }) =>
      await expect(loader(fileLoader(fileName(name)))).resolves.toStrictEqual({
        string: "Hello, world!",
      }));

    it("[1002]", async ({ task: { name } }) =>
      await expect(loader(fileLoader(fileName(name)))).resolves.toStrictEqual({
        number: 1234,
      }));

    it("[1003]", async ({ task: { name } }) =>
      await expect(loader(fileLoader(fileName(name)))).resolves.toStrictEqual({
        null: null,
      }));

    it("[1004]", async ({ task: { name } }) =>
      await expect(loader(fileLoader(fileName(name)))).resolves.toStrictEqual({
        array: ["Hello", "world!"],
      }));

    it("[1005]", async ({ task: { name } }) =>
      await expect(loader(fileLoader(fileName(name)))).resolves.toStrictEqual({
        boolean: true,
      }));

    it("[1006]", async ({ task: { name } }) =>
      await expect(loader(fileLoader(fileName(name)))).resolves.toStrictEqual({
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

  describe("Failure Cases (2xxx)", () => {
    it("[2001]", async ({ task: { name } }) =>
      await expect(loader(fileLoader(fileName(name)))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_YAML_DATA),
      ));
  });
});
