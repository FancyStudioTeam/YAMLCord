import type { AddReactionFunction } from "./functions/add_reaction/types.js";
import type { CreateMessageFunction } from "./functions/create_message/types.js";
import type { WaitFunction } from "./functions/wait/types.js";

export type Function = AddReactionFunction | CreateMessageFunction | WaitFunction;
