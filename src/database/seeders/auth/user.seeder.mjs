import { User } from "../../models/auth/user.mjs";
import { hashPassword } from "../../../utils/helpers.mjs";

const usersToSeed = [
  {
    name: "elias",
    email: "eliasrod46@gmail.com",
    password: hashPassword("1234"),
  },
  {
    name: "admin",
    email: "admin@admin.com",
    password: hashPassword("1234"),
    role: 1,
  },
  {
    name: "sub_admin",
    email: "sub@admin.com",
    password: hashPassword("1234"),
    role: 2,
  },
  {
    name: "editor",
    email: "editor@editor.com",
    password: hashPassword("1234"),
    role: 3,
  },
];

export const seedUsers = () => {
  try {
    usersToSeed.forEach(async (user) => {
      const newUser = new User(user);
      await newUser.save();
    });
  } catch (err) {
    console.log("todo mal en seedUsers seeder");
  }
};
