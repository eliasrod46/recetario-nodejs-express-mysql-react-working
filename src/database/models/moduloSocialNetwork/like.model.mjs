import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  comment: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Post",
  },
});

export const Comment = mongoose.model("Comment", CommentSchema);
