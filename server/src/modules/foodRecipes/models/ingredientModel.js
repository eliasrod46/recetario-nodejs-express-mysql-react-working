//import conection
import { db } from "../../../database/db.js";
import { DataTypes } from "sequelize";
//import models(Relationships)
import { Type } from "../models/TypeModel.js";

export const Ingredient = db.define("ingredients", {
  name: { type: DataTypes.STRING, allowNull: false },
});

export const IngredientType = db.define("ingredients_types", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});
//--Sync (create/update table)
export const IngredientMigration = async () => {
  await Ingredient.sync({ force: true });
  await IngredientType.sync({ force: true });
  console.log("The table for the Ingredient model was just (re)created!");
  console.log("The table for the IngredientType model was just (re)created!");
};

//---Relationships

Ingredient.belongsToMany(Type, { through: IngredientType });
Type.belongsToMany(Ingredient, { through: IngredientType });
