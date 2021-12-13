import { Inject, Service } from "typedi";
import { ITimeService } from "../@types/services/ITimeService";
import { Time } from "../models/TimeEntity";
import { ITimeRepository } from "../@types/repositories/ITimeRepository";
import { TimeDTO } from "../@types/dto/brasileiraoClienteDTO";

@Service("TimeService")
export class TimeService implements ITimeService {
  constructor(
    @Inject("TimeRepository") private timeRepository: ITimeRepository
  ) {}
  async atualizar(time_id: number, timeDto: TimeDTO): Promise<void> {
    const idExists = await this.timeRepository.findOne(time_id);

    if (!idExists) {
      throw new Error("Time id não encontrado.");
    }

    await this.timeRepository.save({ ...timeDto, time_id });
  }

  async listar() {
    return this.timeRepository.find();
  }

  async buscar(id: number) {
    return this.timeRepository.findOne(id);
  }
  async criar(timeDto: TimeDTO): Promise<Time> {
    const timeExists = await this.timeRepository.findByNome(
      timeDto.nome_popular
    );

    if (timeExists) {
      throw new Error("Time já está cadastrado no sistema.");
    }

    const time = this.timeRepository.criarTime(
      timeDto.time_id,
      timeDto.nome_popular,
      timeDto.sigla,
      timeDto.escudo
    );

    return await this.timeRepository.save(time);
  }

  async remover(id: number): Promise<void> {
    const timeToRemove = await this.timeRepository.findOne(id);
    if (!timeToRemove) {
      throw new Error("Time não encontrado!");
    }

    await this.timeRepository.remove(timeToRemove);
  }
}
