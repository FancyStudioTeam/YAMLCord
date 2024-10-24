import type { YAMLCordAddReactionFunction } from "@functions/functions/add_reaction/types.js";
import type { YAMLCordCreateMessageFunction } from "@functions/functions/create_message/types.js";
import type { YAMLCordWaitFunction } from "@functions/functions/wait/types.js";

export type YAMLCordFunction = YAMLCordAddReactionFunction | YAMLCordCreateMessageFunction | YAMLCordWaitFunction;
