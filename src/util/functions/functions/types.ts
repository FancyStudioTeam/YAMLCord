import type { AddReactionFunction } from "./functions/addReaction/types";
import type { CreateMessageFunction } from "./functions/createMessage/types";
import type { WaitFunction } from "./functions/wait/types";

export type Function = AddReactionFunction | CreateMessageFunction | WaitFunction;
