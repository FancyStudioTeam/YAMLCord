import { describe, expect, it } from "vitest";
import { validateConditionalVariable } from "../../../src/conditionals/util/validateConditionalVariable";
import { ErrorCodes } from "../../../src/util/errors/ErrorCodes";
import { getErrorMessage } from "../../../src/util/errors/Errors";

describe("YAMLCord Conditional Structure: variable", () => {
  describe("Success cases (1xxx)", () => {
    it("[1001]", async () => await expect(validateConditionalVariable("[data]")).resolves.toStrictEqual("[data]"));

    it("[1002]", async () =>
      await expect(validateConditionalVariable("[message.content]")).resolves.toStrictEqual("[message.content]"));
  });

  describe("Failure cases (2xxx)", () => {
    it("[2001]", async () =>
      await expect(validateConditionalVariable("[data")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_STRING_REGEX),
      ));

    it("[2002]", async () =>
      await expect(validateConditionalVariable("data")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_STRING_REGEX),
      ));

    it("[2003]", async () =>
      await expect(validateConditionalVariable("data]")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_STRING_REGEX),
      ));

    it("[2004]", async () =>
      await expect(validateConditionalVariable("message.content")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_STRING_REGEX),
      ));

    it("[2005]", async () =>
      await expect(validateConditionalVariable("[message.[content]")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_STRING_REGEX),
      ));

    it("[2006]", async () =>
      await expect(validateConditionalVariable("[[message.content]]")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_STRING_REGEX),
      ));
  });
});
