import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
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

export const Like = mongoose.model("Like", LikeSchema);
