import { NextFunction, Request, Response } from "express";
import { JwtPayload, VerifyErrors, sign, verify } from "jsonwebtoken";
import { User } from "./types";

export function generateToken(user: User) {
  if (!process.env.TOKEN_SECRET) throw new Error("TOKEN_SECRET not set");
  return sign({ email: user.email, id: user.id }, process.env.TOKEN_SECRET, {
    expiresIn: 60 * 60,
  });
}

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies["jwt"];

  if (!process.env.TOKEN_SECRET) throw new Error("TOKEN_SECRET not set");
  if (token == null) return res.sendStatus(401);

  verify(
    token,
    process.env.TOKEN_SECRET,
    (err: VerifyErrors | null, jwt?: JwtPayload | string): void => {
      if (err) {
        res.sendStatus(403);
        return;
      }
      next();
    }
  );
}
