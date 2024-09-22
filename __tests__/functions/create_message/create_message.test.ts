import { describe, expect, it } from "vitest";
import { validateFunction } from "../../../src/functions/validateFunction";
import { SequenceType } from "../../../src/types";
import { ErrorCodes } from "../../../src/util/errors/ErrorCodes";
import { getErrorMessage } from "../../../src/util/errors/Errors";
import { baseLoader, fileName, loadYAMLData } from "../../utils";

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
    it("[1004]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).resolves.toStrictEqual({
        data: {
          content: "Hello, world! (with embeds)",
          embeds: [
            {
              title: "Wow! It's an embed!",
            },
          ],
        },
        name: "create_message",
        type: SequenceType.FUNCTION,
      }));
    it("[1005]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).resolves.toStrictEqual({
        data: {
          content: "Hello, world! (with embeds)",
          reply: "ping",
          embeds: [
            {
              title: "Wow! It's an embed!",
              color: "#ff00ff",
              author: "The Embed God",
              url: "https://helloworld.org/",
            },
          ],
        },
        name: "create_message",
        type: SequenceType.FUNCTION,
      }));
    it("[1006]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).resolves.toStrictEqual({
        data: {
          content: "Hello, world! (with embeds)",
          embeds: [
            {
              title: "Wow! It's an embed!",
              color: "#ff00ff",
              author: {
                name: "The Embed God",
              },
              fields: [
                {
                  name: "Why I should be the Embed God.",
                  value: "Because I love embeds!",
                },
              ],
              timestamp: "now",
            },
          ],
        },
        name: "create_message",
        type: SequenceType.FUNCTION,
      }));
    it("[1007]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).resolves.toStrictEqual({
        data: {
          content: "Hello, world! (with embeds)",
          embeds: [
            {
              image: {
                proxy_url: "https://clearly.notaproxiedurl.com/assets/helloworld.png",
                height: 32,
                width: 48,
              },
              timestamp: "2024-09-22T02:54:19.015Z",
              footer: "Made with love.",
            },
          ],
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

    it("[2004]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_MIN_STRING_LENGTH, 1),
      ));

    it("[2005]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_MAX_ARRAY_LENGTH, 10),
      ));

    it("[2006]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.UNDOCUMENTED_ERROR),
      ));

    it("[2007]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).rejects.toThrowError(
        getErrorMessage(ErrorCodes.UNDOCUMENTED_ERROR),
      ));
  });
});
