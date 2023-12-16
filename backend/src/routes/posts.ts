import { Express } from "express";
import { Pool } from "pg";
import { authenticateToken } from "../authentication";
import { query } from "../database";
import { Post } from "../types";

export const PostsController = (app: Express, pool: Pool) => {
  app.get("/posts", authenticateToken, async (req, res) => {
    const result = await query<Post>(pool, "SELECT * FROM posts");
    if (!result) {
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(result.rows);
  });

  app.get("/posts/:id", authenticateToken, async (req, res) => {
    const result = await query<Post>(pool, {
      text: "SELECT * FROM posts WHERE id = $1",
      values: [req.params.id],
    });
    if (!result) {
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    if (result.rows.length) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: "Not found" });
    }
  });

  app.post("/posts", authenticateToken, async (req, res) => {
    if (!req.body.body) {
      res.status(400).json({ error: "Bad request" });
      return;
    }
    const result = await query<Post>(pool, {
      text: "INSERT INTO posts(body) VALUES($1) RETURNING *",
      values: [req.body.body],
    });
    if (!result) {
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(result.rows[0]);
  });

  app.delete("/posts/:id", authenticateToken, async (req, res) => {
    const result = await query<Post>(pool, {
      text: "DELETE FROM posts WHERE id = $1 returning *",
      values: [req.params.id],
    });
    if (!result) {
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    if (result.rows.length) {
      res.json({ message: "Post deleted" });
    } else {
      res.status(404).json({ error: "Not found" });
    }
  });

  app.put("/posts/:id", authenticateToken, async (req, res) => {
    if (!req.body.body) {
      res.status(400).json({ error: "Bad request" });
      return;
    }
    const result = await query<Post>(pool, {
      text: "UPDATE posts SET body = $1 WHERE id = $2 RETURNING *",
      values: [req.body.body, req.params.id],
    });

    if (!result) {
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    if (!result.rows.length) {
      res.status(404).json({ error: "Not found" });
      return;
    }
    res.json(result.rows[0]);
  });
};
