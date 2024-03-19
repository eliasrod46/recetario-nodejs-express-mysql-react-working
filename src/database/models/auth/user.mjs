import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  email: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  role: {
    type: mongoose.Schema.Types.Number,
    default: 0, //0-User, 1-Admin, 2-Sub-Admin, 3-Editor
  },
});

export const User = mongoose.model("User", UserSchema);
