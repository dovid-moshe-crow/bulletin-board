import { sql } from "drizzle-orm"
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"



export const users = sqliteTable("users", {
    id: integer("id").primaryKey(),
    name: text("name").notNull(),
    userId: text("user_id").notNull().unique(),
    createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
    imageUrl: text("image_url"),
    active: integer("active",{mode:"boolean"}).default(false)
})
