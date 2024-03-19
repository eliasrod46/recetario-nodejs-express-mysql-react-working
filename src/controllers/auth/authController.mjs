import { validationResult, matchedData } from "express-validator";
import { hashPassword } from "../../utils/helpers.mjs";
import { userDao } from "../../database/daos/auth/users.dao.mjs";

//-- save a user recived from the client
export const register = async (req, res) => {
  //schema validation
  const result = validationResult(req);
  if (!result.isEmpty()) return res.status(400).send(result.array());
  //get data & hashpassword
  const data = matchedData(req);
  data.password = hashPassword(data.password);
  try {
    //save data
    const savedUser = await userDao.addUser(data);
    return res.status(201).send(savedUser);
  } catch (err) {
    return res.sendStatus(400);
  }
};

export const adminIndex = async (req, res) => {
  try {
    return response.status(201).send("savedUser");
  } catch (err) {
    return response.sendStatus(400);
  }
};
