import emojiRegex from "emoji-regex";
import { z } from "zod";

const EMOJI_REGEX = {
  UNICODE: new RegExp(`^(?:${emojiRegex().source})$`),
  CUSTOM: /^<a?:[a-zA-Z0-9_]+:\d{17,21}>$/,
};

// Emojis
const AddReactionUnicodeEmojiSchema = z.string().regex(EMOJI_REGEX.UNICODE);
const AddReactionCustomEmojiSchema = z.string().regex(EMOJI_REGEX.CUSTOM);

// Unions
const AddReactionStringSchema = z.union([AddReactionUnicodeEmojiSchema, AddReactionCustomEmojiSchema]);
const AddReactionArraySchema = z
  .array(AddReactionStringSchema)
  .min(1)
  .max(10)
  .transform((value) => Array.from(new Set(value)));

// Main
export const AddReactionSchema = z
  .union([AddReactionStringSchema, AddReactionArraySchema])
  .transform((value) => (typeof value === "string" ? [value] : value));
