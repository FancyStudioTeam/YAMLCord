import { z } from "zod";

export const VariableSchema = z.enum([
  "[date_now]",
  "[guild_id]",
  "[guild_name]",
  "[message_content]",
  "[owner_id]",
  "[owner_name]",
  "[user_id]",
  "[user_name]",
]);
