import { check } from "express-validator";
import { validateResult } from "../../../helpers/validateHelper.js";

export const validateIngredient = [
  check("name")
    .notEmpty()
    .withMessage("El campo nombre no debe esta vacio")
    .isLength({ min: 3, max: 30 })
    .withMessage(
      "El campo nombre debe tener un minimo 3 y maximo 30 caracteres"
    ),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
