import { usersDao } from "../daos/userDao.js";

class UserController {
  async getAll(req, res) {
    try {
      const users = await usersDao.getAllUsers();

      res.status(200).json({
        message: `success, sending data`,
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }

  async getByid(req, res) {
    const { id } = req.params;
    try {
      const user = await usersDao.getUserByid(id);
      if (!user) {
        res.status(403).json({ message: "user not found" });
      } else {
        res.status(200).json({ message: "success, sending data", data: user });
      }
    } catch (error) {
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }

  async create(req, res) {
    const { name, username, password } = req.body;
    try {
      await usersDao.addUser({ name, username, password });
      res.status(201).json({
        message: `success, data added`,
      });
    } catch (error) {
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, username, password } = req.body;
    try {
      //verfy if id send match with teachersDB
      const user = await usersDao.getUserByid(id);

      if (!user) {
        res.status(403).json({ message: "user not found" });
      } else {
        await usersDao.updateUser(id, {
          name,
          username,
          password,
        });

        res.status(201).json({
          message: `success, data updated`,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    try {
      await usersDao.destroyUser(id);
      res.status(201).json({
        message: `success, data deleted`,
      });
    } catch (error) {
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }
}

export const userController = new UserController();
