import { compare, genSalt, hash } from "bcrypt";
import { Express } from "express";
import { Pool } from "pg";
import { generateToken } from "../authentication";
import { query } from "../database";
import { User } from "../types";

export const AuthController = (app: Express, pool: Pool) => {
  app.post("/auth/signup", async (req, res) => {
    const { email, password } = req.body;

    const salt = await genSalt(); //  generates the salt, i.e., a random string
    const bcryptPassword = await hash(password, salt); // hash the password and the salt
    const existingUser = await query<User>(pool, {
      text: "SELECT * FROM users WHERE email = $1",
      values: [email],
    });
    if (!existingUser)
      return res.status(500).json({ error: "Internal server error" });
    if (existingUser.rows.length !== 0)
      return res.status(401).json({ error: "User already exists" });

    const newUser = await query<User>(pool, {
      text: "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      values: [email, bcryptPassword],
    });
    if (!newUser)
      return res.status(500).json({ error: "Internal server error" });
    const token = generateToken(newUser.rows[0]);
    res
      .status(201)
      .cookie("jwt", token, { maxAge: 6000000, httpOnly: true })
      .json(newUser);
  });

  app.post("/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await query<User>(pool, {
        text: "SELECT * FROM users WHERE email = $1",
        values: [email],
      });
      if (!user)
        return res.status(500).json({ error: "Internal server error" });

      if (user.rows.length === 0)
        return res.status(401).json({ error: "User is not registered" });

      const validPassword = await compare(password, user.rows[0].password);
      if (!validPassword)
        return res.status(401).json({ error: "Incorrect password" });

      const token = generateToken(user.rows[0]);
      res
        .status(200)
        .cookie("jwt", token, { maxAge: 6000000, httpOnly: true })
        .json({ user_id: user.rows[0].id, emil: user.rows[0].email });
    } catch (error: any) {
      res.status(401).json({ error: error.message });
    }
  });

  app.get("/auth/logout", (req, res) => {
    res.status(200).clearCookie("jwt").json({ message: "Logged out" });
  });
};
