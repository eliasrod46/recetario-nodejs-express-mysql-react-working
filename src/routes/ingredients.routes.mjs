import { Router } from "express";
//validation
import { checkSchema } from "express-validator";
import { ingredientSchema } from "../database/schemas/ingredientsSchema.mjs";
//midlewates
import { validateId } from "../utils/middlewares.mjs";
//controllers
import * as ingredientsController from "../controllers/ingredientsController.mjs";

const router = Router();

//--endpoint to show all users
router.get("/", ingredientsController.index);

//--endpoint to show a user
router.get("/:id", validateId, ingredientsController.show);

//--endpoint to save a user
router.post("/", checkSchema(ingredientSchema), ingredientsController.store);

//--endpoint to update a user
router.put(
  "/:id",
  checkSchema(ingredientSchema),
  validateId,
  ingredientsController.update
);

//--endpoint to delete a user
router.delete("/:id", validateId, ingredientsController.destroy);

export default router;
