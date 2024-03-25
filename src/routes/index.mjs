import { Router } from "express";
//routes
import usersRouter from "./auth/users.routes.mjs";
import ingredientsRouter from "./ingredients.routes.mjs";
import authRouter from "./auth/auth.routes.mjs";
import rutaspruebas from "./prueba.routes.mjs";
//middleares
import { authMiddleware } from "../utils/middlewares.mjs";

const router = Router();

router.use("/auth", authRouter);
router.use(
  "/admin/users",
  [
    /*authMiddleware*/
  ],
  usersRouter
);
router.use("/ingredients/", [authMiddleware], ingredientsRouter);
router.use(
  "/products/",
  [
    /*authMiddleware*/
  ],
  ingredientsRouter
);

router.use("/prueba/", rutaspruebas);
export default router;
