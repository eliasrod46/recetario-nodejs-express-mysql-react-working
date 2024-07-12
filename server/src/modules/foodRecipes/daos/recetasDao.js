import { Receta, IngredientesRecetas } from "../models/recetaModel.js";
import { Ingredient } from "../models/ingredientModel.js";
import { ingredientsDao } from "../daos/ingredientsDao.js";
import { recordsDao, createRecordError } from "../../admin/daos/recordsDao.js";

class RecetasDao {
  // check Ok
  async getAllRecetas() {
    // set file location
    const location = " (dao) - " + import.meta.url + " - (getAllRecetas)";
    try {
      // get data
      const recetas = await Receta.findAll({
        include: [
          {
            model: Ingredient, // will create a left join
            // required: true, // inner join
            // right: true // has no effect, will create an inner join
          },
        ],
      });
      //-- record & return
      await recordsDao.addRecord({
        head: "success",
        body: "sending recetas",
        location,
        description: "try",
      });
      return recetas;
    } catch (error) {
      //-- record & return
      createRecordError({ error, location, description: "catch" });
      return false;
    }
  }

  // check Ok
  async getRecetaByid(id) {
    // set file location
    const location = " (dao) - " + import.meta.url + " - (getRecetaByid)";
    try {
      // get data
      const receta = await Receta.findOne({
        where: { id },
        include: [
          {
            model: Ingredient, // will create a left join
            // required: true, // inner join
            // right: true // has no effect, will create an inner join
          },
        ],
      });
      // check if exist
      if (receta == null) {
        await recordsDao.addRecord({
          head: "fail",
          body: "receta not found",
          location,
          description: "try",
        });
        return false;
      } else {
        await recordsDao.addRecord({
          head: "successOK",
          body: "sending receta",
          location,
          description: "try",
        });
        return receta;
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      return undefined;
    }
  }

  // check Ok
  async addReceta({ name, description, time, quantity, ingredients = [] }) {
    // set file location
    const location = " (dao) - " + import.meta.url + " - (addReceta)";
    try {
      // create item
      const recetaCreated = await Receta.create({
        name,
        description,
        time,
        quantity,
      });

      // arr to save ingredients to syync
      let ingredientsToSync = [];
      // adding types
      if (ingredients.length > 0) {
        ingredients.forEach(async (ingredient, i) => {
          // get data
          const ingredientToAdd = await ingredientsDao.getIngredientByName(
            ingredient
          ); // cahnge to byName
          // check if exist
          if (ingredientToAdd == undefined) {
            // record
            await recordsDao.addRecord({
              head: "fail",
              body: "Fail on Dao (getIngredientByName)",
              location,
              description: "try",
            });
          } else if (ingredientToAdd == false) {
            // record
            await recordsDao.addRecord({
              head: "fail",
              body: "fail, ingredient not found",
              location,
              description: "try",
            });
          } else {
            IngredientesRecetas.create({
              ingrediente_measure: "unidades",
              ingrediente_quantity: 4,
              recetaId: recetaCreated.id,
              ingredientId: ingredientToAdd.id,
            });
          }
        });
      }
      //-- record & return
      await recordsDao.addRecord({
        head: "success",
        body: "receta created",
        location,
        description: "try",
      });
      return true;
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      return false;
    }
  }

  // todo
  async updateReceta(id, { name, types = [] }) {
    //   // set file location
    //   const location = " (dao) - " + import.meta.url + " - (addIngredient)";
    //   const typesToSync = [];
    //   try {
    //     // updading ingredient
    //     await Ingredient.update(
    //       { name },
    //       {
    //         where: {
    //           id,
    //         },
    //       }
    //     );
    //     const updatedIngredient = await this.getIngredientByid(id);
    //     // adding types
    //     if (types.length > 0) {
    //       types.forEach(async (type, i) => {
    //         // get data
    //         const typeToAdd = await typeDao.getTypeByName(type);
    //         // check if exist
    //         if (typeToAdd == undefined) {
    //           // record
    //           await recordsDao.addRecord({
    //             head: "fail",
    //             body: "Fail on Dao (getByid)",
    //             location,
    //             description: "try",
    //           });
    //         } else if (typeToAdd == false) {
    //           // record
    //           await recordsDao.addRecord({
    //             head: "fail",
    //             body: "fail, type not found",
    //             location,
    //             description: "try",
    //           });
    //         } else {
    //           // add type id to array
    //           typesToSync.push(typeToAdd.id);
    //         }
    //         // chk if last loop
    //         if (i + 1 == types.length) {
    //           // filter no repeat types id
    //           const uniqueArray = [...new Set(typesToSync)];
    //           // record data pivot table
    //           updatedIngredient.setTypes(uniqueArray);
    //         }
    //       });
    //     }
    //     //-- record & return
    //     await recordsDao.addRecord({
    //       head: "success",
    //       body: "ingredient updated",
    //       location,
    //       description: "try",
    //     });
    //     return true;
    //   } catch (error) {
    //     createRecordError({ error, location, description: "catch" });
    //     return false;
    //   }
  }

  // check Ok
  async destroyReceta(id) {
    // set file location
    const location = " (dao) - " + import.meta.url + " - (destroyReceta)";
    try {
      // delete item
      await Receta.destroy({
        where: {
          id,
        },
      });
      //-- record & return
      await recordsDao.addRecord({
        head: "success",
        body: "receta deleted",
        location,
        description: "try",
      });
      return true;
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      return false;
    }
  }
}
export const recetasDao = new RecetasDao();
