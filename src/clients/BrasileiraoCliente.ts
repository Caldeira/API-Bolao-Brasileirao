import {
  TabelaDTO,
  RodadaDTO,
  CampeonatoDTO,
} from "../@types/dto/brasileiraoClienteDTO";
import axios from "axios";

export class BrasileiraoClient {
  public async getTabelaAPI(idCampeonato: number): Promise<TabelaDTO[]> {
    try {
      const tabela = await axios.get<TabelaDTO[]>(
        `${process.env.URL_BRASILEIRAO}/${idCampeonato}/tabela`,
        {
          headers: { Authorization: `bearer ${process.env.TOKEN_API}` },
        }
      );
      return tabela.data;
    } catch (error) {
      throw new Error(`Falha ao buscar os times. Motivo: ${error.message}`);
    }
  }

  public async getRodadasAPI(
    numeroRodada: number,
    idCampeonato: number
  ): Promise<RodadaDTO> {
    try {
      const response = await axios.get<RodadaDTO>(
        `${process.env.URL_BRASILEIRAO}/${idCampeonato}/rodadas/${numeroRodada}`,
        {
          headers: { Authorization: `bearer ${process.env.TOKEN_API}` },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Falha ao buscar dados da rodada.");
    }
  }

  public async getDadosCampeonatoAPI(
    idCampeonato: number
  ): Promise<CampeonatoDTO[]> {
    try {
      const campeonatoResponse = await axios.get<CampeonatoDTO[]>(
        `${process.env.URL_BRASILEIRAO}/${idCampeonato}/rodadas/`,
        {
          headers: { Authorization: `bearer ${process.env.TOKEN_API}` },
        }
      );

      return campeonatoResponse.data;
    } catch (error) {
      throw new Error(
        `Falha ao buscar dados do campeonato. Motivo ${error.message}`
      );
    }
  }
}
