// base "/api"
import { Router } from "express";
export const router = Router();

// user module
import { router as userRoutes } from "../modules/users/routes/routes.js";
router.use(userRoutes);

// auth module
import { router as authRoutes } from "../modules/auth/routes/routes.js";
router.use("/auth", authRoutes);

// food recipes module
import { router as foodRecipesRoutes } from "../modules/foodRecipes/routes/routes.js";
router.use(foodRecipesRoutes);
