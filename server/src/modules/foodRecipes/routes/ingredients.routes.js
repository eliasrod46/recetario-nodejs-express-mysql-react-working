// base "/api/ingredientes"

import { Router } from "express";
import { ingredientsController } from "../controllers/ingredientsController.js";

// middlewares
import { checkGetIngredient } from "../middlewares/ingredientsMiddlewares.js";
import { validateIngredient } from "../validator/ingredientValidator.js";

export const router = Router();

router.get("/", ingredientsController.getAll);
router.get("/:id", checkGetIngredient,ingredientsController.getByid);
router.post("/", validateIngredient, ingredientsController.create);
router.put("/:id", checkGetIngredient,validateIngredient, ingredientsController.update);
router.delete("/:id", checkGetIngredient, ingredientsController.destroy);
