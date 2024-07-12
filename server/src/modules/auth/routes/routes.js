// base "/api/auth"
import { Router } from "express";

//validators
import { validateCreateUser } from "../validator/usersValidator.js";
// controllers
import { authController } from "../controllers/authController.js";

export const router = Router();

router.post("/login", authController.login);
router.post("/register", validateCreateUser,authController.register);
router.use("/logout", authController.logout);
router.use("/protected", authController.protected);
