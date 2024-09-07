import { describe, expect, it } from "vitest";
import { validateAddReactionFunction } from "../../../src/functions/functions/add_reaction/validateAddReactionFunction";
import { SequenceType } from "../../../src/types";

describe("Function: validateAddReactionFunction", () => {
  describe("Success cases (1xxx)", () => {
    it("[1001] Loads valid data", async () =>
      await expect(validateAddReactionFunction("⚠️")).resolves.toStrictEqual({
        data: "⚠️",
        name: "add_reaction",
        type: SequenceType.FUNCTION,
      }));

    it("[1002] Loads valid data", async () =>
      await expect(validateAddReactionFunction(["⚠️", "🚀"])).resolves.toStrictEqual({
        data: ["⚠️", "🚀"],
        name: "add_reaction",
        type: SequenceType.FUNCTION,
      }));

    it("[1003] Loads valid data", async () =>
      await expect(
        validateAddReactionFunction(["⚠️", "🚀", "<:FluentDragon:1275803603369725993>"]),
      ).resolves.toStrictEqual({
        data: ["⚠️", "🚀", "<:FluentDragon:1275803603369725993>"],
        name: "add_reaction",
        type: SequenceType.FUNCTION,
      }));

    it("[1004] Loads valid data", async () =>
      await expect(validateAddReactionFunction("<:FluentDragon:1275803603369725993>")).resolves.toStrictEqual({
        data: "<:FluentDragon:1275803603369725993>",
        name: "add_reaction",
        type: SequenceType.FUNCTION,
      }));

    it("[1005] Loads valid data", async () =>
      await expect(
        validateAddReactionFunction([
          "⚠️",
          "🚀",
          "⚠️",
          "🫡",
          "<:FluentDragon:1275803603369725993>",
          "🔗",
          "<:FluentDragon:1275803603369725993>",
        ]),
      ).resolves.toStrictEqual({
        data: ["⚠️", "🚀", "🫡", "<:FluentDragon:1275803603369725993>", "🔗"],
        name: "add_reaction",
        type: SequenceType.FUNCTION,
      }));

    it("[1006] Loads valid data", async () =>
      await expect(validateAddReactionFunction(["🫡"])).resolves.toStrictEqual({
        data: ["🫡"],
        name: "add_reaction",
        type: SequenceType.FUNCTION,
      }));
  });

  describe("Failure cases (2xxx)", () => {
    it("[2001] Loads invalid data and then rejects with error", async () =>
      await expect(validateAddReactionFunction(1234)).rejects.toThrowError());
  });
});
