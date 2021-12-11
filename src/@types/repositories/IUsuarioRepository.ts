import { UsuarioDTO } from "../dto/UsuarioDto";
import { Usuario } from "../../models/UsuarioEntity";

export interface IUsuarioRepository {
  find(): Promise<Usuario[]>;
  findOne(id: number): Promise<Usuario>;
  findByEmail(email: string): Promise<Usuario>;
  save(UsuarioDto: UsuarioDTO): Promise<Usuario>;
  remove(entities: Usuario | Usuario[]): Promise<Usuario[]>;
  criarUsuario(nome: string, email: string, senha: string): Usuario;
  atualizarUsuario(nome: string, email: string, senha: string): Usuario;
}
