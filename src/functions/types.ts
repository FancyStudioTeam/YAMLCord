import type { AddReactionFunction } from "./_/add_reaction/types";
import type { CreateMessageFunction } from "./_/create_message/types";
import type { WaitFunction } from "./_/wait/types";

export type Function = AddReactionFunction | CreateMessageFunction | WaitFunction;
