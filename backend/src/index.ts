import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { initDb } from "./database";
import { AuthController } from "./routes/auth";
import { PostsController } from "./routes/posts";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const pool = initDb();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

PostsController(app, pool);
AuthController(app, pool);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
