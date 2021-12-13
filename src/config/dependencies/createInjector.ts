import { getCustomRepository } from "typeorm";
import Container from "typedi";
import { UsuarioRepository } from "../../repositories/UsuarioRepository";
import { RodadaRepository } from "../../repositories/RodadaRepository";
import { PartidaRepository } from "../../repositories/PartidaRepository";

// inicializador de dependências:
// inicializa controllers
import "../../controllers/UsuarioController";
import "../../controllers/SessionsController";
import "../../controllers/EnderecoController";
import "../../controllers/RodadaController";
import "../../controllers/TimeController";

// inicializa services
import "../../services/UsuarioService";
import "../../services/SessionsService";
import "../../services/EnderecoService";
import "../../services/RodadaService";
import "../../services/TimeService";

// inicializa clientes
import "../../clients/CepClient";
import "../../infra/http/AxiosHttpClient";
import UserTokensRepository from "repositories/UserTokensRepository";

const createDependencyInjector = () => {
  Container.set("UsuarioRepository", getCustomRepository(UsuarioRepository));
  Container.set("PartidaRepository", getCustomRepository(PartidaRepository));
  Container.set("RodadaRepository", getCustomRepository(RodadaRepository));
  Container.set(
    "UserTokensRepository",
    getCustomRepository(UserTokensRepository)
  );
};

export default createDependencyInjector;
