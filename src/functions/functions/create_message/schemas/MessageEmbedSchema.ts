import { z } from "zod";

// constants
const MAX_STRING_LENGTH = 256;
const MAX_DESCRIPTION_LENGTH = 4096;
const MAX_FOOTER_LENGTH = 2048;
const MAX_FOOTER_VALUE_LENGTH = 1024;
const MAX_FIELDS = 25;

// color
export const HEX_COLOR_REGEX = /^#([0-9a-fA-F]{3}){1,2}$/;

export const MessageEmbedHexColorSchema = z
  .string()
  .regex(HEX_COLOR_REGEX)
  .transform((value) => value.toLowerCase());

// assets
export const MessageEmbedAssetUrlSchema = z.string().url();

export const MessageEmbedAssetDataSchema = z.object({
  height: z.number().optional(),
  width: z.number().optional(),
  url: MessageEmbedAssetUrlSchema.optional(),
  proxy_url: MessageEmbedAssetUrlSchema.optional(),
});

export const MessageEmbedAssetSchema = z.union([MessageEmbedAssetUrlSchema, MessageEmbedAssetDataSchema]).optional();

// author
export const MessageEmbedAuthorNameSchema = z.string().min(1).max(MAX_STRING_LENGTH);

export const MessageEmbedAuthorDataSchema = z.object({
  name: MessageEmbedAuthorNameSchema,
  url: MessageEmbedAssetUrlSchema.optional(),
  icon_url: MessageEmbedAssetUrlSchema.optional(),
  proxy_icon_url: z.string().url().optional(),
});

export const MessageEmbedAuthorSchema = z
  .union([MessageEmbedAuthorDataSchema, MessageEmbedAuthorNameSchema])
  .optional();

// field
export const MessageEmbedFieldSchema = z.object({
  name: z.string().min(1).max(MAX_STRING_LENGTH),
  value: z.string().min(1).max(MAX_FOOTER_VALUE_LENGTH),
  inline: z.boolean().optional(),
});

// timestamp
export const MessageEmbedTimestampSchema = z.union([
  z.string().datetime(),
  z.literal("now").transform((value) => value.toLowerCase()),
]);

// footer
export const MessageEmbedFooterContentSchema = z.string().min(1).max(MAX_FOOTER_LENGTH);

export const MessageEmbedFooterDataSchema = z.object({
  text: MessageEmbedFooterContentSchema,
  icon_url: z.string().url().optional(),
  proxy_icon_url: z.string().url().optional(),
});

export const MessageEmbedFooterSchema = z
  .union([MessageEmbedFooterContentSchema, MessageEmbedFooterDataSchema])
  .optional();

// embed
export const MessageEmbedSchema = z.object({
  color: MessageEmbedHexColorSchema.optional(),
  title: z.string().min(1).max(MAX_STRING_LENGTH).optional(),
  author: MessageEmbedAuthorSchema,
  url: z.string().url().optional(),
  description: z.string().min(1).max(MAX_DESCRIPTION_LENGTH).optional(),
  thumbnail: MessageEmbedAssetSchema,
  fields: z.array(MessageEmbedFieldSchema).min(1).max(MAX_FIELDS).optional(),
  image: MessageEmbedAssetSchema,
  video: MessageEmbedAssetSchema,
  timestamp: MessageEmbedTimestampSchema.optional(),
  footer: MessageEmbedFooterSchema,
});

export type MessageEmbed = z.infer<typeof MessageEmbedSchema>;
