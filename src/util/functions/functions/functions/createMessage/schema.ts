import { z } from "zod";

export const CreateMessageFunctionSchema = z.object({
  channel_id: z.string().optional(),
  content: z.string(),
  reply: z.enum(["no_ping", "ping"]).optional(),
});
