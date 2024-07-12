//import conection
import { db } from "../../../database/db.js";
import { DataTypes } from "sequelize";
//import models(Relationships)
import { Ingredient } from "../models/ingredientModel.js";

export const Receta = db.define("recetas", {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  time: { type: DataTypes.TEXT },
  quantity: { type: DataTypes.INTEGER },
});

export const IngredientesRecetas = db.define("ingredients_receta", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ingrediente_measure: { type: DataTypes.STRING, allowNull: false },
  ingrediente_quantity: { type: DataTypes.INTEGER, allowNull: false },
});

//--Sync (create/update table)
export const RecetaMigration = async () => {
  await Receta.sync({ force: true });
  await IngredientesRecetas.sync({ force: true });
  console.log("The table for the Receta model was just (re)created!");
};

//---Relationships

Receta.belongsToMany(Ingredient, { through: IngredientesRecetas });
Ingredient.belongsToMany(Receta, { through: IngredientesRecetas });
