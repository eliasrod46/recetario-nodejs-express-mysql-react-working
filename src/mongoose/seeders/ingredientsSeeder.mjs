import { Ingredient } from "../schemas/ingredients.mjs";

const ingredientsToSeed = [
  { name: "Papa2", type: "vegetal" },
  { name: "Carne Molida2", type: "Proteina Animal" },
];

export const seedIngredients = (ingredients = ingredientsToSeed) => {
  try {
    ingredients.forEach(async (ingredient) => {
      const newIngredient = new Ingredient(ingredient);
      await newIngredient.save();
    });
  } catch (err) {
    console.log("todo mal en ingredients seeder");
  }
};
