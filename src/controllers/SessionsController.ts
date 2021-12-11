import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import { ISessionsService } from "../@types/services/ISessionsService";

@Service("SessionsController")
export class SessionsController {
  constructor(
    @Inject("SessionsService") private sessionsService: ISessionsService
  ) {}

  public async create(request: Request, response: Response): Promise<Response> {
    const { email, senha } = request.body;

    const user = await this.sessionsService.criar({
      email,
      senha,
    });

    return response.json(user);
  }
}
