import { Inject, Service } from "typedi";
import {Request, Response} from "express";
import { IUsuarioService } from "../@types/services/IUsuarioService";

@Service('UsuarioController')
export class UsuarioController {

  constructor(@Inject('UsuarioService') private  usuarioService: IUsuarioService) {}

  async list(request: Request, response: Response) {
    const usuarios = await this.usuarioService.listar();
    response.send(usuarios);
  }

  async get(request: Request, response: Response) {
    const usuario = await this.usuarioService.buscar(Number(request.params.id));
    response.send(usuario);
  }

  async create(request: Request, response: Response) {
    const usuario = await this.usuarioService.criar(request.body);
    response.send(usuario);
  }

  async update(request: Request, response: Response) {
    const user = await this.usuarioService.atualizar(Number(request.params.id), request.body);
    response.send(user);
  }

  async remove(request: Request, response: Response) {
    await this.usuarioService.remover(Number(request.params.id));
    response.send();
  }
}
