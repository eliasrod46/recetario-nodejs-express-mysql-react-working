import mongoose from "mongoose";

const PermissionSchema = new mongoose.Schema({
  permission_name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  is_default: {
    type: mongoose.Schema.Types.Number,
    default: 0, // 0-not default, 1-default
  },
});

export const Permission = mongoose.model("Permission", PermissionSchema);
