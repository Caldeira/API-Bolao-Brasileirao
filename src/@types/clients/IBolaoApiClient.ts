import { Rodadas, Rodada } from "../dto/api-futebol/Rodada";

export interface IApiBolaoClient {
  buscaRodadas(campeonato: number): Promise<Rodadas>;
  buscaRodada(campeonato: number, rodada: number): Promise<Rodada>;
}
