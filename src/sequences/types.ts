import type { YAMLCordConditional } from "@conditionals/types.js";
import type { YAMLCordFunction } from "@functions/types.js";

export enum SequenceType {
  CONDITIONAL,
  FUNCTION,
}

export type YAMLCordSequence = YAMLCordConditional | YAMLCordFunction;
