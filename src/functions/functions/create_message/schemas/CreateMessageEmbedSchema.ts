import { z } from "zod";

const MAXIMUM_STRING_LENGTH = 256;
const MAXIMUM_DESCRIPTION_LENGTH = 4096;
const MAXIMUM_FOOTER_TEXT_LENGTH = 2048;
const MAXIMUM_FIELD_VALUE_LENGTH = 1024;
const MAXIMUM_FIELDS = 25;
const HEX_COLOR_REGEX = /^#([0-9a-fA-F]{3}){1,2}$/;

// Url
const CreateMessageEmbedUrlSchema = z.string().url();

// Color
const CreateMessageEmbedColorSchema = z
  .string()
  .regex(HEX_COLOR_REGEX)
  .transform((value) => Number(`0x${value.replace("#", "").toLowerCase()}`));

// Asset
const CreateMessageEmbedAssetPayloadSchema = z.object({
  height: z.number().optional(),
  url: CreateMessageEmbedUrlSchema,
  width: z.number().optional(),
});
const CreateMessageEmbedAssetSchema = z.union([CreateMessageEmbedAssetPayloadSchema, CreateMessageEmbedUrlSchema]);

// Author
const CreateMessageEmbedAuthorNameSchema = z.string().min(1).max(MAXIMUM_STRING_LENGTH);
const CreateMessageEmbedAuthorPayloadSchema = z.object({
  icon_url: CreateMessageEmbedUrlSchema.optional(),
  name: CreateMessageEmbedAuthorNameSchema,
  url: CreateMessageEmbedUrlSchema.optional(),
});
const CreateMessageEmbedAuthorSchema = z.union([
  CreateMessageEmbedAuthorPayloadSchema,
  CreateMessageEmbedAuthorNameSchema,
]);

// Fields
const CreateMessageEmbedFieldSchema = z.object({
  inline: z.boolean().optional(),
  name: z.string().min(1).max(MAXIMUM_STRING_LENGTH),
  value: z.string().min(1).max(MAXIMUM_FIELD_VALUE_LENGTH),
});
const CreateMessageEmbedFieldsSchema = z.array(CreateMessageEmbedFieldSchema).min(1).max(MAXIMUM_FIELDS);

// Timestamp
const CreateMessageEmbedTimestampSchema = z.union([
  z.string().datetime(),
  z.literal("now").transform((value) => value.toLowerCase()),
]);

// Footer
const CreateMessageEmbedFooterTextSchema = z.string().min(1).max(MAXIMUM_FOOTER_TEXT_LENGTH);
const CreateMessageEmbedFooterPayloadSchema = z.object({
  icon_url: CreateMessageEmbedUrlSchema.optional(),
  text: CreateMessageEmbedFooterTextSchema,
});
const CreateMessageEmbedFooterSchema = z.union([
  CreateMessageEmbedFooterPayloadSchema,
  CreateMessageEmbedFooterTextSchema,
]);

// Title
const CreateMessageEmbedTitleSchema = z.string().min(1).max(MAXIMUM_STRING_LENGTH);

// Description
const CreateMessageEmbedDescriptionSchema = z.string().min(1).max(MAXIMUM_DESCRIPTION_LENGTH);

// Main
export const CreateMessageEmbedSchema = z.object({
  author: CreateMessageEmbedAuthorSchema.optional(),
  color: CreateMessageEmbedColorSchema.optional(),
  description: CreateMessageEmbedDescriptionSchema,
  fields: CreateMessageEmbedFieldsSchema.optional(),
  footer: CreateMessageEmbedFooterSchema.optional(),
  image: CreateMessageEmbedAssetSchema.optional(),
  thumbnail: CreateMessageEmbedAssetSchema.optional(),
  timestamp: CreateMessageEmbedTimestampSchema.optional(),
  title: CreateMessageEmbedTitleSchema.optional(),
  url: CreateMessageEmbedUrlSchema.optional(),
});