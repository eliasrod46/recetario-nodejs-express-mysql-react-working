// base "/api/ingredientes"

import { Router } from "express";
import { typesController } from "../controllers/typesController.js";
// middlewares
import { validateType } from "../validator/typeValidator.js";
import { checkGetType } from "../middlewares/typesMiddlewares.js";

export const router = Router();

router.get("/", typesController.getAll);
router.get("/:id", checkGetType, typesController.getByid);
router.post("/", validateType, typesController.create);
router.put("/:id", validateType, checkGetType, typesController.update);
router.delete("/:id", checkGetType, typesController.destroy);
