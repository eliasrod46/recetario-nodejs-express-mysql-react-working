import { typeDao } from "../daos/typeDao.js";
import { createRecordError } from "../../admin/daos/recordsDao.js";

export const checkGetType = async (req, res, next) => {
  const location = " (middleware) - " + import.meta.url + " - (checkGetType)";
  const { id } = req.params;
  const type = await typeDao.getTypeByid(id);
  if (type == undefined) {
    createRecordError({
      error: { message: "Fail on Dao (getTypeByid)" },
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
