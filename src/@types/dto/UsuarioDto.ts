export interface UsuarioDTO {
  id?: number;
  nome: string;
  email: string;
  senha: string;
}

export type AutenticaUsuarioDTO = Pick<UsuarioDTO, "email" | "senha">;
export type UsuarioCriadoDTO = Omit<UsuarioDTO, "password">;
export type RetornaAutenticacao = UsuarioCriadoDTO & { token?: string };
