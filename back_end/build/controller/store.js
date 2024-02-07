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
exports.StoreController = void 0;
const data_source_1 = require("../src/data-source");
const Store_1 = require("../src/entities/Store");
class StoreController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const storeRepository = datasource.getRepository(Store_1.Store);
            const listaStores = yield storeRepository.find();
            res.json(listaStores);
        });
    }
    inserir(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const storeRequest = req.body;
            if (!storeRequest ||
                !storeRequest.name ||
                !storeRequest.description) {
                return res.status(400).json({
                    Erro: "Todos os dados são Obrigatórios",
                });
            }
            const store = new Store_1.Store();
            store.name = storeRequest.name;
            store.description = storeRequest.description;
            const datasource = yield data_source_1.AppDataSource;
            const storeRepository = datasource.getRepository(Store_1.Store);
            const storeSalva = yield storeRepository.save(store);
            res.status(201).json(storeSalva);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const storeRepository = datasource.getRepository(Store_1.Store);
            const id = req.params.id;
            const store = yield storeRepository.findOneBy({ id: id });
            yield storeRepository.delete({ id: id });
            res.status(201).json({ Store_Deletada: store });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const storeRepository = datasource.getRepository(Store_1.Store);
            const id = req.params.id;
            const storeRequest = req.body;
            if (!storeRequest ||
                !storeRequest.name ||
                !storeRequest.description) {
                return res.status(400).json({
                    Erro: "Todos os dados são obrigatorios",
                });
            }
            yield storeRepository.update(id, {
                name: storeRequest.name,
                description: storeRequest.description
            });
            const store = yield storeRepository.findOneBy({ id: id });
            res.status(201).json(store);
        });
    }
    buscarPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const storeRepository = datasource.getRepository(Store_1.Store);
            const id = req.params.id;
            const store = yield storeRepository.findOneBy({ id: id });
            res.json(store);
        });
    }
}
exports.StoreController = StoreController;
