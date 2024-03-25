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

  //--->get user by email
  async getUserByEmail(email) {
    const response = await User.findOne({ email });
    return response;
  }

  //--->add new user
  async addUser(user) {
    const newUser = new User({
      name: user.name,
      type: user.type,
    });
    const response = await newUser.save();
    return response;
  }

  //--->delete user
  async deleteUser(id) {
    const response = await User.deleteOne({ _id: id });
    return response;
  }

  //--->update user
  async updateUser(id, user) {
    const response = await User.updateOne(
      { _id: id },
      {
        $set: {
          name: user.name,
        },
      }
    );
    return response;
  }
}

export const userDao = new UserDao();
