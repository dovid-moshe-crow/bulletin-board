import type { Config } from "drizzle-kit";
export default {
    schema: "./db/schema",
    driver: "turso",
    out: "./drizzle",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
        authToken: process.env.DATABASE_AUTH_TOKEN
    }
} satisfies Config;