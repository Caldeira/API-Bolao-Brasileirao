import { Time } from "../models/TimeEntity";
import { EntityRepository, Repository } from "typeorm";
import { ITimeRepository } from "../@types/repositories/ITimeRepository";

@EntityRepository(Time)
export class TimeRepository
  extends Repository<Time>
  implements ITimeRepository
{
  async findByNome(nomeTime: string): Promise<Time> {
    return await this.findOne({ where: { nome: nomeTime } });
  }
  public criarTime(
    time_id: number,
    nome_popular: string,
    sigla: string,
    escudo: string
  ): Time {
    const time = this.create({
      time_id,
      nome_popular,
      sigla,
      escudo,
    });
    return time;
  }
}
