export const isRawConditionalObject = (sequence: unknown) =>
  typeof sequence === "object" && sequence !== null && "if" in sequence && "then" in sequence;
