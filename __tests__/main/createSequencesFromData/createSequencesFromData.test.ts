import { describe, expect, it } from "vitest";
import { SequenceType } from "../../../src/types.js";
import { ErrorCodes } from "../../../src/util/errors/ErrorCodes.js";
import { getErrorMessage } from "../../../src/util/errors/Errors.js";
import { baseLoader, createSequencesFromData, fileName } from "../../utils.js";

const loader = (path: string) => baseLoader(__dirname, path);

describe("YAMLCord Class Function: createSequencesFromData", () => {
  describe("Success cases (1xxx)", () => {
    it("[1001]", async ({ task }) =>
      await expect(createSequencesFromData(loader(fileName(task.name)))).resolves.toStrictEqual({
        custom: {
          variables: null,
        },
        sequences: [
          {
            data: {
              if: {
                operator: "===",
                value: "!hello",
                variable: "[message_content]",
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
      await expect(createSequencesFromData(loader(fileName(task.name)))).resolves.toStrictEqual({
        custom: {
          variables: null,
        },
        sequences: [
          {
            data: {
              if: {
                operator: "===",
                value: "!admin",
                variable: "[message_content]",
              },
              then: [
                {
                  data: {
                    if: {
                      operator: "===",
                      value: "945029082314338407",
                      variable: "[user_id]",
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
      await expect(createSequencesFromData(loader(fileName(task.name)))).resolves.toStrictEqual({
        custom: {
          variables: null,
        },
        sequences: [
          {
            data: {
              if: {
                operator: "===",
                value: "!admin",
                variable: "[message_content]",
              },
              then: [
                {
                  data: {
                    if: {
                      operator: "===",
                      value: "945029082314338407",
                      variable: "[user_id]",
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
      await expect(createSequencesFromData(loader(fileName(task.name)))).resolves.toStrictEqual({
        custom: {
          variables: null,
        },
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

    it("[1005]", async ({ task }) =>
      await expect(createSequencesFromData(loader(fileName(task.name)))).resolves.toStrictEqual({
        custom: {
          variables: null,
        },
        sequences: [
          {
            data: {
              if: {
                operator: "===",
                value: "[owner_id]",
                variable: "[user_id]",
              },
              then: [
                {
                  data: {
                    content: "You are the owner of the server!",
                    reply: "no_ping",
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
                    content: "You are not the owner of the server!",
                    reply: "no_ping",
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
      }));
  });

  describe("Failure cases (2xxx)", () => {
    it("[2001]", async ({ task }) =>
      await expect(createSequencesFromData(loader(fileName(task.name)))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_VALUE_TYPE, "null"),
      ));

    it("[2002]", async ({ task }) =>
      await expect(createSequencesFromData(loader(fileName(task.name)))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.UNKNOWN_GLOBAL_PROPERTY, "unknown_global_property"),
      ));

    it("[2003]", async ({ task }) =>
      await expect(createSequencesFromData(loader(fileName(task.name)))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_MIN_ARRAY_LENGTH, 1),
      ));
  });
});
