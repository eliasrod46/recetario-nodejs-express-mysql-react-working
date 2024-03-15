import { Ingredient } from "../models/ingredients.schema.mjs";

class IngredientDao {
  constructor() {}
  //--->get all ingredients
  async getAllIngredients() {
    const response = await Ingredient.find({});
    return response;
  }

  //--->get ingredient by id
  async getIngredient(id) {
    const response = await Ingredient.findById(id);
    return response;
  }

  //--->add new ingredient
  async addIngredient(ingredient) {
    const newIngredient = new Ingredient({
      name: ingredient.name,
      type: ingredient.type,
    });
    const response = await newIngredient.save();
    return response;
  }

  //--->delete ingredient
  async deleteIngredient(id) {
    const response = await Ingredient.deleteOne({ _id: id });
    return response;
  }

  //--->update un ingredient
  async updateIngredient(id, ingredient) {
    const response = await Productos.updateOne(
      { _id: id },
      {
        $set: {
          name: name,
          type: type,
        },
      }
    );
    return response;
  }
}

export const igredientDao = new IngredientDao();
