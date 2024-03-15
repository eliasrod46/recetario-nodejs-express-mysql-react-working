import { validationResult, matchedData } from "express-validator";
import { Ingredient } from "../mongoose/schemas/ingredients.mjs";
import { hashPassword } from "../../utils/helpers.mjs";

export const index = (request, response) => {
  // request.sessionStore.get(request.session.id, (err, sessionData) => {
  //   if (err) {
  //     throw err;
  //   }
  // });

  // //query validation
  // const result = validationResult(request);

  // //
  // const {
  //   query: { filter, value },
  // } = request;
  // if (filter && value)
  //   return response.send(
  //     mockUsers.filter((user) => user[filter].includes(value))
  //   );
  return response.send(mockUsers);
};

export const show = (request, response) => {
  const { findUserIndex } = request;
  const findUser = mockUsers[findUserIndex];
  if (!findUser) return response.sendStatus(404);
  return response.send(findUser);
};

export const store = async (request, response) => {
  const result = validationResult(request);
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

export const update = (request, response) => {
  const { body, findUserIndex } = request;
  mockUsers[findUserIndex] = { id: mockUsers[findUserIndex].id, ...body };
  return response.sendStatus(200);
};

export const destroy = (request, response) => {
  const { findUserIndex } = request;
  mockUsers.splice(findUserIndex, 1);
  return response.sendStatus(200);
};
