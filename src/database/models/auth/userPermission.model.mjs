import mongoose from "mongoose";

const UserPermissionSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  permissions: [
    {
      permission_name: mongoose.Schema.Types.String,
      permission_value: [mongoose.Schema.Types.Number], // 0-create, 1-read, 2-edit, 3-delete
    },
  ],
});

export const UserPermission = mongoose.model(
  "UserPermission",
  UserPermissionSchema
);

// {
// 	permission_name: "user",
// 	permission_value: [0,1,2,3], // 0-create, 1-read, 2-edit, 3-delete
// },
// {
// 	permission_name: "post",
// 	permission_value: [0,1,2], // 0-create, 1-read, 2-edit
// },
// {
// 	permission_name: "category",
// 	permission_value: [0,2], // 0-create, 2-edit
// },
