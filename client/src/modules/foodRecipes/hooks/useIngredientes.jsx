import { useContext } from "react";
import { IngredientesContext } from "../contexts/IngredientsContext";

//this hook recive and returns all functions of context
export const useIngredientes = () => {
  const ingredientes = useContext(IngredientesContext);

  //verify if use this hook inside of provider
  if (ingredientes === undefined) {
    throw new Error(
      "useIngredientes must be used within a IngredientesProvider"
    );
  }

  return ingredientes;
};
