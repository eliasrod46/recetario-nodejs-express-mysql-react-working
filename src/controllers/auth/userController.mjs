import { validationResult, matchedData } from "express-validator";
import { userDao } from "../../database/daos/auth/users.dao.mjs";

export const index = async (req, res) => {
  // req.sessionStore.get(req.session.id, (err, sessionData) => {
  //   if (err) {
  //     throw err;
  //   }
  // });

  //query validation
  // const result = validationResult(req);
  //get query data
  // const {
  //   query: { filter, value },
  // } = req;
  try {
    const users = await userDao.getAllUsers();
    if (!users) return res.sendStatus(404);
    return res.send(users);
  } catch (error) {
    console.log(err);
    return res.sendStatus(400);
  }

  // if (filter && value)
  //   return response.send(
  //     mockUsers.filter((user) => user[filter].includes(value))
  //   );
  // return response.send(mockUsers);
};

//--send a user by his id to the client
export const show = async (req, res) => {
  //save id validated
  const { parsedId } = req;
  try {
    const findUser = await userDao.getUser(parsedId);
    if (!findUser) return res.sendStatus(404);
    return res.send(findUser);
  } catch (error) {
    console.log(err);
    return res.sendStatus(400);
  }
};

//--save a user recived from the client
export const store = async (req, res) => {
  //schema validation
  const result = validationResult(req);
  if (!result.isEmpty()) return res.status(400).send(result.array());
  //get data
  const data = matchedData(req);
  try {
    //save data
    const savedUser = await userDao.addUser(data);
    return res.status(201).send(savedUser);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
};

//--update a user by his id recived form the client
export const update = async (req, res) => {
  //save id validated
  const { parsedId } = req;
  //schema validation
  const result = validationResult(req);
  if (!result.isEmpty()) return res.status(400).send(result.array());
  //get data
  const data = matchedData(req);
  try {
    //update data
    const updatedUser = await userDao.updateUser(parsedId, data);
    return res.status(201).send(updatedUser);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
};

//--delete a user by his id recived form the client
export const destroy = async (req, res) => {
  //save id validated
  const { parsedId } = req;
  try {
    await userDao.deleteUser(parsedId);
    return res.sendStatus(200);
  } catch (error) {
    console.log(err);
    return res.sendStatus(400);
  }
};
