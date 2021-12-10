import { Inject, Service } from "typedi";
import { ITimeService } from "../@types/services/ITimeService";
import { IPartidaRepository } from "../@types/repositories/IPartidaRepository";
import { Time } from "../models/TimeEntity";
import { Partida } from "models/PartidaEntity";
import { FiltrosGetPartidas } from "../@types/models/Time";
import { Campeonato } from "../models/CampeonatoEntity";

@Service('TimeService')
export class TimeService implements ITimeService {
  constructor(@Inject('PartidaRepository') private partidaRepository: IPartidaRepository) {}

  getPartidasVisitante(timeId: number, filtros: FiltrosGetPartidas): Promise<Partida[]> {
    const time = this.getTime(timeId);
    const campeonato = this.getCampeonato(filtros.campeonatoId);
    return this.partidaRepository.getPartidasDoVisitante(time, campeonato);
  }

  getPartidasMandante(timeId: number, filtros: FiltrosGetPartidas): Promise<Partida[]> {
    const time = this.getTime(timeId);
    const campeonato = this.getCampeonato(filtros.campeonatoId);
    return this.partidaRepository.getPartidasDoMandante(time, campeonato);
  }

  getTodasPartidas(timeId: number, filtros: FiltrosGetPartidas): Promise<Partida[]> {
    const time = this.getTime(timeId);
    const campeonato = this.getCampeonato(filtros.campeonatoId);
    return this.partidaRepository.getPartidasDoTime(time, campeonato);
  }

  private getTime(timeId: number): Time {
    const time = new Time();
    time.id = timeId;
    return time;
  }

  private getCampeonato(campeonatoId: number): Campeonato {
    const campeonato = new Campeonato();
    campeonato.id = campeonatoId;
    return campeonato;
  }
}
