import * as express from "express";
import * as cors from "cors";
import { json } from "body-parser";
import * as morgan from "morgan";
import { NextFunction, Request, Response } from "express";
import "express-async-errors";

const createMiddlewares = (app: express.Express) => {
  app.use(cors());
  app.use(json({ limit: "5mb" }));
  app.use(morgan("dev"));

  app.use(
    (
      error: Error,
      request: Request,
      response: Response,
      next: NextFunction
    ) => {
      if (error instanceof Error) {
        return response.status(400).json({
          message: error.message,
        });
      }

      return response.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  );
};

export default createMiddlewares;
