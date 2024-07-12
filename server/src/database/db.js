import { Sequelize } from "sequelize";
import { DATABASE_CONSTANTS } from "../config/constants.js";

export const db = new Sequelize(
  DATABASE_CONSTANTS.NAME,
  DATABASE_CONSTANTS.USER,
  DATABASE_CONSTANTS.PASSWORD,
  {
    host: DATABASE_CONSTANTS.HOST,
    dialect: DATABASE_CONSTANTS.DIALECT,
    logging: false, // Desactiva los registros de consultas en la terminal
  }
);

export const conectionDB = async () => {
  try {
    await db.authenticate();
    console.log("database connection success");
  } catch (error) {
    console.log(`database connection error: ${error.message}`);
  }
};
