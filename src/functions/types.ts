import type { AddReactionFunction } from "@functions/functions/add_reaction/types.js";
import type { CreateMessageFunction } from "@functions/functions/create_message/types.js";
import type { WaitFunction } from "@functions/functions/wait/types.js";

export type Function = AddReactionFunction | CreateMessageFunction | WaitFunction;
