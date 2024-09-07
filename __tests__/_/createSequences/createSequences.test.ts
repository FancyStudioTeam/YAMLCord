import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { SequenceType } from "../../../src/types";
import { createSequences } from "../../../src/util/createSequences";
import { ErrorCodes } from "../../../src/util/errors/ErrorCodes";
import { getErrorMessage } from "../../../src/util/errors/Errors";

const loader = (path: string) => readFileSync(join(__dirname, "files", `${path}.yml`), "utf8");

describe("Function: createSequences", () => {
  describe("Success cases (1xxx)", () => {
    it("[1001] Creates valid sequences", async () =>
      await expect(createSequences(loader("1xxx/Test_1001"))).resolves.toStrictEqual({
        custom_variables: null,
        sequences: [
          {
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
                  name: "add_reaction",
                  type: SequenceType.FUNCTION,
                },
              ],
              else: [],
            },
            type: SequenceType.CONDITIONAL,
          },
        ],
      }));

    it("[1002] Creates valid sequences", async () =>
      await expect(createSequences(loader("1xxx/Test_1002"))).resolves.toStrictEqual({
        custom_variables: null,
        sequences: [
          {
            data: {
              if: {
                operator: "===",
                value: "!admin",
                variable: "[message.content]",
              },
              then: [
                {
                  data: {
                    if: {
                      operator: "===",
                      value: "945029082314338407",
                      variable: "[message.user_id]",
                    },
                    then: [
                      {
                        data: {
                          content: "You are an admin!",
                        },
                        name: "create_message",
                        type: SequenceType.FUNCTION,
                      },
                      {
                        data: "🎉",
                        name: "add_reaction",
                        type: SequenceType.FUNCTION,
                      },
                    ],
                    else: [
                      {
                        data: {
                          content: "You are not an admin!",
                        },
                        name: "create_message",
                        type: SequenceType.FUNCTION,
                      },
                      {
                        data: "😢",
                        name: "add_reaction",
                        type: SequenceType.FUNCTION,
                      },
                    ],
                  },
                  type: SequenceType.CONDITIONAL,
                },
              ],
              else: [],
            },
            type: SequenceType.CONDITIONAL,
          },
        ],
      }));

    it("[1003] Creates valid sequences", async () =>
      await expect(createSequences(loader("1xxx/Test_1003"))).resolves.toStrictEqual({
        custom_variables: null,
        sequences: [
          {
            data: {
              if: {
                operator: "===",
                value: "!admin",
                variable: "[message.content]",
              },
              then: [
                {
                  data: {
                    if: {
                      operator: "===",
                      value: "945029082314338407",
                      variable: "[message.user_id]",
                    },
                    then: [
                      {
                        data: {
                          content: "You are an admin!",
                          reply: "no_ping",
                        },
                        name: "create_message",
                        type: SequenceType.FUNCTION,
                      },
                      {
                        data: ["🎉", "🔥", "👑", "✨"],
                        name: "add_reaction",
                        type: SequenceType.FUNCTION,
                      },
                    ],
                    else: [
                      {
                        data: "You are not an admin!",
                        name: "create_message",
                        type: SequenceType.FUNCTION,
                      },
                      {
                        data: "😢",
                        name: "add_reaction",
                        type: SequenceType.FUNCTION,
                      },
                    ],
                  },
                  type: SequenceType.CONDITIONAL,
                },
              ],
              else: [],
            },
            type: SequenceType.CONDITIONAL,
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
        getErrorMessage(ErrorCodes.INVALID_ARRAY_LENGTH, "min", 1),
      ));

    it("[2004] Creates invalid sequences and then rejects with error", async () =>
      await expect(createSequences(loader("2xxx/Test_2004"))).rejects.toThrowError());
  });
});
