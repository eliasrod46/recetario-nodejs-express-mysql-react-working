import { check } from "express-validator";
import { validateResult } from "../../../helpers/validateHelper.js";

export const validateReceta = [
  check("name")
    .notEmpty()
    .withMessage("El campo nombre no debe esta vacio")
    .isLength({ min: 3, max: 30 })
    .withMessage(
      "El campo nombre debe tener un minimo 3 y maximo 30 caracteres"
    ),

  check("description")
    .notEmpty()
    .withMessage("El campo nombre no debe esta vacio")
    .isLength({ min: 1 })
    .withMessage("El campo nombre debe tener un minimo 1"),

  check("time").notEmpty().withMessage("El campo tiempo no debe esta vacio"),

  check("quantity")
    .notEmpty()
    .withMessage("El campo prociones no debe esta vacio"),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];
