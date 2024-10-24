import { ErrorCodes, getErrorMessage } from "@errors";
import { SequenceType, YAMLCordParser } from "@index";
import { describe, expect, it } from "vitest";
import { baseLoader, fileName } from "../../utils.js";

const fileLoader = (path: string) => baseLoader(__dirname, path);
const parser = (data: string) => new YAMLCordParser().parse(data);

describe("YAMLCordParser Class: Parse Method Tests", () => {
  describe("Success Cases (1xxx)", () => {
    it("[1001]", async ({ task: { name } }) =>
      await expect(parser(fileLoader(fileName(name)))).resolves.toStrictEqual({
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
                  data: ["👋"],
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

    it("[1002]", async ({ task: { name } }) =>
      await expect(parser(fileLoader(fileName(name)))).resolves.toStrictEqual({
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
                        data: ["🎉"],
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
                        data: ["😢"],
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

    it("[1003]", async ({ task: { name } }) =>
      await expect(parser(fileLoader(fileName(name)))).resolves.toStrictEqual({
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
                        data: {
                          content: "You are not an admin!",
                        },
                        name: "create_message",
                        type: SequenceType.FUNCTION,
                      },
                      {
                        data: ["😢"],
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

    it("[1004]", async ({ task: { name } }) =>
      await expect(parser(fileLoader(fileName(name)))).resolves.toStrictEqual({
        custom: {
          variables: null,
        },
        sequences: [
          {
            data: {
              content: "Hello, world!",
            },
            name: "create_message",
            type: SequenceType.FUNCTION,
          },
          {
            data: ["👋"],
            name: "add_reaction",
            type: SequenceType.FUNCTION,
          },
        ],
      }));

    it("[1005]", async ({ task: { name } }) =>
      await expect(parser(fileLoader(fileName(name)))).resolves.toStrictEqual({
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
                  data: ["🎉"],
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
                  data: ["😢"],
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
    it("[2001]", async ({ task: { name } }) =>
      await expect(parser(fileLoader(fileName(name)))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_VALUE_TYPE, "null"),
      ));

    it("[2002]", async ({ task: { name } }) =>
      await expect(parser(fileLoader(fileName(name)))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.UNKNOWN_GLOBAL_PROPERTY, "unknown_global_property"),
      ));

    it("[2003]", async ({ task: { name } }) =>
      await expect(parser(fileLoader(fileName(name)))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_MIN_ARRAY_LENGTH, 1),
      ));
  });
});
