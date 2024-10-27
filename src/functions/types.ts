import type { YAMLCordAddReactionFunction } from "./functions/add_reaction/types.js";
import type { YAMLCordCreateMessageFunction } from "./functions/create_message/types.js";
import type { YAMLCordWaitFunction } from "./functions/wait/types.js";

export type YAMLCordFunction = YAMLCordAddReactionFunction | YAMLCordCreateMessageFunction | YAMLCordWaitFunction;
