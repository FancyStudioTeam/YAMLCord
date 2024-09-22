import { z } from "zod";
import { CreateMessageEmbedSchema } from "./CreateMessageEmbedSchema";

const MAXIMUM_CONTENT_LENGTH = 2000;

// Options
const CreateMessageChannelIdSchema = z.string().min(1).max(100);
const CreateMessageContentSchema = z.string().min(1).max(MAXIMUM_CONTENT_LENGTH);
const CreateMessageEmbedsSchema = z.array(CreateMessageEmbedSchema).min(1).max(10);
const CreateMessageReplySchema = z.enum(["no_ping", "ping"]);

// Payload
const CreateMessagePayloadSchema = z.object({
  channel_id: CreateMessageChannelIdSchema.optional(),
  content: CreateMessageContentSchema,
  embeds: CreateMessageEmbedsSchema.optional(),
  reply: CreateMessageReplySchema.optional(),
});

// Main
export const CreateMessageSchema = z.union([CreateMessagePayloadSchema, CreateMessageContentSchema]);
