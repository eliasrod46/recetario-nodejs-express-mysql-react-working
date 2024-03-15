import { validationResult, matchedData } from "express-validator";
import { User } from "../../mongoose/schemas/auth/user.mjs";
import { hashPassword } from "../../utils/helpers.mjs";

//-- save a user recived from de client
export const register = async (req, res) => {
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
    return res.sendStatus(400);
  }
};

export const adminIndex = async (request, response) => {
  if (!result.isEmpty()) return response.status(400).send(result.array());
  const data = matchedData(request);
  data.password = hashPassword(data.password);
  const newUser = new User(data);
  try {
    const savedUser = await newUser.save();
    return response.status(201).send(savedUser);
  } catch (err) {
    return response.sendStatus(400);
  }
};
