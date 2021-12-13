import { PartidaDTO } from "../dto/BrasileiraoClienteDTO";
import { Partida } from "../../models/PartidaEntity";

export interface IPartidaService {
  gerarPartida(partidaResponse: PartidaDTO): Promise<Partida>;
}
