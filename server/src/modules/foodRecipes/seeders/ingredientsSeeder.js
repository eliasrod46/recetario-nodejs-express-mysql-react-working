import { Ingredient, IngredientType } from "../models/ingredientModel.js";
import { Type } from "../models/TypeModel.js";

const ingredients = [
  { name: "huevo", type: [1] }, //deberia recibir un arrar de nombres los id son por que es un seeder
  { name: "tomate", type: [2] },
  { name: "harina", type: [4, 5, 1] },
  { name: "Aceite", type: [1, 3] },
  { name: "Manteca", type: [3] },
  { name: "Azucar", type: [5] },
  { name: "Leche Liquida", type: [4] },
  { name: "Escencia de vainilla", type: [3] },
];

export async function ingredientsSeed() {
  // recorro array ingredientes
  ingredients.forEach(async function (ingredient) {
    // creo el ingrediente y lo guardo
    const createdIngredient = await Ingredient.create({
      name: ingredient.name,
    });

    ingredient.type.forEach(async (type) => {
      IngredientType.create({
        typeId: type,
        ingredientId: createdIngredient.id,
      });
    });
  });
}
