import { Request, Response, Router } from "express";
import { MainController } from "../modules/mainController/main.controller";
const mainController = new MainController();
const mainRouter = Router();

mainRouter.get("/", (req: Request, res: Response) =>
  mainController.getRampas(req, res)
);

mainRouter.post("/", (req: Request, res: Response) =>
  mainController.createRampa(req, res)
);

mainRouter.delete("/", (req: Request, res: Response) =>
  mainController.deleteRampa(req, res)
);

export default mainRouter;
