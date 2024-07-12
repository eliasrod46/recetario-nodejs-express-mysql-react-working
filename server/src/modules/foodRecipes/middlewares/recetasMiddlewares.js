import { recetasDao } from "../daos/recetasDao.js";
import { createRecordError } from "../../admin/daos/recordsDao.js";

export const checkGetReceta = async (req, res, next) => {
  const location = "(middleware) - " + import.meta.url + " - (checkGetReceta)";
  const { id } = req.params;
  const receta = await recetasDao.getRecetaByid(id);
  if (receta == undefined) {
    createRecordError({
      error: { message: "Fail on Dao (getRecetaByid)" },
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
