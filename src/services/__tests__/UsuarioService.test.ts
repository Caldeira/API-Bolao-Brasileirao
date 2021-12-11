import * as faker from "faker";
import { UsuarioRepository } from "../../repositories/UsuarioRepository";
import { UsuarioService } from "../UsuarioService";
import { UsuarioDTO } from "../../@types/dto/UsuarioDto";

describe("UsuarioService", () => {
  let usuarioDto: UsuarioDTO;
  let usuarioRepository: UsuarioRepository;
  let usuarioService: UsuarioService;

  beforeEach(jest.clearAllMocks);
  beforeEach(() => {
    usuarioDto = {
      id: faker.datatype.number(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: faker.datatype.number(),
    };
    usuarioRepository = new UsuarioRepository();
    usuarioService = new UsuarioService(usuarioRepository);
  });

  describe("list", () => {
    it("deve listar os usuarios", async () => {
      jest.spyOn(usuarioRepository, "find").mockResolvedValue(null);
      await usuarioService.listar();

      expect(usuarioRepository.find).toHaveBeenCalled();
    });
  });

  describe("buscar", () => {
    it("deve buscar os usuarios", async () => {
      const id = faker.datatype.number();
      jest.spyOn(usuarioRepository, "findOne").mockResolvedValue(null);
      await usuarioService.buscar(id);

      expect(usuarioRepository.findOne).toHaveBeenCalledWith(id);
    });
  });

  describe("criar", () => {
    it("deve criar um novo usuario", async () => {
      jest.spyOn(usuarioRepository, "save").mockResolvedValue(null);
      await usuarioService.criar(usuarioDto);
      expect(usuarioRepository.save).toHaveBeenCalledWith(usuarioDto);
    });
  });

  describe("atualizar", () => {
    it("deve atualizar um usuario", async () => {
      const id = faker.datatype.number();
      jest.spyOn(usuarioRepository, "save").mockResolvedValue(null);
      await usuarioService.atualizar(id, usuarioDto);
      expect(usuarioRepository.save).toHaveBeenCalledWith({
        ...usuarioDto,
        id,
      });
    });
  });

  describe("remover", () => {
    it("deve remover um usuario", async () => {
      const id = faker.datatype.number();
      jest.spyOn(usuarioRepository, "findOne").mockResolvedValue(usuarioDto);
      jest.spyOn(usuarioRepository, "remove").mockResolvedValue(null);
      await usuarioService.remover(id);

      expect(usuarioRepository.findOne).toHaveBeenCalledWith(id);
      expect(usuarioRepository.remove).toHaveBeenCalledWith(usuarioDto);
    });

    it("Deve lançar um erro se o usuário nao for encontrado", async () => {
      const id = faker.datatype.number();
      jest.spyOn(usuarioRepository, "findOne").mockResolvedValue(null);
      jest.spyOn(usuarioRepository, "remove").mockResolvedValue(null);

      await expect(usuarioService.remover(id)).rejects.toThrow(
        new Error("Usuario não encontrado!")
      );
      expect(usuarioRepository.findOne).toHaveBeenCalledWith(id);
      expect(usuarioRepository.remove).not.toHaveBeenCalledWith();
    });
  });
});
