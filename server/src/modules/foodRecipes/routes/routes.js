// base "/api"

import { Router } from "express";
import { router as ingredientsRoutes } from "./ingredients.routes.js";
import { router as typesRoutes } from "./types.routes.js";
import { router as recetasRoutes } from "./recetas.routes.js";
export const router = Router();

router.use("/ingredientes", ingredientsRoutes);
router.use("/tipos-ingredientes", typesRoutes);
router.use("/recetas", recetasRoutes);
