import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { SequenceType } from "#types";
import { ErrorCodes } from "#util/errors/ErrorCodes";
import { getErrorMessage } from "#util/errors/Errors";
import { createSequences } from "#util/functions/createSequences";

const loader = (path: string) => readFileSync(join(__dirname, "files", `${path}.yml`), "utf8");

describe("Function: createSequences", () => {
  describe("Success cases (1xxx)", () => {
    it("[1001] Creates valid sequences", async () =>
      await expect(createSequences(loader("1xxx/Test_1001"))).resolves.toStrictEqual({
        sequences: [
          {
            type: SequenceType.CONDITIONAL,
            data: {
              if: {
                operator: "===",
                value: "!hello",
                variable: "[message.content]",
              },
              then: [
                {
                  data: {
                    content: "Hello, world!",
                    reply: "no_ping",
                  },
                  name: "create_message",
                  type: SequenceType.FUNCTION,
                },
                {
                  data: "👋",
                  name: "create_reaction",
                  type: SequenceType.FUNCTION,
                },
              ],
            },
          },
        ],
      }));
  });

  describe("Failure cases (2xxx)", () => {
    it("[2001] Creates invalid sequences and then rejects with error", async () =>
      await expect(createSequences(loader("2xxx/Test_2001"))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_VALUE_TYPE, "array", "null"),
      ));

    it("[2002] Creates invalid sequences and then rejects with error", async () =>
      await expect(createSequences(loader("2xxx/Test_2002"))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.UNKNOWN_GLOBAL_PROPERTY, "unknown_global_property"),
      ));

    it("[2003] Creates invalid sequences and then rejects with error", async () =>
      await expect(createSequences(loader("2xxx/Test_2003"))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.GENERAL_ERROR),
      ));
  });
});
