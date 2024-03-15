import { Router } from "express";
//routes
import usersRouter from "./users.routes.mjs/index.js";
import ingredientsRouter from "./ingredients.routes.mjs/index.js";
import authRouter from "./auth.routes.mjs/index.js";
//middleares
import { authMiddleware } from "../utils/middlewares.mjs";

const router = Router();

router.use("/auth", authRouter);
router.use("/admin/users", [authMiddleware], usersRouter);
router.use("/ingredients/", [authMiddleware], ingredientsRouter);
router.use(
  "/products/",
  [
    /*authMiddleware*/
  ],
  ingredientsRouter
);

export default router;
