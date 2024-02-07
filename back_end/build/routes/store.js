"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const store_1 = require("../controller/store");
const rota = (0, express_1.Router)();
const controller = new store_1.StoreController();
//Rota: /api/user
rota.get('/', controller.listar);
rota.post('/', controller.inserir);
rota.delete('/:id', controller.delete);
rota.put('/:id', controller.update);
rota.get('/:id', controller.buscarPorId);
exports.default = rota;
