import { Router } from "express";
//validation
import { query, checkSchema } from "express-validator";
import { userSchema } from "../database/schemas/auth/userSchema.mjs";
//midlewates
import { validateId } from "../utils/middlewares.mjs";
//controllers
import * as userController from "../controllers/auth/userController.mjs";

const router = Router();

//--endpoint to show all users
router.get(
  "/",
  // query("filter")
  //   .isString()
  //   .notEmpty()
  //   .withMessage("Must not be empty")
  //   .isLength({ min: 3, max: 10 })
  //   .withMessage("Must be at least 3-10 characters"),
  userController.index
);

//--endpoint to show a user
router.get("/:id", validateId, userController.show);

//--endpoint to save a user
router.post("/", checkSchema(userSchema), userController.store);

//--endpoint to update a user
router.put("/:id", checkSchema(userSchema), validateId, userController.update);

//--endpoint to delete a user
router.delete("/:id", validateId, userController.destroy);

export default router;
