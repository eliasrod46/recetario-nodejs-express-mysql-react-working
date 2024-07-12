//import conection
import { db } from "../../../database/db.js";
import { DataTypes } from "sequelize";

export const Type = db.define("types", {
  name: { type: DataTypes.STRING, allowNull: false },
});

//--Sync (create/update table)
export const TypeMigration = async () => {
  await Type.sync({ force: true });
  console.log("The table for the Type model was just (re)created!");
};
