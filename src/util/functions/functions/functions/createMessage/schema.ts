import { z } from "zod";

export const CreateMessageContentSchema = z.string().min(1).max(2000);

export const CreateMessageFunctionSchema = z.object({
  channel_id: z.string().optional(),
  content: CreateMessageContentSchema,
  reply: z.enum(["no_ping", "ping"]).optional(),
});
