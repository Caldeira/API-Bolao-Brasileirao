import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import { ITimeService } from "../@types/services/ITimeService";

@Service("TimeController")
export class TimeController {
  constructor(@Inject("TimeService") private timeService: ITimeService) {}

  async list(request: Request, response: Response) {
    const times = await this.timeService.listar();
    response.send(times);
  }

  async get(request: Request, response: Response) {
    const time = await this.timeService.buscar(Number(request.params.id));
    response.send(time);
  }

  async create(request: Request, response: Response) {
    const time = await this.timeService.criar(request.body);
    response.send(time);
  }
  async update(request: Request, response: Response) {
    const user = await this.timeService.atualizar(
      Number(request.params.id),
      request.body
    );
    response.send(user);
  }

  async remove(request: Request, response: Response) {
    await this.timeService.remover(Number(request.params.id));
    response.send();
  }
}
