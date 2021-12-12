import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  iat: number;
  exp: number;
  sub: string;
}

export async function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("JWT Token está faltando.");
  }
  const [, token] = authHeader.split(" ");

  try {
    const decodeToken = verify(token, process.env.AUTH_SECRET);
    const { sub } = decodeToken as IPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
