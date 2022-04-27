import { Request, Response, Router } from "express"
import { MainController } from "../modules/mainController/main.controller"
const mainController = new MainController()
const mainRouter = Router()

mainRouter.get('/', (req:Request, res: Response) => mainController.getRampas(req, res))

export default mainRouter
