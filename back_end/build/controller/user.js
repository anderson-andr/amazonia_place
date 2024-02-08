"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const data_source_1 = require("../src/data-source");
const User_1 = require("../src/entities/User");
class UserController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const userRepository = datasource.getRepository(User_1.User);
            const listaUsuarios = yield userRepository.find();
            res.json(listaUsuarios);
        });
    }
    inserir(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRequest = req.body;
            if (!userRequest ||
                !userRequest.name ||
                !userRequest.email ||
                !userRequest.password ||
                !userRequest.type ||
                !userRequest.id_store) {
                return res.status(400).json({
                    Erro: "Todos os dados são Obrigatórios",
                });
            }
            const user = new User_1.User();
            const dataAtual = new Date();
            user.name = userRequest.name;
            user.email = userRequest.email;
            user.password = userRequest.password;
            user.type = userRequest.type;
            user.dt_created = dataAtual;
            user.dt_updated = dataAtual;
            user.id_store = userRequest.id_store;
            const datasource = yield data_source_1.AppDataSource;
            const userRepository = datasource.getRepository(User_1.User);
            const userSalvo = yield userRepository.save(user);
            res.status(201).json(userSalvo);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const userRepository = datasource.getRepository(User_1.User);
            const id = req.params.id;
            const user = yield userRepository.findOneBy({ id: id });
            yield userRepository.delete({ id: id });
            res.status(201).json({ User_delete: user });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const userRepository = datasource.getRepository(User_1.User);
            const id = req.params.id;
            const userRequest = req.body;
            const dataAtual = new Date();
            if (!userRequest ||
                !userRequest.name ||
                !userRequest.email ||
                !userRequest.password ||
                !userRequest.type ||
                !userRequest.id_store) {
                return res.status(400).json({
                    Erro: "Todos os dados são obrigatorios",
                });
            }
            yield userRepository.update(id, {
                name: userRequest.name,
                email: userRequest.description,
                password: userRequest.password,
                type: userRequest.type,
                dt_created: userRequest.dt_created,
                dt_updated: dataAtual,
                id_store: userRequest.id_store,
            });
            const user = yield userRepository.findOneBy({ id: id });
            res.status(201).json(user);
        });
    }
    buscarPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const userRepository = datasource.getRepository(User_1.User);
            const id = req.params.id;
            const user = yield userRepository.findOneBy({ id: id });
            res.json(user);
        });
    }
}
exports.UserController = UserController;
