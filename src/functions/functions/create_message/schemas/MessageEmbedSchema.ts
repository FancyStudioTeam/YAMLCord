import { z } from "zod";

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
  proxied_url: MessageEmbedAssetUrlSchema.optional(),
});

export const MessageEmbedAssetSchema = z.union([MessageEmbedAssetUrlSchema, MessageEmbedAssetDataSchema]).optional();

// author
export const MessageEmbedAuthorNameSchema = z.string().min(1).max(256);

export const MessageEmbedAuthorDataSchema = z.object({
  name: MessageEmbedAuthorNameSchema,
  url: MessageEmbedAssetUrlSchema.optional(),
  icon_url: MessageEmbedAssetUrlSchema.optional(),
  proxied_icon_url: z.string().url().optional(),
});

export const MessageEmbedAuthorSchema = z
  .union([MessageEmbedAuthorDataSchema, MessageEmbedAuthorNameSchema])
  .optional();

// field
export const MessageEmbedFieldSchema = z.object({
  name: z.string().min(1).max(256),
  content: z.string().min(1).max(1024),
  inline: z.boolean().optional(),
});

// timestamp
export const MessageEmbedTimestampSchema = z.union([
  z.string().datetime(),
  z.literal("now").transform((value) => value.toLowerCase()),
]);

// footer
export const MessageEmbedFooterContentSchema = z.string().min(1).max(2048);

export const MessageEmbedFooterDataSchema = z.object({
  text: MessageEmbedFooterContentSchema,
  icon_url: z.string().url().optional(),
  proxied_url: z.string().url().optional(),
});

export const MessageEmbedFooterSchema = z
  .union([MessageEmbedFooterContentSchema, MessageEmbedFooterDataSchema])
  .optional();

// embed
export const MessageEmbedSchema = z.object({
  color: MessageEmbedHexColorSchema.optional(),
  title: z.string().min(1).max(256).optional(),
  author: MessageEmbedAuthorSchema,
  url: z.string().url().optional(),
  description: z.string().min(1).max(4096).optional(),
  thumbnail: MessageEmbedAssetSchema,
  fields: z.array(MessageEmbedFieldSchema).min(1).max(25).optional(),
  image: MessageEmbedAssetSchema,
  video: MessageEmbedAssetSchema,
  timestamp: MessageEmbedTimestampSchema.optional(),
  footer: MessageEmbedFooterSchema,
});
