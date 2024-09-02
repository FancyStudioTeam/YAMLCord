import { describe, expect, it } from "vitest";
import { ErrorCodes } from "#util/errors/ErrorCodes";
import { validateConditionalVariable } from "#util/functions/conditionals/util/functions/validateConditionalVariable";
import { throwError } from "#util/throwError";

describe("Function: validateConditionalVariable", () => {
  describe("Success cases (1xxx)", () => {
    it("[1001] Loads valid variable data", async () =>
      await expect(validateConditionalVariable("[message.content]")).resolves.toBe("[message.content]"));

    it("[1002] Loads valid variable data", async () =>
      await expect(validateConditionalVariable("[message]")).resolves.toBe("[message]"));
  });

  describe("Failure cases (2xxx)", () => {
    it("[2001] Loads invalid variable data", async () =>
      await expect(validateConditionalVariable("message.content")).rejects.toThrowError());

    it("[2002] Loads invalid variable data", async () =>
      await expect(validateConditionalVariable("message")).rejects.toThrowError());

    it("[2003] Loads invalid variable data", async () =>
      await expect(validateConditionalVariable("[message.content")).rejects.toThrowError());

    it("[2004] Loads invalid variable data", async () =>
      await expect(validateConditionalVariable("message.content]")).rejects.toThrowError());

    it("[2005] Loads invalid variable data", async () =>
      await expect(validateConditionalVariable("[message.content]]")).rejects.toThrowError());
  });
});
