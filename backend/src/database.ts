import { Pool } from "pg";

const execute = async (pool: Pool, query: string): Promise<boolean> => {
  try {
    await pool.connect(); // gets connection
    await pool.query(query); // sends queries
    return true;
  } catch (error: any) {
    console.error(error.stack);
    return false;
  }
};

// Create the "post" table if it does not exist
// TODO: Add the other tables and change this one
const postTable = `
    CREATE TABLE IF NOT EXISTS "post" (
	    "id" SERIAL PRIMARY KEY,         
	    "title" VARCHAR(200) NOT NULL,
	    "body" VARCHAR(200) NOT NULL,
      "urllink" VARCHAR(200)  
    );`;

// A function to execute the previous query

export const initDb = (): Pool => {
  const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
  });

  execute(pool, postTable).then((result) => {
    if (result) {
      console.log("Initialized post table");
    }
  });
  return pool;
};
