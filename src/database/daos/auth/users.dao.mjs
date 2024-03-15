import { User } from "../../models/auth/user.mjs";

class UserDao {
  constructor() {}
  //--->get all users
  async getAllUsers() {
    const response = await User.find({});
    return response;
  }

  //--->get user by id
  async getUser(id) {
    const response = await User.findById(id);
    return response;
  }

  //--->add new user
  async addUser(User) {
    const newUser = new User({
      name: User.name,
      type: User.type,
    });
    const response = await addUser.save();
    return response;
  }

  //--->delete user
  async deleteUser(id) {
    const response = await User.deleteOne({ _id: id });
    return response;
  }

  //--->update user
  async updateUser(id, user) {
    const response = await Productos.updateOne(
      { _id: id },
      {
        $set: {
          name: user.name,
          type: user.type,
        },
      }
    );
    return response;
  }
}

export const userDao = new UserDao();
