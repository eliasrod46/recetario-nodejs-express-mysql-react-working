import { typeDao } from "../daos/typeDao.js";
import { recordsDao, createRecordError } from "../../admin/daos/recordsDao.js";

class TypesController {
  // check Ok
  async getAll(req, res) {
    // set file location
    const location = " (controller) - " + import.meta.url + " - (getAll)";
    try {
      // get data
      const types = await typeDao.getAllTypes();
      // chk response
      if (types) {
        res.status(200).json({
          status: true,
          message: "success, sending all types",
          data: types,
        });
      } else {
        throw new Error("Fail on Dao (getAll)");
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
  async getByid(req, res) {
    // set file location
    const location = " (controller) - " + import.meta.url + " - (getByid)";
    // get params
    const { id } = req.params;
    try {
      // get data
      const type = await typeDao.getTypeByid(id);
      //verfy if id send match with DB
      if (type == false) {
        // fail
        res.status(404).json({
          status: false,
          message: "fail",
          errors: [
            {
              type: "response",
              msg: "El Tipo ingresado no se encuentra en la Base de Datos",
              path: "",
              location: "",
            },
          ],
        });
      } else {
        // send data
        res.status(200).json({
          status: true,
          message: "success, sending type",
          data: type,
        });
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
  async create(req, res) {
    // set file location
    const location = " (controller) - " + import.meta.url + " - (create)";
    // get body
    const { name } = req.body;

    try {
      // send dadta to dao
      const createdType = await typeDao.addType({ name });
      // check response
      if (createdType) {
        res.status(201).json({ status: true, message: "success type created" });
      } else {
        throw new Error("Fail on Dao (addType)");
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
    const { name } = req.body;
    try {
      // get data
      const type = await typeDao.getTypeByid(id);
      //verfy if id send match with DB
      if (type == false) {
        // fail
        res.status(404).json({
          status: false,
          message: "fail",
          errors: [
            {
              type: "response",
              msg: "El Tipo ingresado no se encuentra en la Base de Datos",
              path: "",
              location: "",
            },
          ],
        });
      } else {
        //update - send data to dao
        const updatedType = await typeDao.updateType(id, {
          name,
        });

        // check response
        if (updatedType) {
          res.status(201).json({
            status: true,
            mesage: "success, type updated",
          });
        } else {
          throw new Error("Fail on Dao (updateType)");
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

  // check Ok
  async destroy(req, res) {
    const location = " (controller) - " + import.meta.url + " - (destroy)";
    const { id } = req.params;
    try {
      const type = await typeDao.getTypeByid(id);
      //verfy if id send match with DB
      if (type == false) {
        // fail
        res.status(404).json({
          status: false,
          message: "fail",
          errors: [
            {
              type: "response",
              msg: "El Tipo ingresado no se encuentra en la Base de Datos",
              path: "",
              location: "",
            },
          ],
        });
      } else {
        //delete
        const deletedType = await typeDao.destroyType(id);

        // check response
        if (deletedType) {
          res.status(201).json({
            status: true,
            mesage: "success, type deleted",
          });
        } else {
          throw new Error("Fail on Dao (destroyType)");
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

export const typesController = new TypesController();
