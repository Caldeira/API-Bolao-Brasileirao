import { Rodada as RodadaDto } from "../../@types/dto/api-futebol/Rodada";
import { Rodada } from "../../models/RodadaEntity";

export type RetornoRodada = Omit<Rodada, 'id'>;
export interface IRodadaService {
  listar(): Promise<Rodada[]>;
  criar(campeonatoId: number, rodadaDto: RodadaDto): Promise<RetornoRodada>;
}
