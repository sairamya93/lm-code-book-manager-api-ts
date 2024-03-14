import { Dialect, Sequelize } from "sequelize";
export let sequelize = new Sequelize("sqlite::memory:");
import { CONFIG } from "../config";

const { dbName, dbUserName, dbPassword, dbHost, dbDialect, dbPort } = CONFIG;

if (process.env.NODE_ENV !== "test") {
	sequelize = new Sequelize(
		dbName ?? "MISSING_DB_NAME_CONFIG",
		dbUserName ?? "MISSING_DB_USERNAME_CONFIG",
		dbPassword ?? "MISSING_DB_PASSWORD_CONFIG",
		{
			host: dbHost ?? "MISSING_DB_HOST_CONFIG",
			port: parseInt(dbPort as string) ?? "MISSING_DB_PORT_CONFIG",
			dialect: (dbDialect as Dialect) ?? "postgres"
		}
	);
}

// import { Dialect, Sequelize } from "sequelize";
// export let sequelize = new Sequelize("sqlite::memory:");
// if (process.env.NODE_ENV !== 'test') {
// sequelize = new Sequelize(process.env.DB_NAME ?? 'MISSING_DB_NAME_CONFIG',

// process.env.DB_USERNAME ?? 'MISSING_DB_USERNAME_CONFIG',

// process.env.DB_PASSWORD ?? 'MISSING_DB_PASSWORD_CONFIG', {
// host: process.env.DB_HOST ?? 'MISSING_DB_HOST_CONFIG',
// port: parseInt(process.env.DB_PORT as string) ??
// "MISSING_DB_PORT_CONFIG",
// dialect: (process.env.DB_DIALECT as Dialect) ??
// 'postgres',
// });
// }
