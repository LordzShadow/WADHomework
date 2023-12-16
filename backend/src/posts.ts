import { Express } from "express";
import { Pool } from "pg";
import { query } from "./database";
import { Post } from "./types";

export const PostsController = (app: Express, pool: Pool) => {
  app.get("/posts", async (req, res) => {
    const result = await query<Post>(pool, "SELECT * FROM post");
    if (!result) {
      res.status(500).json("Internal server error");
      return;
    }
    res.json(result.rows);
  });

  app.get("/posts/:id", async (req, res) => {
    const result = await query<Post>(pool, {
      text: "SELECT * FROM post WHERE id = $1",
      values: [req.params.id],
    });
    if (!result) {
      res.status(500).json("Internal server error");
      return;
    }
    if (result.rows.length) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json("Not found");
    }
  });

  app.post("/posts", async (req, res) => {
    if (!req.body.body) {
      res.status(400).json("Bad request");
      return;
    }
    const result = await query<Post>(pool, {
      text: "INSERT INTO post(body) VALUES($1) RETURNING *",
      values: [req.body.body],
    });
    if (!result) {
      res.status(500).json("Internal server error");
      return;
    }
    res.json(result.rows[0]);
  });

  app.delete("/posts/:id", async (req, res) => {
    const result = await query<Post>(pool, {
      text: "DELETE FROM post WHERE id = $1 returning *",
      values: [req.params.id],
    });
    if (!result) {
      res.status(500).json("Internal server error");
      return;
    }
    if (result.rows.length) {
      res.json("Post deleted.");
    } else {
      res.status(404).json("Not found");
    }
  });

  app.put("/posts/:id", async (req, res) => {
    if (!req.body.body) {
      res.status(400).json("Bad request");
      return;
    }
    const result = await query<Post>(pool, {
      text: "UPDATE post SET body = $1 WHERE id = $2 RETURNING *",
      values: [req.body.body, req.params.id],
    });

    if (!result) {
      res.status(500).json("Internal server error");
      return;
    }
    res.json(result.rows[0]);
  });
};
