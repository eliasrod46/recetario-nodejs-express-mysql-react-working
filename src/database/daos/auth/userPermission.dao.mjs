import { UserPermission } from "../../models/auth/userPermission.model.mjs";

class UserPermissionDao {
  constructor() {}
  //--->get permission by id
  async getPermissionsOfUser(id) {
    const response = await Permission.finde({ user_id: id });
    return response;
  }
}

// user_id: {
//   type: mongoose.Schema.Types.ObjectId,
//   required: true,
//   ref: "User",
// },
// permissions: [
//   {
//     permission_name: mongoose.Schema.Types.String,
//     permission_value: [mongoose.Schema.Types.Number], // 0-create, 1-read, 2-edit, 3-delete
//   },
// ],

// {
// 	permission_name: "user",
// 	permission_value: [0,1,2,3], // 0-create, 1-read, 2-edit, 3-delete
// },
