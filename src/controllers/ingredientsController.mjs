import { validationResult, matchedData } from "express-validator";
import { igredientDao } from "../database/daos/ingredients.dao.mjs";
import { Ingredient } from "../database/models/ingredients.schema.mjs";

export const index = async (req, res) => {
  try {
    const igredients = await igredientDao.getAllIngredients();
    if (!igredients) return res.sendStatus(404);
    return res.send(users);
  } catch (error) {
    console.log(err);
    return res.sendStatus(400);
  }
};

//--send a user by his id to the client
export const show = async (req, res) => {
  //save id validated
  const { parsedId } = req;
  try {
    const findIngredient = await igredientDao.getIngredient(parsedId);
    if (!findIngredient) return response.sendStatus(404);
    return response.send(findIngredient);
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
    const savedIngredient = await igredientDao.addIngredient(data);
    return res.status(201).send(savedIngredient);
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
    const updatedIngredient = await igredientDao.updateUser(parsedId, data);
    return res.status(201).send(updatedIngredient);
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
    await igredientDao.deleteIngredient(parsedId);
    return res.sendStatus(200);
  } catch (error) {
    console.log(err);
    return res.sendStatus(400);
  }
};
