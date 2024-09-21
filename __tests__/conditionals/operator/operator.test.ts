import { describe, expect, it } from "vitest";
import { validateConditionalOperator } from "../../../src/conditionals/util/validateConditionalOperator";
import { ErrorCodes } from "../../../src/util/errors/ErrorCodes";
import { getErrorMessage } from "../../../src/util/errors/Errors";

describe("YAMLCord Conditional Structure: operator", () => {
  describe("Success cases (1xxx)", () => {
    it("[1001]", async () => await expect(validateConditionalOperator("eq")).resolves.toStrictEqual("==="));
  });

  describe("Failure cases (2xxx)", () => {
    it("[2001]", async () =>
      await expect(validateConditionalOperator("ne")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_ENUM_VALUE, ["eq"], "ne"),
      ));

    it("[2002]", async () =>
      await expect(validateConditionalOperator("gt")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_ENUM_VALUE, ["eq"], "gt"),
      ));

    it("[2003]", async () =>
      await expect(validateConditionalOperator("gte")).rejects.toThrowError(
        getErrorMessage(ErrorCodes.INVALID_ENUM_VALUE, ["eq"], "gte"),
      ));
  });
});
