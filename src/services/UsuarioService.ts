import { Inject, Service } from "typedi";
import { UsuarioDTO } from "../@types/dto/UsuarioDto";
import { IUsuarioService } from "../@types/services/IUsuarioService";
import { IUsuarioRepository } from "../@types/repositories/IUsuarioRepository";
import { hash } from "bcrypt";

@Service("UsuarioService")
export class UsuarioService implements IUsuarioService {
  constructor(
    @Inject("UsuarioRepository") private usuarioRepository: IUsuarioRepository
  ) {}

  async listar() {
    return this.usuarioRepository.find();
  }

  async buscar(id: number) {
    return this.usuarioRepository.findOne(id);
  }

  async criar(usuarioDto: UsuarioDTO) {
    const emailExists = await this.usuarioRepository.findByEmail(
      usuarioDto.email
    );

    if (emailExists) {
      throw new Error("Email já está sendo utilizado.");
    }
    const hashedPassword = await hash(usuarioDto.senha, 8);
    const usuario = this.usuarioRepository.criarUsuario(
      usuarioDto.nome,
      usuarioDto.email,
      (usuarioDto.senha = hashedPassword)
    );
    await this.usuarioRepository.save(usuario);
    delete usuario.senha;
    return usuario;
  }

  async atualizar(id: number, usuarioDto: UsuarioDTO) {
    await this.usuarioRepository.save({ ...usuarioDto, id });
  }

  async remover(id: number) {
    const usuarioToRemove = await this.usuarioRepository.findOne(id);
    if (!usuarioToRemove) {
      throw new Error("Usuário não encontrado!");
    }

    await this.usuarioRepository.remove(usuarioToRemove);
  }
}
