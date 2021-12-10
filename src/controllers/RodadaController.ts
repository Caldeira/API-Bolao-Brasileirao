import { Inject, Service } from "typedi";
import {Request, Response} from "express";
import { IRodadaService } from "../@types/services/IRodadaService";
import { Rodada as RodadaDto } from "../@types/dto/api-futebol/Rodada";

type RequestBody = RodadaDto & { campeonatoId: number };
@Service('RodadaController')
export class RodadaController {
  constructor(@Inject('RodadaService') private  RodadaService: IRodadaService) {}

  public async listar(req: Request, res: Response) {
    const rodadas = await this.RodadaService.listar();
    return res.json(rodadas);
  }

  public async criar(req: Request, res: Response) {
    const { campeonatoId, ...rodadaDto } = req.body as RequestBody;
    const rodada = await this.RodadaService.criar(campeonatoId, rodadaDto);
    return res.json(rodada);
  }
}
