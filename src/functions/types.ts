import type { AddReactionFunction } from "./functions/add_reaction/types";
import type { CreateMessageFunction } from "./functions/create_message/types";
import type { WaitFunction } from "./functions/wait/types";

export type Function = AddReactionFunction | CreateMessageFunction | WaitFunction;
