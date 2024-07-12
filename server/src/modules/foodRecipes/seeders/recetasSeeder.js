import { Ingredient, IngredientType } from "../models/ingredientModel.js";
import { Receta, IngredientesRecetas } from "../models/recetaModel.js";

const recetas = [
  {
    name: "receta 1",
    description: "descrpcion de la receta 1",
    time: "1 h",
    quantity: 2,
    ingredients: [4, 8, 1, 3], //deberia recibir un arrar de nombres los id son por que es un seeder
  },
  {
    name: "receta 2",
    description: "descrpcion de la receta 2",
    time: "30 min",
    quantity: 1,
    ingredients: [2, 5], //deberia recibir un arrar de nombres los id son por que es un seeder
  },
];

export async function recetasSeed() {
  // recorro array ingredientes
  recetas.forEach(async function (receta) {
    // creo el ingrediente y lo Receta
    const createdReceta = await Receta.create({
      name: receta.name,
      description: receta.description,
      time: receta.time,
      quantity: receta.quantity,
    });

    receta.ingredients.forEach(async (ingredient) => {
      IngredientesRecetas.create({
        ingrediente_measure: "unidades",
        ingrediente_quantity: 4,
        recetaId: createdReceta.id,
        ingredientId: ingredient,
      });
    });
  });
}

export async function ingredientsSeed() {
  recetas.forEach(async function (ingredient) {
    await Receta.create({
      name: ingredient.name,
      description: ingredient.description,
      time: ingredient.time,
      quantity: ingredient.quantity,
    });
  });
}
