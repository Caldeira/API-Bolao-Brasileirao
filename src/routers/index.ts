import * as express from "express";
import createUserRouter from "./usuarioRouter";
import createSessionsRouter from "./sessionsRouter";
import createEnderecoRouter from "./enderecoRouter";
import createRodadaRouter from "./rodadaRouter";
import createTimeRouter from "./timeRouter";

const createRouters = (app: express.Express) => {
  app.use("/usuarios", createUserRouter());
  app.use("/sessions", createSessionsRouter());
  app.use("/enderecos", createEnderecoRouter());
  app.use("/rodadas", createRodadaRouter());
  app.use("/times", createTimeRouter());
};

export default createRouters;
