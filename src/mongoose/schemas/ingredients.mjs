import mongoose from "mongoose";

const IngredientSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },
  type: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

export const Ingredient = mongoose.model("Ingredient", IngredientSchema);
