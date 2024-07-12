import { User } from "../../users/models/userModel.js";
import { recordsDao } from "../../admin/daos/recordsDao.js";

class AuthDao {
  //Get user by his username OK
  async getUserByUsername(username) {
    try {
      const user = await User.findOne({ where: { username } });
      if (user !== 0) {
        //-- record & return
        await recordsDao.addRecord({
          head: "OK",
          body: "sending user",
          location: "auth/daos/AuthDao/getUserByUsername",
          description: "try",
        });
        return user;
      } else {
        //-- record & return
        await recordsDao.addRecord({
          head: "OK",
          body: "user not found",
          location: "auth/daos/AuthDao/getUserByUsername",
          description: "try",
        });
        return undefined;
      }
    } catch (error) {
      //-- record & return
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "auth/daos/AuthDao/getUserByUsername",
        description: "catch",
      });
      return undefined;
    }
  }

  //Create user
  async register({ name, username, password }) {
    try {
      const user = await User.create({ name, username, password });

      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "income created",
        location: "auth/daos/AuthDao/register",
        description: "try",
      });
      return user;
    } catch (error) {
      //-- record & return
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "auth/daos/AuthDao/register",
        description: "catch",
      });
      return false;
    }
  }

  // //Create user
  // async logout() {
  //   try {
  //     // await User.create({ name, username, password });
  //     //-- record & return
  //     // await recordsDao.addRecord({
  //     //   head: "OK",
  //     //   body: "income created",
  //     //   location: "daos/IncomesDao/addIncome",
  //     //   description: "try",
  //     // });
  //     return true;
  //   } catch (error) {
  //     //-- record & return
  //     // await createRecordError({
  //     //   error,
  //     //   location: "daos/IncomesDao/addIncome",
  //     //   description: "catch",
  //     // });
  //     return false;
  //   }
  // }
  // //Update user
  // async profile(id, { name, username, password }) {
  //   try {
  //     // updading
  //     // await Income.update(
  //     //   { date, mount, category, decription },
  //     //   {
  //     //     where: {
  //     //       id,
  //     //     },
  //     //   }
  //     // );
  //     //-- record & return
  //     // await recordsDao.addRecord({
  //     //   head: "OK",
  //     //   body: "income updated",
  //     //   location: "daos/IncomesDao/updateIncome",
  //     //   description: "try",
  //     // });
  //     return true;
  //   } catch (error) {
  //     //-- record & return
  //     // await createRecordError({
  //     //   error,
  //     //   location: "daos/IncomesDao/updateIncome",
  //     //   description: "catch",
  //     // });
  //     return false;
  //   }
  // }
}
export const authDao = new AuthDao();
