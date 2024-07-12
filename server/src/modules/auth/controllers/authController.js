import { authDao } from "../daos/authDao.js";
import { verifyPassword, hashPassword } from "../utils/helpers.js";

class AuthController {
  //login
  async login(req, res) {
    const { username, password } = req.body;

    try {
      const user = await authDao.getUserByUsername(username);
      if (!user) {
        res.status(403).json({ message: "user not found" });
      } else if (await verifyPassword(password, user.password)) {
        const { password: _, ...publicUser } = user.dataValues;
        const token = publicUser;

        res.status(200).json({
          message: `success, login OK`,
          data: publicUser,
        });
      } else {
        res.status(403).json({ message: "passwords not match" });
      }
    } catch (error) {
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }

  //register
  async register(req, res) {
    const { name, username, password } = req.body;
    try {
      const checkUserExist = await authDao.getUserByUsername(username);

      if (checkUserExist) {
        res.status(400).json({ message: "user already exist" });
      } else {
        // hash password
        const passwordHashed = await hashPassword(password);
        // store user
        const user = await authDao.register({
          name,
          username,
          password: passwordHashed,
        });
        // check
        if (!user) throw new Error("fail to create user");
        const { password: _, id = "", ...publicUser } = user.dataValues;
        // create token
        const token = publicUser;
        // send response
        res.status(200).json({
          message: `success, register OK`,
          data: token,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }

  //logout
  async logout(req, res) {
    res.send("hola logout");
  }

  //protected
  async protected(req, res) {
    res.send("hola protected");
  }
}

export const authController = new AuthController();
