import { Partida } from "../../models/PartidaEntity";
import { FiltrosGetPartidas } from "../../@types/models/Time";

export interface ITimeService {
  getPartidasVisitante(
    timeId: number,
    filtros: FiltrosGetPartidas
  ): Promise<Partida[]>;
  getPartidasMandante(
    timeId: number,
    filtros: FiltrosGetPartidas
  ): Promise<Partida[]>;
  getAllPartidas(
    timeId: number,
    filtros: FiltrosGetPartidas
  ): Promise<Partida[]>;
}
