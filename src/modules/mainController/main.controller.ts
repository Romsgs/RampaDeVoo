import { Request, Response } from "express";
import { MainService } from "./main.service";

export class MainController {
  constructor(private mainService = new MainService()) {}

  async getRampas(req: Request, res: Response) {
    const rampas = await this.mainService.getRampas();
    console.log(rampas);
    res.render("index", { rampas });
  }

  async createRampa(req: any, res: Response) {
    const response = await this.mainService.createRampa(req.body);
    console.log(response);
  }

  async deleteRampa(req: Request, res: Response) {
    const response = await this.mainService.deleteRampa(req.body);
    console.log(response);
  }
}
