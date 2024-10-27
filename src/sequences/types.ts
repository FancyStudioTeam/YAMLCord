import type { YAMLCordConditional } from "@conditionals/types";
import type { YAMLCordFunction } from "@functions/types";

export enum SequenceType {
  CONDITIONAL,
  FUNCTION,
}

export type YAMLCordSequence = YAMLCordConditional | YAMLCordFunction;
