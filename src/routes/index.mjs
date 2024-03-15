import { Router } from "express";
import usersRouter from "./users.mjs";
import ingredientsRouter from "./ingredients.mjs";
import authRouter from "./auth.mjs";
import { authMiddleware } from "../utils/middlewares.mjs";

const router = Router();

router.use("/auth", authRouter);
router.use("/admin/users", [authMiddleware], usersRouter);
router.use("/ingredients/", [authMiddleware], ingredientsRouter);

export default router;
