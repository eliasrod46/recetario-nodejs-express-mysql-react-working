import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

export const Category = mongoose.model("Category", CategorySchema);
