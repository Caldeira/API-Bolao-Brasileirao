import { ClassificacaoDTO } from "../../@types/dto/ClassificacaoDto";
import { PalpiteDto } from "../../@types/dto/palpiteDto";

export interface IApostaService {
  gerarApostas(
    usuarioId: number,
    numeroRodada: number,
    palpites: PalpiteDto[]
  ): Promise<void>;
  gerarClassificacao(): Promise<ClassificacaoDTO[]>;
  atualizarPontuacao(): Promise<void>;
}
