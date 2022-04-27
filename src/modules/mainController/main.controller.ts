import { Request, Response } from "express";
import { MainService } from "./main.service";

export class MainController {
  constructor(private mainService = new MainService()) {}
  getRampas(req: Request, res: Response) {
    const rampas = [
      {
        title:"GV",
         dificulty:1
      },
      {title:"moedão", dificulty:3}
    ]
    
    // const rampas = this.mainService.getRampas();
    console.log(rampas)
    res.render("index", { rampas });
  }
}
