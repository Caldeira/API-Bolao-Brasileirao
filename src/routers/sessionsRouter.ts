import { Router } from "express";
import Container from "typedi";
import { SessionsController } from "../controllers/SessionsController";
const router = Router();

const getController = (): SessionsController => {
  return Container.get<SessionsController>("SessionsController");
};
const createRouter = () => {
  router.post("", (req, res) => getController().create(req, res));
  return router;
};

export default createRouter;
