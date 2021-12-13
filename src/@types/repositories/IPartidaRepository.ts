import { Campeonato } from "../../models/CampeonatoEntity";
import { Partida } from "../../models/PartidaEntity";
import { Time } from "../../models/TimeEntity";

export interface IPartidaRepository {
  getPartidasDoMandante(
    time: Time,
    campeonato?: Campeonato
  ): Promise<Partida[]>;
  getPartidasDoVisitante(
    time: Time,
    campeonato?: Campeonato
  ): Promise<Partida[]>;
  getPartidasDoTime(time: Time, campeonato?: Campeonato): Promise<Partida[]>;
  findByRodadaId(rodadaId: number): Promise<Partida[]>;
  findbySlug(slugFind: string): Promise<Partida>;
}
