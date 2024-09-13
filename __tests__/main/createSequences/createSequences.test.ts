import { describe, expect, it } from "vitest";
import { SequenceType } from "../../../src/types";
import { createSequences } from "../../../src/util/createSequences";
import { ErrorCodes } from "../../../src/util/errors/ErrorCodes";
import { getErrorMessage } from "../../../src/util/errors/Errors";
import { baseLoader, fileName } from "../../utils";

const loader = (path: string) => baseLoader(__dirname, path);

describe("Main Function: createSequences", () => {
  describe("Success cases (1xxx)", () => {
    it("[1001]", async ({ task }) =>
      await expect(createSequences(loader(fileName(task.name)))).resolves.toStrictEqual({
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

    it("[1002]", async ({ task }) =>
      await expect(createSequences(loader(fileName(task.name)))).resolves.toStrictEqual({
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

    it("[1003]", async ({ task }) =>
      await expect(createSequences(loader(fileName(task.name)))).resolves.toStrictEqual({
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

    it("[1004]", async ({ task }) =>
      await expect(createSequences(loader(fileName(task.name)))).resolves.toStrictEqual({
        custom_variables: null,
        sequences: [
          {
            data: "Hello, world!",
            name: "create_message",
            type: SequenceType.FUNCTION,
          },
          {
            data: "👋",
            name: "add_reaction",
            type: SequenceType.FUNCTION,
          },
        ],
      }));
  });

  describe("Failure cases (2xxx)", () => {
    it("[2001]", async ({ task }) =>
      await expect(createSequences(loader(fileName(task.name)))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_VALUE_TYPE, "array", "null"),
      ));

    it("[2002]", async ({ task }) =>
      await expect(createSequences(loader(fileName(task.name)))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.UNKNOWN_GLOBAL_PROPERTY, "unknown_global_property"),
      ));

    it("[2003]", async ({ task }) =>
      await expect(createSequences(loader(fileName(task.name)))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_MIN_ARRAY_LENGTH, 1),
      ));
  });
});
