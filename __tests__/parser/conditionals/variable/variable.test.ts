import { validateConditionalVariable } from "@conditionals/util/validateConditionalVariable.js";
import { ErrorCodes, getErrorMessage } from "@errors";
import { describe, expect, it } from "vitest";

describe("YAMLCord Conditional Structure: variable", () => {
  describe("Success cases (1xxx)", () => {
    it("[1001]", async () =>
      await expect(validateConditionalVariable("[message_content]")).resolves.toStrictEqual("[message_content]"));

    it("[1002]", async () =>
      await expect(validateConditionalVariable("[date_now]")).resolves.toStrictEqual("[date_now]"));
  });

  describe("Failure cases (2xxx)", () => {
    it("[2001]", async () =>
      await expect(validateConditionalVariable("[data")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_ENUM_VALUE, "[data"),
      ));

    it("[2002]", async () =>
      await expect(validateConditionalVariable("data")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_ENUM_VALUE, "data"),
      ));

    it("[2003]", async () =>
      await expect(validateConditionalVariable("data]")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_ENUM_VALUE, "data]"),
      ));

    it("[2004]", async () =>
      await expect(validateConditionalVariable("message.content")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_ENUM_VALUE, "message.content"),
      ));

    it("[2005]", async () =>
      await expect(validateConditionalVariable("[message.[content]")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_ENUM_VALUE, "[message.[content]"),
      ));

    it("[2006]", async () =>
      await expect(validateConditionalVariable("[[message.content]]")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_ENUM_VALUE, "[[message.content]]"),
      ));
  });
});
