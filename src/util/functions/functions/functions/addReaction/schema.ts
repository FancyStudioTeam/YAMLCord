import { FormattedCustomEmoji } from "@sapphire/discord-utilities";
import emojiRegex from "emoji-regex";
import { z } from "zod";

const AddReactionUnicodeEmojiSchema = z.string().regex(emojiRegex());
const AddReactionCustomEmojiSchema = z.string().regex(FormattedCustomEmoji);

const AddReactionStringSchema = z.union([AddReactionUnicodeEmojiSchema, AddReactionCustomEmojiSchema]);
const AddReactionArraySchema = z.array(AddReactionStringSchema).min(1).max(10);

export const AddReactionSchema = z.union([AddReactionStringSchema, AddReactionArraySchema]);
