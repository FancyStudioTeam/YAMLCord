import { z } from "zod";

const CreateMessageContentSchema = z.string().min(1).max(2000);
const CreateMessagePayloadSchema = z.object({
  channel_id: z.string().optional(),
  content: CreateMessageContentSchema,
  reply: z.enum(["no_ping", "ping"]).optional(),
});

export const CreateMessageSchema = z.union([CreateMessageContentSchema, CreateMessagePayloadSchema]);
