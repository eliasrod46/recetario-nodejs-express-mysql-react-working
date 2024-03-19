import { Permission } from "../../models/auth/permission.model.mjs";

class PermissionDao {
  constructor() {}
  //--->get all Permissions
  async getAllPermissions() {
    const response = await Permission.find({});
    return response;
  }

  //--->get permission by id
  async getPermission(id) {
    const response = await Permission.findById(id);
    return response;
  }

  //--->add new permission
  async addPermission(permission) {
    const newPermission = new Permission({
      name: permission.name,
      type: permission.type,
    });
    const response = await newPermission.save();
    return response;
  }

  //--->delete permission
  async deletePermission(id) {
    const response = await Permission.deleteOne({ _id: id });
    return response;
  }

  //--->update user
  async updatePermission(id, permission) {
    const response = await Permission.updateOne(
      { _id: id },
      {
        $set: {
          permission_name: permission.permission_name,
          is_default: permission.is_default,
        },
      }
    );
    return response;
  }
}

export const permissionDao = new PermissionDao();
