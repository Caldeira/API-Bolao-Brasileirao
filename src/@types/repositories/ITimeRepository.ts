import { TimeDTO } from "../../@types/dto/brasileiraoClienteDTO";
import { Time } from "models/TimeEntity";

export interface ITimeRepository {
  find(): Promise<Time[]>;
  findOne(id: number): Promise<Time>;
  findByNome(nome: string): Promise<Time>;
  save(time: TimeDTO): Promise<Time>;
  remove(entities: Time | Time[]): Promise<Time[]>;
  criarTime(id: number, nome: string, sigla: string, escudo: string): Time;
}
