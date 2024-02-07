"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Store_1 = require("./entities/Store");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "db",
    database: "amazon_mkt",
    synchronize: true,
    logging: true,
    entities: [Store_1.Store],
    subscribers: [],
    migrations: [],
});
