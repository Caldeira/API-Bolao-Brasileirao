export interface UserDTO {
  id?: number;
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

export type AutenticaUsuarioDTO = Pick<UserDTO, "email" | "password">;
export type UsuarioCriadoDTO = Omit<UserDTO, "password">;
export type RetornaAutenticacao = UsuarioCriadoDTO & { token?: string };
