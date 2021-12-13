import { Campeonato } from "models/CampeonatoEntity";
import { CampeonatoDTO } from "../../@types/dto/campeonatoDTO";

export interface ICampeonatoService {
  criarCampeonato(dadosCampeonato: CampeonatoDTO): Promise<CampeonatoDTO>;
  atualizar(campeonato: Campeonato): Promise<void>;
}
