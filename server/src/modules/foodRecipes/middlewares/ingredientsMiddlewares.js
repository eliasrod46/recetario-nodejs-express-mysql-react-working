import { ingredientsDao } from "../daos/ingredientsDao.js";
import { createRecordError } from "../../admin/daos/recordsDao.js";

export const checkGetIngredient = async (req, res, next) => {
  const location =
    "(middleware) - " + import.meta.url + " - (checkGetIngredient)";
  const { id } = req.params;
  const ingredient = await ingredientsDao.getIngredientByid(id);
  if (ingredient == undefined) {
    createRecordError({
      error: { message: "Fail on Dao (getIngredientByid)" },
      location,
      description: "catch",
    });
    res.status(500).json({
      status: false,
      message: "fail, oops something wrong happen",
    });
  } else {
    next();
  }
};
