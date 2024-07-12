import { check } from "express-validator";
import { validateResult } from "../../../helpers/validateHelper.js";

export const validateCreateUser = [
  check("name")
    .notEmpty()
    .withMessage("El campo nombre no debe esta vacio")
    .isLength({ min: 3, max: 30 })
    .withMessage(
      "El campo nombre debe tener un minimo 3 y maximo 30 caracteres"
    ),

  check("username")
    .notEmpty()
    .withMessage("El campo username no debe esta vacio")
    .isLength({ min: 3, max: 30 })
    .withMessage(
      "El campo username debe tener un minimo 3 y maximo 30 caracteres"
    ),

  check("password")
    .notEmpty()
    .withMessage("El campo password no debe esta vacio")
    .isLength({ min: 8, max: 30 })
    .withMessage(
      "El campo contraseña debe tener un minimo 8 y maximo 30 caracteres"
    ),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export const validateUpdateUser = [
  check("name")
    .notEmpty()
    .withMessage("El campo nombre no debe esta vacio")
    .isLength({ min: 3, max: 30 })
    .withMessage(
      "El campo nombre debe tener un minimo 3 y maximo 30 caracteres"
    ),

  check("username")
    .notEmpty()
    .withMessage("El campo username no debe esta vacio")
    .isLength({ min: 3, max: 30 })
    .withMessage(
      "El campo username debe tener un minimo 3 y maximo 30 caracteres"
    ),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
