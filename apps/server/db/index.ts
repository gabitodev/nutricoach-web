import { drizzle } from 'drizzle-orm/postgres-js';
const db = drizzle(process.env.DB_DEV_URL);
export default db;
