import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  description: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  categories: {
    type: mongoose.Schema.Types.Array,
    required: false,
  },
});

export const Post = mongoose.model("Post", PostSchema);
