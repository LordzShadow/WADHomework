// src/index.js
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { initDb } from "./database";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const pool = initDb();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
