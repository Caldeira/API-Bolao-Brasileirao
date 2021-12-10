
import { getCustomRepository } from "typeorm";
import Container from "typedi";
import { UserRepository } from "../../repositories/UserRepository";
import { RodadaRepository } from "../../repositories/RodadaRepository";
import { PartidaRepository } from "../../repositories/PartidaRepository";

// inicializador de dependências:
// inicializa controllers
import "../../controllers/UserController";
import "../../controllers/EnderecoController";
import "../../controllers/RodadaController";
import "../../controllers/TimeController";

// inicializa services
import "../../services/UserService";
import "../../services/EnderecoService";
import "../../services/RodadaService";
import "../../services/TimeService";

// inicializa clientes
import "../../clients/CepClient"
import "../../infra/http/AxiosHttpClient";


const createDependencyInjector = () => {
  Container.set("UserRepository", getCustomRepository(UserRepository));
  Container.set("RodadaRepository", getCustomRepository(RodadaRepository));
  Container.set("PartidaRepository", getCustomRepository(PartidaRepository));
};

export default createDependencyInjector;
