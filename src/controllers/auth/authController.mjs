import { validationResult, matchedData } from "express-validator";
import { User } from "../../mongoose/schemas/auth/user.mjs";
import { hashPassword } from "../../utils/helpers.mjs";

export const register = async (request, response) => {
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
