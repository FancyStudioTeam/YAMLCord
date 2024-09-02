import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ErrorCodes } from "#util/errors/ErrorCodes";
import { getErrorMessage } from "#util/errors/Errors";
import { loadYAMLData } from "#util/functions/util/loadYAMLData";

const loader = (path: string) => readFileSync(join(__dirname, "files", `${path}.yml`), "utf8");

describe("Function: loadYAMLData", () => {
  describe("Success cases (1xxx)", () => {
    it("[1001] Loads valid data", async () =>
      await expect(loadYAMLData(loader("1xxx/Test_1001"))).resolves.toStrictEqual({
        string: "hello world",
      }));

    it("[1002] Loads valid data", async () =>
      await expect(loadYAMLData(loader("1xxx/Test_1002"))).resolves.toStrictEqual({
        number: 1234,
      }));

    it("[1003] Loads valid data", async () =>
      await expect(loadYAMLData(loader("1xxx/Test_1003"))).resolves.toStrictEqual({
        null: null,
      }));

    it("[1004] Loads valid data", async () =>
      await expect(loadYAMLData(loader("1xxx/Test_1004"))).resolves.toStrictEqual({
        array: ["hello", "world"],
      }));

    it("[1005] Loads valid data", async () =>
      await expect(loadYAMLData(loader("1xxx/Test_1005"))).resolves.toStrictEqual({
        boolean: true,
      }));

    it("[1006] Loads valid data", async () =>
      await expect(loadYAMLData(loader("1xxx/Test_1006"))).resolves.toStrictEqual({
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
    it("[2001] Loads invalid data and then rejects with error", async () =>
      await expect(loadYAMLData(loader("2xxx/Test_2001"))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_YAML_DATA),
      ));
  });
});
