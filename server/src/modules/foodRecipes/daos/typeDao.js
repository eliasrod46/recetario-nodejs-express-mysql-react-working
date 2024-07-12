import { Type } from "../models/TypeModel.js";
import { recordsDao, createRecordError } from "../../admin/daos/recordsDao.js";

class TypeDao {
  // check Ok
  async getAllTypes() {
    // set file location
    const location = " (dao) - " + import.meta.url + " - (getAllTypes)";
    try {
      // get data
      const types = await Type.findAll();
      //-- record & return
      await recordsDao.addRecord({
        head: "success",
        body: "sending recetas",
        location,
        description: "try",
      });
      return types;
    } catch (error) {
      //-- record & return
      createRecordError({ error, location, description: "catch" });
      return false;
    }
  }

  // check Ok
  async getTypeByid(id) {
    // set file location
    const location = " (dao) - " + import.meta.url + " - (getTypeByid)";
    try {
      // get data
      const type = await Type.findOne({ where: { id } });

      // check if exist
      if (type == null) {
        await recordsDao.addRecord({
          head: "fail",
          body: "type not found",
          location,
          description: "try",
        });
        return false;
      } else {
        await recordsDao.addRecord({
          head: "success",
          body: "sending type",
          location,
          description: "try",
        });
        return type;
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      return undefined;
    }
  }

  // check Ok
  async getTypeByName(name) {
    // set file location
    const location = " (dao) - " + import.meta.url + " - (getTypeByName)";
    try {
      // get data
      const type = await Type.findOne({ where: { name } });
      // check if exist
      if (type == null) {
        await recordsDao.addRecord({
          head: "fail",
          body: "type not found",
          location,
          description: "try",
        });
        return false;
      } else {
        await recordsDao.addRecord({
          head: "success",
          body: "sending type",
          location,
          description: "try",
        });
        return type;
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      return undefined;
    }
  }

  // check Ok
  async addType({ name }) {
    // set file location
    const location = " (dao) - " + import.meta.url + " - (addType)";
    try {
      // create item
      await Type.create({ name });
      //-- record & return
      await recordsDao.addRecord({
        head: "success",
        body: "Type created",
        location,
        description: "try",
      });
      return true;
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      return false;
    }
  }

  // check Ok
  async updateType(id, { name }) {
    // set file location
    const location = " (dao) - " + import.meta.url + " - (updateType)";
    try {
      // updading
      await Type.update(
        { name },
        {
          where: {
            id,
          },
        }
      );

      //-- record & return
      await recordsDao.addRecord({
        head: "success",
        body: "type updated",
        location,
        description: "try",
      });
      return true;
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      return false;
    }
  }

  // check Ok
  async destroyType(id) {
    // set file location
    const location = " (dao) - " + import.meta.url + " - (destroyType)";
    try {
      // delete item
      await Type.destroy({
        where: {
          id,
        },
      });
      //-- record & return
      await recordsDao.addRecord({
        head: "success",
        body: "type deleted",
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
export const typeDao = new TypeDao();
