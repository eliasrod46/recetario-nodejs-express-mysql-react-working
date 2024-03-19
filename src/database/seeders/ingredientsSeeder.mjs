import { Ingredient } from "../models/ingredients.schema.mjs";

const ingredientsToSeed = [
  { name: "Papa2", type: "vegetal" },
  { name: "Carne Molida2", type: "Proteina Animal" },
];

export const seedIngredients = () => {
  try {
    ingredientsToSeed.forEach(async (ingredient) => {
      const newIngredient = new Ingredient(ingredient);
      await newIngredient.save();
    });
  } catch (err) {
    console.log("todo mal en ingredients seeder");
  }
};
