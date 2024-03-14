import { Router } from "express";
import { query, checkSchema } from "express-validator";
import { createUserValidationSchema } from "../utils/validationSchemas.mjs";
import { resolveIndexByUserId } from "../utils/middlewares.mjs";
import * as userController from "../controllers/auth/userController.mjs";

const router = Router();

router.get(
  "/api/users",
  query("filter")
    .isString()
    .notEmpty()
    .withMessage("Must not be empty")
    .isLength({ min: 3, max: 10 })
    .withMessage("Must be at least 3-10 characters"),
  userController.index
);

router.get("/api/users/:id", resolveIndexByUserId, userController.show);

router.post(
  "/api/users",
  checkSchema(createUserValidationSchema),
  userController.store
);

router.put("/api/users/:id", resolveIndexByUserId, userController.update);

router.delete("/api/users/:id", resolveIndexByUserId, userController.destroy);

export default router;
