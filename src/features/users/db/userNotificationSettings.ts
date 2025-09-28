import { db } from "@/drizzle/db";
import { UserNotificationSettingsTable } from "@/drizzle/schema";

export async function insertUserNotificationSettings(
  user: typeof UserNotificationSettingsTable.$inferInsert
) {
  await db
    .insert(UserNotificationSettingsTable)
    .values(user)
    .onConflictDoNothing();
}
