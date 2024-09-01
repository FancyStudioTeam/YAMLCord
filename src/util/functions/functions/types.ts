import type { CreateMessageFunction } from "./functions/createMessage/types";
import type { CreateReactionFunction } from "./functions/createReaction/types";
import type { WaitFunction } from "./functions/wait/types";

export type Function = CreateMessageFunction | CreateReactionFunction | WaitFunction;
