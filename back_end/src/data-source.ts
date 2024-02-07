

import "reflect-metadata"
import { DataSource } from "typeorm"
import { Store } from "./entities/Store"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "db",
    database: "amazon_mkt",
    synchronize: true,
    logging: true,
    entities: [Store],
    subscribers: [],
    migrations: [],
})
