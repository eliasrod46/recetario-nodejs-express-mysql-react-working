import { Permission } from "../../models/auth/permission.model.mjs";

const permissionsToSeed = [
  { permission_name: "permiso 1" },
  { permission_name: "permiso 2", is_default: 1 },
  { permission_name: "user" },
  { permission_name: "comment", is_default: 1 },
];

export const seedPermissions = () => {
  try {
    permissionsToSeed.forEach(async (permission) => {
      const newPermission = new Permission(permission);
      await newPermission.save();
    });
  } catch (err) {
    console.log("todo mal en Permission seeder");
  }
};
