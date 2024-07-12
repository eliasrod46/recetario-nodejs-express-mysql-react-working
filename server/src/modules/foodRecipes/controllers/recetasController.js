import { recetasDao } from "../daos/recetasDao.js";
import { createRecordError } from "../../admin/daos/recordsDao.js";

class RecetasController {
  // check OK
  async getAll(req, res) {
    // set file location
    const location = " (controller) - " + import.meta.url + " - (getAll)";
    try {
      // get data
      const recetas = await recetasDao.getAllRecetas();

      // chk response
      if (recetas) {
        res.status(200).json({
          message: "success, sending all ingrerecetasdients",
          data: recetas,
        });
      } else {
        throw new Error("Fail on Dao (getAllRecetas)");
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
      const receta = await recetasDao.getRecetaByid(id);
      //verfy if id send match with DB
      if (receta == false) {
        // fail
        res.status(404).json({
          message: "fail",
          errors: [
            {
              type: "response",
              msg: "La receta ingresada no se encuentra en la Base de Datos",
              path: "",
              location: "",
            },
          ],
        });
      } else {
        // send data
        res.status(200).json({
          message: "success, sending receta",
          data: receta,
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
    const { name, description, time, quantity, ingredients } = req.body;
    try {
      // send dadta to dao
      const createdReceta = await recetasDao.addReceta({
        name,
        description,
        time,
        quantity,
        ingredients,
      });
      // check response
      if (createdReceta) {
        res.status(201).json({ message: "success receta created" });
      } else {
        throw new Error("Fail on Dao (addReceta)");
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
    }
  }

  // todo
  async update(req, res) {
    //   // set file location
    //   const location = " (controller) - " + import.meta.url + " - (update)";
    //   // get params & body
    //   const { id } = req.params;
    //   const { name, types } = req.body;
    //   try {
    //     // get data
    //     const ingredient = await ingredientsDao.getIngredientByid(id);
    //     //verfy if id send match with ingredientsDB
    //     if (ingredient == false) {
    //       // fail
    //       res.status(404).json({
    //         message: "fail",
    //         errors: [
    //           {
    //             type: "response",
    //             msg: "El Ingrediente ingresado no se encuentra en la Base de Datos",
    //             path: "",
    //             location: "",
    //           },
    //         ],
    //       });
    //     } else {
    //       //update - send data to dao
    //       const updatedIngredient = await ingredientsDao.updateIngredient(id, {
    //         name,
    //         types,
    //       });
    //       // check response
    //       if (updatedIngredient) {
    //         res.status(201).json({
    //           mesage: "success, ingredient updated",
    //         });
    //       } else {
    //         throw new Error("Fail on Dao (updateIngredient)");
    //       }
    //     }
    //   } catch (error) {
    //     createRecordError({ error, location, description: "catch" });
    //     res.status(500).json({
    //       message: "fail, oops something wrong happen",
    //     });
    //   }
  }

  // check Ok
  async destroy(req, res) {
    const location = " (controller) - " + import.meta.url + " - (destroy)";
    const { id } = req.params;
    try {
      const receta = await recetasDao.getRecetaByid(id);
      //verfy if id send match with DB
      if (receta == false) {
        // fail
        res.status(404).json({
          message: "fail",
          errors: [
            {
              type: "response",
              msg: "El receta ingresado no se encuentra en la Base de Datos",
              path: "",
              location: "",
            },
          ],
        });
      } else {
        //delete
        const deletedReceta = await recetasDao.destroyReceta(id);

        // check response
        if (deletedReceta) {
          res.status(201).json({
            mesage: "success, receta deleted",
          });
        } else {
          throw new Error("Fail on Dao (destroyReceta)");
        }
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
    }
  }
}

export const recetasController = new RecetasController();
