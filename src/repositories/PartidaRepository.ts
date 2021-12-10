import { EntityRepository, FindConditions, FindManyOptions, Repository } from "typeorm";
import { IPartidaRepository } from "../@types/repositories/IPartidaRepository";
import { Partida } from "../models/PartidaEntity";
import { Time } from "../models/TimeEntity";
import { Campeonato } from "../models/CampeonatoEntity";

@EntityRepository(Partida)
export class PartidaRepository extends Repository<Partida> implements IPartidaRepository{

  getPartidasDoMandante(time: Time, campeonato?: Campeonato): Promise<Partida[]> {
    const { relations, where } = this.getQueryClauses(time, campeonato, 'mandante');
    return this.find({ relations, where });
  }

  getPartidasDoVisitante(time: Time, campeonato?: Campeonato): Promise<Partida[]> {
    const { relations, where } = this.getQueryClauses(time, campeonato, 'mandante');
    return this.find({ relations, where });
  }

  getPartidasDoTime(time: Time, campeonato?: Campeonato): Promise<Partida[]> {
    const { relations, where: whereMandante } = this.getQueryClauses(time, campeonato, 'mandante');
    const { where: whereVisitante } = this.getQueryClauses(time, campeonato, 'visitante');

    return this.find({
      relations,
      where: [whereMandante, whereVisitante]
    });
    // return this
    //   .createQueryBuilder("partida")
    //   .innerJoinAndSelect("partida.mandante", "mandante")
    //   .innerJoinAndSelect("partida.visitante", "visitante")
    //   .where("mandante.id = :id OR visitante.id = :id", { id: time.id })
    //   .getMany();
  }

  private getQueryClauses (
    time: Time,
    campeonato?: Campeonato,
    mandanteOuVisitante: 'mandante' | 'visitante' = 'mandante'
  ): FindManyOptions<Partida> {
    const relations: string[] = ["visitante", "mandante"];
    const where: FindConditions<Partida> = { [mandanteOuVisitante]: time };

    if (campeonato?.id) {
      relations.push("rodada");
      relations.push("rodada.campeonato");
      where.rodada = { campeonato };
    }

    return {
      relations,
      where
    };
  }
}
