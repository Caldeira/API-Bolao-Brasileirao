import { Usuario } from "../models/UsuarioEntity";
import { EntityRepository, Repository } from "typeorm";
import { IUsuarioRepository } from "../@types/repositories/IUsuarioRepository";

@EntityRepository(Usuario)
export class UsuarioRepository
  extends Repository<Usuario>
  implements IUsuarioRepository
{
  public async findByEmail(email: string): Promise<Usuario> {
    const usuario = await this.findOne({
      where: {
        email,
      },
    });
    return usuario;
  }

  public criarUsuario(nome: string, email: string, senha: string): Usuario {
    const usuario = this.create({
      nome,
      email,
      senha,
    });
    return usuario;
  }
  public atualizarUsuario(nome: string, email: string, senha: string): Usuario {
    const usuario = this.create({
      nome,
      email,
      senha,
    });
    return usuario;
  }
}
