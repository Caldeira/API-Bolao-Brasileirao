import { Usuario } from "../../models/UsuarioEntity";

export type ClassificacaoDTO = {
  usuario: Usuario;
  pontuacao: number;
};
