import { Pool, QueryConfig, QueryResult, QueryResultRow } from "pg";

const execute = async (pool: Pool, query: string): Promise<boolean> => {
  try {
    //await pool.connect(); // gets connection
    await pool.query(query); // sends queries
    return true;
  } catch (error: any) {
    console.error(error.stack);
    return false;
  }
};

export async function query<T extends QueryResultRow>(
  pool: Pool,
  query: string | QueryConfig
): Promise<QueryResult<T> | null> {
  try {
    return await pool.query<T>(query);
  } catch (error: any) {
    console.error(error.stack);
    return null;
  }
}

const postsTable = `
    CREATE TABLE IF NOT EXISTS "post" (
	    "id" SERIAL PRIMARY KEY,         
	    "body" VARCHAR(200) NOT NULL,
      "date" TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );`;

const usersTable = `
    CREATE TABLE IF NOT EXISTS "user" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

// Initialize the database with the tables,
// return the pool of connections
export const initDb = (): Pool => {
  const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
  });

  execute(pool, postsTable);
  execute(pool, usersTable);
  return pool;
};
