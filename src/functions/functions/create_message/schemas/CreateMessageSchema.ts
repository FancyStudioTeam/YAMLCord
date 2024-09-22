import { z } from "zod";

import { MessageEmbedSchema } from "./MessageEmbedSchema";

const CreateMessageContentSchema = z.string().min(1).max(2000);
const CreateMessagePayloadSchema = z.object({
  channel_id: z.string().optional(),
  content: CreateMessageContentSchema,
  reply: z.enum(["no_ping", "ping"]).optional(),
  embeds: z.array(MessageEmbedSchema).min(1).max(10).optional(),
});

export const CreateMessageSchema = z.union([CreateMessagePayloadSchema, CreateMessageContentSchema]);
