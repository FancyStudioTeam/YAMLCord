import { validateConditionalOperator } from "@conditionals/util/validateConditionalOperator.js";
import { ErrorCodes, getErrorMessage } from "@errors";
import { describe, expect, it } from "vitest";

describe("YAMLCord Conditional Structure: operator", () => {
  describe("Success cases (1xxx)", () => {
    it("[1001]", async () => await expect(validateConditionalOperator("eq")).resolves.toStrictEqual("==="));
  });

  describe("Failure cases (2xxx)", () => {
    it("[2001]", async () =>
      await expect(validateConditionalOperator("ne")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_ENUM_VALUE, ["eq", "neq"], "ne"),
      ));

    it("[2002]", async () =>
      await expect(validateConditionalOperator("gt")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_ENUM_VALUE, ["eq", "neq"], "gt"),
      ));

    it("[2003]", async () =>
      await expect(validateConditionalOperator(1)).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_VALUE_TYPE, ["eq", "neq"], "number"),
      ));
  });
});
