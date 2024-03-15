import { Router } from "express";
import { query, checkSchema } from "express-validator";
import { createUserValidationSchema } from "../utils/validationSchemas.mjs";
import { resolveIndexByUserId } from "../utils/middlewares.mjs";
import * as userController from "../controllers/auth/userController.mjs";

const router = Router();

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

router.get("/:id", resolveIndexByUserId, userController.show);

router.post("/", checkSchema(createUserValidationSchema), userController.store);

router.put("/:id", resolveIndexByUserId, userController.update);

router.delete("/:id", resolveIndexByUserId, userController.destroy);

export default router;
