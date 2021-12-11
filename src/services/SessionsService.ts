import { Inject, Service } from "typedi";
import { IUsuarioRepository } from "../@types/repositories/IUsuarioRepository";
import {
  ISessionsRequest,
  ISessionsResponse,
  ISessionsService,
} from "../@types/services/ISessionsService";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

@Service("SessionsService")
export class SessionsService implements ISessionsService {
  constructor(
    @Inject("UsuarioRepository") private usuarioRepository: IUsuarioRepository
  ) {}
  async criar({ email, senha }: ISessionsRequest): Promise<ISessionsResponse> {
    const usuario = await this.usuarioRepository.findByEmail(email);
    if (!usuario) {
      throw new Error("Email ou senha incorreto");
    }

    const senhaConfirmed = await compare(senha, usuario.senha);
    if (!senhaConfirmed) {
      throw new Error("Email ou senha incorreto");
    }

    const token = sign({}, process.env.AUTH_SECRET, {
      subject: String(usuario.id),
      expiresIn: "2h",
    });

    return {
      usuario,
      token,
    };
  }
}
