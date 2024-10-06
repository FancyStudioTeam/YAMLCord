import { validateConditionalValue } from "@conditionals/util/validateConditionalValue.js";
import { ErrorCodes, getErrorMessage } from "@errors";
import { describe, expect, it } from "vitest";

describe("YAMLCord Conditional Structure: value", () => {
  describe("Success cases (1xxx)", () => {
    it("[1001]", async () => await expect(validateConditionalValue("'Hello'")).resolves.toStrictEqual("Hello"));

    it("[1002]", async () =>
      await expect(validateConditionalValue("'Hello World!'")).resolves.toStrictEqual("Hello World!"));

    it("[1003]", async () =>
      await expect(validateConditionalValue("'Hello '' World!'")).resolves.toStrictEqual("Hello '' World!"));
  });

  describe("Failure cases (2xxx)", () => {
    it("[2001]", async () =>
      await expect(validateConditionalValue("Hello")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_STRING_REGEX),
      ));

    it("[2002]", async () =>
      await expect(validateConditionalValue("'Hello")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_STRING_REGEX),
      ));

    it("[2003]", async () =>
      await expect(validateConditionalValue("Hello'")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_STRING_REGEX),
      ));

    it("[2004]", async () =>
      await expect(validateConditionalValue("''")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_STRING_REGEX),
      ));
  });
});
