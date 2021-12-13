import { IApostaRepository } from "../@types/repositories/IApostaRepository";
import { Aposta } from "../models/ApostaEntity";
import { IUsuarioRepository } from "../@types/repositories/IUsuarioRepository";
import { PalpiteDto } from "../@types/dto/palpiteDto";
import { IRodadaRepository } from "../@types/repositories/IRodadaRepository";
import { IPartidaRepository } from "../@types/repositories/IPartidaRepository";
import { IApostaService } from "../@types/services/IApostaService";
import { ClassificacaoDTO } from "../@types/dto/ClassificacaoDto";
import { Usuario } from "../models/UsuarioEntity";

export class ApostaService implements IApostaService {
  constructor(
    private apostaRepository: IApostaRepository,
    private usuarioRepository: IUsuarioRepository,
    private partidaRepository: IPartidaRepository,
    private rodadaRepository: IRodadaRepository
  ) {}

  async gerarApostas(
    usuarioId: number,
    numeroRodada: number,
    palpites: PalpiteDto[]
  ): Promise<void> {
    const usuario = await this.usuarioRepository.findOne(usuarioId);
    const rodada = await this.rodadaRepository.findByNumeroRodada(numeroRodada);

    const usuarioRegistrado = usuario.campeonatos.some(
      (campeonato) => campeonato.id === rodada.campeonato.id
    );

    if (!usuarioRegistrado) {
      throw new Error("Este usuário não está registrado");
    }

    const partidas = await this.partidaRepository.findByRodadaId(rodada.id);

    const apostasPromise = palpites.flatMap((palpite) => {
      return partidas.map(async (partida) => {
        const partidaApostada =
          await this.apostaRepository.findByUsuarioAndPartida(
            usuario.id,
            partida.id
          );
        if (partidaApostada) {
          return;
        }

        if (partida.id === palpite.partidaId) {
          const aposta = new Aposta();
          aposta.partida = partida;
          aposta.usuario = usuario;
          aposta.placarMandante = palpite.golsMandante;
          aposta.placarVisitante = palpite.golsVisitante;
          return this.apostaRepository.save(aposta);
        }
      });
    });
    await Promise.all(apostasPromise);
    return;
  }

  async atualizarPontuacao(): Promise<void> {
    const apostas = await this.apostaRepository.findAll();
    const apostasAtualizadas = apostas.map((aposta) => {
      if (aposta.partida.status === "finalizado") {
        return this.calcularPontuacao(aposta);
      }
    });
    const apostasPromise = apostasAtualizadas.map((apostaAtualizada) => {
      return this.apostaRepository.save(apostaAtualizada);
    });
    await Promise.all(apostasPromise);
    return;
  }

  async gerarClassificacao(): Promise<ClassificacaoDTO[]> {
    const apostas = await this.apostaRepository.findAll();
    console.log(apostas);
    const usuariosQueApostaram = await this.usuariosQueApostaram(apostas);
    const usuariosEPontuacao: ClassificacaoDTO[] = usuariosQueApostaram.map(
      (usuario) => {
        let pontuacao = 0;
        apostas.forEach((aposta) => {
          console.log(aposta.usuario);
          if (usuario.id === aposta.usuario.id) {
            pontuacao += aposta.pontos;
          }
        });
        return { usuario, pontuacao };
      }
    );

    return usuariosEPontuacao.sort((a, b) => a.pontuacao - b.pontuacao);
  }

  private async usuariosQueApostaram(apostas: Aposta[]): Promise<Usuario[]> {
    const IdsUsuariosApostaram = apostas.map((aposta) => aposta.usuario.id);
    const usuariosFiltrados = [...new Set(IdsUsuariosApostaram)];

    const usuariosPromise = usuariosFiltrados.map((usuarioFiltrado) => {
      return this.usuarioRepository.findOne(usuarioFiltrado);
    });
    return await Promise.all(usuariosPromise);
  }

  private calcularPontuacao(aposta: Aposta): Aposta {
    let pontos = 0;
    if (aposta.placarMandante === aposta.partida.placarMandante) {
      pontos += 3;
    }
    if (aposta.placarVisitante === aposta.partida.placarVisitante) {
      pontos += 3;
    }
    if (
      ApostaService.construirResultado(
        aposta.placarMandante,
        aposta.placarVisitante
      ) ===
      ApostaService.construirResultado(
        aposta.partida.placarMandante,
        aposta.partida.placarVisitante
      )
    ) {
      pontos += 6;
    }
    aposta.pontos = pontos;
    return aposta;
  }
  public static construirResultado(
    golsMandante: number,
    golsVisitante: number
  ): string {
    if (golsMandante > golsVisitante) {
      return "Mandante";
    } else if (golsMandante < golsVisitante) {
      return "Visitante";
    } else {
      ("Empate");
    }
  }
}
