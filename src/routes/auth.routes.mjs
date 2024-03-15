import passport from "passport";
import { Router } from "express";
import { checkSchema } from "express-validator";
import { createUserValidationSchema } from "../database/schemas/auth/userSchema.mjs/index.js";
import * as authController from "../controllers/auth/authController.mjs";

const router = Router();

router.post(
  "/register",
  checkSchema(createUserValidationSchema),
  authController.register
);

router.post("/login", passport.authenticate("local"), (request, response) => {
  response.sendStatus(200);
});

router.post("/logout", (request, response) => {
  if (!request.user) return response.sendStatus(401);
  request.logout((err) => {
    if (err) return response.sendStatus(400);
    response.sendStatus(200);
  });
});

router.get("/status", (req, res) => {
  return req.user ? res.send(req.user) : res.sendStatus(403);
});

//Discord startegi
// router.get("/discord", passport.authenticate("discord"));
// router.get(
//   "/api/auth/discord/redirect",
//   passport.authenticate("discord"),
//   (request, response) => {
//     response.sendStatus(200);
//   }
// );

export default router;
