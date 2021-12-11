import { UsuarioDTO } from "../dto/UsuarioDto";
import { Usuario } from "../../models/UsuarioEntity";

export interface IUsuarioService {
  listar(): Promise<Usuario[]>;
  buscar(id: number): Promise<Usuario>;
  criar(usuarioDto: UsuarioDTO): Promise<Usuario>;
  atualizar(id: number, usuarioDto: UsuarioDTO): Promise<void>;
  remover(id: number): Promise<void>;
}
