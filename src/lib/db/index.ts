import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

// Only check DATABASE_URL at runtime, not during build
const getDatabaseUrl = () => {
  // During build, Next.js might not have env vars, so we allow it to be undefined
  // The actual error will be thrown at runtime when the API is called
  return process.env.DATABASE_URL;
};

let _db: ReturnType<typeof drizzle> | null = null;

function initializeDb() {
  const databaseUrl = getDatabaseUrl();
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set");
  }
  const sql = neon(databaseUrl);
  return drizzle(sql, { schema });
}

// Lazy initialization - only creates connection when first accessed
export const db = new Proxy({} as ReturnType<typeof drizzle>, {
  get(_target, prop) {
    if (!_db) {
      _db = initializeDb();
    }
    return _db[prop as keyof ReturnType<typeof drizzle>];
  },
});