import mongoose from "mongoose";
import { Ingredient } from "./ingredients.mjs";

const RecipeSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },
  description: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  type: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  ingredients: {
    type: [
      ...Ingredient,
      ((quantity = {
        type: mongoose.Schema.Types.Number,
        required: true,
      }),
      (measure = {
        type: mongoose.Schema.Types.String,
        required: true,
      })),
    ],
    default: [],
  },
});

export const Recipe = mongoose.model("Recipe", RecipeSchema);
