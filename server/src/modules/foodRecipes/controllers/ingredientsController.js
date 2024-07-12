import { ingredientsDao } from "../daos/ingredientsDao.js";
import { createRecordError } from "../../admin/daos/recordsDao.js";

class IngredientsController {
  // check Ok
  async getAll(req, res) {
    // set file location
    const location = " (controller) - " + import.meta.url + " - (getAll)";
    try {
      // get data
      const ingredients = await ingredientsDao.getAllIngredients();

      // chk response
      if (ingredients) {
        res.status(200).json({
          message: "success, sending all ingredients",
          data: ingredients,
        });
      } else {
        throw new Error("Fail on Dao (getAll)");
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
    }
  }

  // check Ok
  async getByid(req, res) {
    // set file location
    const location = " (controller) - " + import.meta.url + " - (getByid)";
    // get params
    const { id } = req.params;
    try {
      // get data
      const ingredient = await ingredientsDao.getIngredientByid(id);
      //verfy if id send match with DB
      if (ingredient == false) {
        // fail
        res.status(404).json({
          message: "fail",
          errors: [
            {
              type: "response",
              msg: "El Ingrediente ingresado no se encuentra en la Base de Datos",
              path: "",
              location: "",
            },
          ],
        });
      } else {
        // send data
        res.status(200).json({
          message: "success, sending ingredient",
          data: ingredient,
        });
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
    }
  }

  // check Ok
  async create(req, res) {
    // set file location
    const location = " (controller) - " + import.meta.url + " - (create)";
    // get body
    const { name, types } = req.body;
    try {
      // send dadta to dao
      const createdIngredient = await ingredientsDao.addIngredient({
        name,
        types,
      });

      // check response
      if (createdIngredient) {
        res
          .status(201)
          .json({ status: true, message: "success ingredient created" });
      } else {
        throw new Error("Fail on Dao (addIngredient)");
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      res.status(500).json({
        status: false,
        message: "fail, oops something wrong happen",
      });
    }
  }

  // check Ok
  async update(req, res) {
    // set file location
    const location = " (controller) - " + import.meta.url + " - (update)";
    // get params & body
    const { id } = req.params;
    const { name, types } = req.body;
    try {
      // get data
      const ingredient = await ingredientsDao.getIngredientByid(id);
      //verfy if id send match with ingredientsDB
      if (ingredient == false) {
        // fail
        res.status(404).json({
          message: "fail",
          errors: [
            {
              type: "response",
              msg: "El Ingrediente ingresado no se encuentra en la Base de Datos",
              path: "",
              location: "",
            },
          ],
        });
      } else {
        //update - send data to dao
        const updatedIngredient = await ingredientsDao.updateIngredient(id, {
          name,
          types,
        });
        // check response
        if (updatedIngredient) {
          res.status(201).json({
            mesage: "success, ingredient updated",
          });
        } else {
          throw new Error("Fail on Dao (updateIngredient)");
        }
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
    }
  }

  // check Ok
  async destroy(req, res) {
    const location = " (controller) - " + import.meta.url + " - (destroy)";
    const { id } = req.params;
    try {
      const ingredient = await ingredientsDao.getIngredientByid(id);
      //verfy if id send match with DB
      if (ingredient == false) {
        // fail
        res.status(404).json({
          status: false,
          message: "fail",
          errors: [
            {
              type: "response",
              msg: "El Ingrediente ingresado no se encuentra en la Base de Datos",
              path: "",
              location: "",
            },
          ],
        });
      } else {
        //delete
        const deletedIngredient = await ingredientsDao.destroyIngredient(id);

        // check response
        if (deletedIngredient) {
          res.status(201).json({
            status: true,
            mesage: "success, ingredient deleted",
          });
        } else {
          throw new Error("Fail on Dao (destroyIngredient)");
        }
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      res.status(500).json({
        status: false,
        message: "fail, oops something wrong happen",
      });
    }
  }
}

export const ingredientsController = new IngredientsController();
