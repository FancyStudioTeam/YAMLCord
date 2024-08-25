import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ErrorCodes } from "../../src/util/errors/ErrorCodes";
import { ErrorMessages } from "../../src/util/errors/ErrorMessages";
import { loadYAMLData } from "../../src/util/functions/loadYAMLData";

const loader = (path: string) => readFileSync(join(__dirname, "files", `${path}.yml`), "utf8");

describe("loadYAMLData", () => {
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
            // biome-ignore lint/suspicious/noThenProperty:
            then: [
              {
                create_message: {
                  content: "Hello, world!",
                },
              },
              {
                reply: true,
              },
            ],
          },
        ],
      }));
  });

  describe("Failure cases (2xxx)", () => {
    it("[2001] Loads invalid data and then rejects with error", async () =>
      await expect(loadYAMLData(loader("2xxx/Test_2001"))).rejects.toThrowError(
        ErrorMessages[ErrorCodes.INVALID_YAML_DATA],
      ));

    it("[2002] Loads invalid data and then rejects with error", async () =>
      await expect(loadYAMLData(loader("2xxx/Test_2002"))).rejects.toThrowError(
        ErrorMessages[ErrorCodes.CANNOT_BE_STRING],
      ));
  });
});
