import { User } from "../models/userModel.js";
import { createRecordError, recordsDao } from "../../admin/daos/recordsDao.js";

class UsersDao {
  //Get list of all users OK
  async getAllUsers() {
    try {
      const users = await User.findAll();
      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "sending users",
        location: "auth/daos/UsersDao/getAllUsers",
        description: "try",
      });
      return users;
    } catch (error) {
      //-- record & return
      await createRecordError({
        error,
        location: "auth/daos/UsersDao/getAllUsers",
        description: "catch",
      });
      return [];
    }

    return true;
  }

  //Get user by his id OK
  async getUserByid(id) {
    try {
      const user = await User.findOne({ where: { id } });

      if (user !== 0) {
        //-- record & return
        await recordsDao.addRecord({
          head: "OK",
          body: "sending user",
          location: "auth/daos/UsersDao/getUserByid",
          description: "try",
        });
        return user;
      } else {
        //-- record & return
        await recordsDao.addRecord({
          head: "OK",
          body: "user not found",
          location: "auth/daos/UsersDao/getUserByid",
          description: "try",
        });
        return undefined;
      }
    } catch (error) {
      //-- record & return
      await createRecordError({
        error,
        location: "auth/daos/UsersDao/getUserByid",
        description: "catch",
      });
      return undefined;
    }
  }

  //Create user
  async addUser({ name, username, password }) {
    try {
      // await User.create({ name, username, password });

      //-- record & return
      // await recordsDao.addRecord({
      //   head: "OK",
      //   body: "income created",
      //   location: "daos/IncomesDao/addIncome",
      //   description: "try",
      // });
      return true;
    } catch (error) {
      //-- record & return
      // await createRecordError({
      //   error,
      //   location: "daos/IncomesDao/addIncome",
      //   description: "catch",
      // });
      return false;
    }
  }

  //Update user
  async updateUser(id, { name, username, password }) {
    try {
      // updading
      // await Income.update(
      //   { date, mount, category, decription },
      //   {
      //     where: {
      //       id,
      //     },
      //   }
      // );

      //-- record & return
      // await recordsDao.addRecord({
      //   head: "OK",
      //   body: "income updated",
      //   location: "daos/IncomesDao/updateIncome",
      //   description: "try",
      // });
      return true;
    } catch (error) {
      //-- record & return
      // await createRecordError({
      //   error,
      //   location: "daos/IncomesDao/updateIncome",
      //   description: "catch",
      // });
      return false;
    }
  }

  //Destroy income OK
  async destroyUser(id) {
    try {
      await User.destroy({
        where: {
          id,
        },
      });
      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "user deleted",
        location: "auth/daos/UsersDao/destroyUser",
        description: "try",
      });
      return true;
    } catch (error) {
      //-- record & return
      await createRecordError({
        error,
        location: "auth/daos/UsersDao/destroyUser",
        description: "catch",
      });
      return false;
    }
  }
}
export const usersDao = new UsersDao();
