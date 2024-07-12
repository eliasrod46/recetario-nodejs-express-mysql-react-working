// base "/api"
import { Router } from "express";

//validators
import {
  validateCreateUser,
  validateUpdateUser,
} from "../validator/usersValidator.js";
// controllers
import { userController } from "../controllers/userController.js";

export const router = Router();

router.get("/admin/users", userController.getAll);
router.post("/admin/users", validateCreateUser, userController.create);
router.get("/admin/users/:id", userController.getByid);
router.put("/admin/users/:id", validateUpdateUser, userController.update);
router.delete("/admin/users/:id", userController.destroy);
