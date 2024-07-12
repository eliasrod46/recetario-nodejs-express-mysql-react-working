// //import conection
// import { db } from "../../../database/db.js";
// import { DataTypes } from "sequelize";
// //import models(Relationships)
// // import { Teacher } from "../../teachers/models/teacherModel.js";

// export const User = db.define("users", {
//   name: { type: DataTypes.STRING, allowNull: false },
//   username: { type: DataTypes.STRING, allowNull: false, unique: true },
//   password: { type: DataTypes.STRING, allowNull: false },
// });

// //--Sync (create/update table)
// export const userMigration = async () => {
//   await User.sync({ force: true });
// };

// //---Relationships
