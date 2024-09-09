import { describe, expect, it } from "vitest";
import { validateFunction } from "../../../src/functions/validateFunction";
import { SequenceType } from "../../../src/types";
import { loadYAMLData } from "../../../src/util/util/loadYAMLData";
import { baseLoader, fileName } from "../../utils";

const loader = (path: string) => baseLoader(__dirname, path);

describe("Function: add_reaction", () => {
  describe("Success cases (1xxx)", () => {
    it("[1001]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).resolves.toStrictEqual({
        data: "⚠️",
        name: "add_reaction",
        type: SequenceType.FUNCTION,
      }));

    it("[1002]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).resolves.toStrictEqual({
        data: ["⚠️", "🚀"],
        name: "add_reaction",
        type: SequenceType.FUNCTION,
      }));

    it("[1003]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).resolves.toStrictEqual({
        data: "<:emojiWithName:1055230048732450847>",
        name: "add_reaction",
        type: SequenceType.FUNCTION,
      }));

    it("[1004]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).resolves.toStrictEqual({
        data: "<:_:1055230048732450847>",
        name: "add_reaction",
        type: SequenceType.FUNCTION,
      }));

    it("[1005]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).resolves.toStrictEqual({
        data: "🚀",
        name: "add_reaction",
        type: SequenceType.FUNCTION,
      }));

    it("[1006]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).resolves.toStrictEqual({
        data: "<:emojiWithName:1055230048732450847>",
        name: "add_reaction",
        type: SequenceType.FUNCTION,
      }));

    it("[1007]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).resolves.toStrictEqual({
        data: ["🫡", "<:_:1055230048732450847>", "🚀", "<:emojiWithName:1055230048732450847>", "🔗"],
        name: "add_reaction",
        type: SequenceType.FUNCTION,
      }));

    it("[1008]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).resolves.toStrictEqual({
        data: "<a:_:489818863341535247>",
        name: "add_reaction",
        type: SequenceType.FUNCTION,
      }));
  });

  describe("Failure cases (2xxx)", () => {
    it("[2001]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).rejects.toThrowError());

    it("[2002]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).rejects.toThrowError());

    it("[2003]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).rejects.toThrowError());

    it("[2004]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).rejects.toThrowError());

    it("[2005]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).rejects.toThrowError());

    it("[2006]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).rejects.toThrowError());

    it("[2007]", async ({ task }) =>
      await expect(validateFunction(await loadYAMLData(loader(fileName(task.name))))).rejects.toThrowError());
  });
});