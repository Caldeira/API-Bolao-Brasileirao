import { EntityRepository, Repository } from "typeorm";
import { IRodadaRepository } from "../@types/repositories/IRodadaRepository";
import { Rodada } from "../models/RodadaEntity";

@EntityRepository(Rodada)
export class RodadaRepository
  extends Repository<Rodada>
  implements IRodadaRepository
{
  async saveOrUpdate(rodada: Rodada): Promise<Rodada> {
    const rodadaExistente = await this.findOne({
      where: { rodada: rodada.rodada },
    });

    const rodadaToSave = {
      ...rodadaExistente,
      ...rodada,
    };

    return this.save(rodadaToSave);
  }
  findByNumeroRodada(numeroRodada: number): Promise<Rodada> {
    return this.findOne({
      relations: ["campeonato"],
      where: { rodada: numeroRodada },
    });
  }
}
