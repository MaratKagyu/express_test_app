import "reflect-metadata";
import {DataSource} from "typeorm";
import config from "./config";
import {User} from "../entity/User";
import {DiaryEntry} from "../entity/DiaryEntry";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.database.host,
  port: config.database.port,
  username: config.database.username,
  password: config.database.password,
  database: config.database.name,
  synchronize: false,
  logging: true,
  entities: [
    User,
    DiaryEntry,
  ],
  subscribers: [],
  migrations: [
    __dirname + '/../migration/*{.ts,.js}'
  ],
  migrationsTableName: "typeorm_migrations",
});

