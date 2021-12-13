import { Time } from "../../models/TimeEntity";
import { TimeDTO } from "../../@types/dto/brasileiraoClienteDTO";

export interface ITimeService {
  listar(): Promise<Time[]>;
  buscar(id: number): Promise<Time>;
  criar(timeDto: TimeDTO): Promise<Time>;
  atualizar(id: number, timeDto: TimeDTO): Promise<void>;
  remover(id: number): Promise<void>;
}
