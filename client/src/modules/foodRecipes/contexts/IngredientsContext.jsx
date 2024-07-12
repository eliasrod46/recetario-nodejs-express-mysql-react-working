import {
  getAllIngredientesApi,
  saveIngredienteApi,
  destroyIngredienteApi,
} from "../apiConections/ingredientesApi.js";
import { createContext } from "react";

// create Context
export const IngredientesContext = createContext();

// create Provider
export const IngredientesProvider = ({ children }) => {
  const getAllIngredientes = async () => {
    const response = await getAllIngredientesApi();
    return response.data;
  };

  const saveIngrediente = async (data) => {
    const response = await saveIngredienteApi(data);
    return response;
  };

  const destroyIngrediente = async (data) => {
    const response = await destroyIngredienteApi(data.id);
    return response;
  };

  return (
    <IngredientesContext.Provider
      value={{
        getAllIngredientes,
        saveIngrediente,
        destroyIngrediente,
      }}
    >
      {children}
    </IngredientesContext.Provider>
  );
};
