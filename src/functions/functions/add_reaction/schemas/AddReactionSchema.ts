import emojiRegex from "emoji-regex";
import { z } from "zod";

const AddReactionUnicodeEmojiSchema = z.string().regex(emojiRegex());
const AddReactionCustomEmojiSchema = z.string().regex(/<a?:[a-zA-Z0-9_]+:\d{17,21}>/);

const AddReactionStringSchema = z.union([AddReactionUnicodeEmojiSchema, AddReactionCustomEmojiSchema]);
const AddReactionArraySchema = z.array(AddReactionStringSchema).min(1).max(10);

export const AddReactionSchema = z.union([AddReactionStringSchema, AddReactionArraySchema]);
