import { Inject, Service } from "typedi";
import { IRodadaService, RetornoRodada } from "../@types/services/IRodadaService";
import { IRodadaRepository } from "../@types/repositories/IRodadaRepository";
import { Rodada as RodadaDto } from "../@types/dto/api-futebol/Rodada";
import { Partida as PartidaDto } from "../@types/dto/api-futebol/Partida";
import { Rodada } from "../models/RodadaEntity";
import { Campeonato } from "../models/CampeonatoEntity";
import { Partida } from "../models/PartidaEntity";
import { Time } from "../models/TimeEntity";
import { Time as TimeDto } from "../@types/dto/api-futebol/Time";

@Service('RodadaService')
export class RodadaService implements IRodadaService {
  constructor(@Inject('RodadaRepository') private RodadaRepository: IRodadaRepository) {}

  async listar(): Promise<Rodada[]> {
    return [];
  }

  async criar(campeonatoId: number, rodadaDto: RodadaDto): Promise<RetornoRodada> {
    const rodada = this.rodadaFactory(campeonatoId, rodadaDto);
    const rodadaCriada = await this.RodadaRepository.saveOrUpdate(rodada);
    return this.criaRetorno(rodadaCriada);
  }

  private criaRetorno(rodada: Rodada): RetornoRodada {
    const { id, ...retornoRodada } = rodada;
    return retornoRodada;
  }

  private rodadaFactory(campeonatoId: number, rodadaDto: RodadaDto): Rodada {
    const campeonato = new Campeonato();
    campeonato.id = campeonatoId;

    const rodada = new Rodada();
    rodada.nome = rodadaDto.nome;
    rodada.slug = rodadaDto.slug;
    rodada.rodada = rodadaDto.rodada;
    rodada.status = rodadaDto.status;
    rodada.campeonato = campeonato;
    rodada.partidas = rodadaDto.partidas.map(partidaDto => this.partidaFactory(partidaDto));

    return rodada;
  }

  private partidaFactory(partidaDto: PartidaDto): Partida {
    const partida = new Partida();
    partida.id = partidaDto.partida_id;
    partida.placar = partidaDto.placar;
    partida.placarMandante = partidaDto.placar_mandante;
    partida.placarVisitante = partidaDto.placar_visitante;
    partida.status = partidaDto.status;
    partida.slug = partidaDto.slug;
    partida.dataRealizacao = partidaDto.data_realizacao_iso ?
      new Date(partidaDto.data_realizacao_iso) :
      null
    ;
    partida.mandante = this.timeFactory(partidaDto.time_mandante);
    partida.visitante = this.timeFactory(partidaDto.time_visitante);

    return partida;
  }

  private timeFactory(timeDto: TimeDto): Time {
    const time = new Time();
    time.id = timeDto.time_id;
    time.nome = timeDto.nome_popular;
    time.sigla = timeDto.sigla;
    time.escudo = timeDto.escudo;

    return time;
  }
}
