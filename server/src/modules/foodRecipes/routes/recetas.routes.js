// base "/api/recetas"

import { Router } from "express";
import { recetasController } from "../controllers/recetasController.js";

// middlewares
import { checkGetReceta } from "../middlewares/recetasMiddlewares.js";
import { validateReceta } from "../validator/recetaValidator.js";

export const router = Router();

router.get("/", recetasController.getAll);
router.get("/:id", checkGetReceta, recetasController.getByid);
router.post("/", validateReceta, recetasController.create);
router.put("/:id", checkGetReceta, validateReceta, recetasController.update);
router.delete("/:id", checkGetReceta, recetasController.destroy);
