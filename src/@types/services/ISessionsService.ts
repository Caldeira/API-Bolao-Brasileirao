import { Usuario } from "../../models/UsuarioEntity";

export interface ISessionsRequest {
  email: string;
  senha: string;
}
export interface ISessionsResponse {
  usuario: Usuario;
  token: string;
}

export interface ISessionsService {
  criar({ email, senha }: ISessionsRequest): Promise<ISessionsResponse>;
}
