import { Aposta } from "../models/ApostaEntity";
import { EntityRepository, Repository } from "typeorm";
import { IApostaRepository } from "../@types/repositories/IApostaRepository";

@EntityRepository(Aposta)
export class ApostaRepository
  extends Repository<Aposta>
  implements IApostaRepository
{
  findAll(): Promise<Aposta[]> {
    return this.find({
      relations: ["partida", "usuario"],
    });
  }
  findByUsuarioAndPartida(
    usuarioId: number,
    partidaId: number
  ): Promise<Aposta> {
    return this.findOne({
      where: {
        usuario: usuarioId,
        partida: partidaId,
      },
    });
  }
  findByUsuario(usuarioId: number): Promise<Aposta[]> {
    return this.find({ where: { usuario: usuarioId } });
  }
}
