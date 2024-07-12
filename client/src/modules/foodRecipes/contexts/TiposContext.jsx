import {
  getAllTiposApi,
  saveTiposApi,
  updateTiposApi,
  destroyTipoApi,
} from "../apiConections/tiposApi.js";
import { createContext, useState } from "react";

// create Context
export const TiposContext = createContext();

// create Provider
export const TiposProvider = ({ children }) => {
  const [tipos, setTipos] = useState([]);

  const getAllTipos = async () => {
    const response = await getAllTiposApi();
    setTipos(response.data);
    return response.data;
  };

  const saveTipo = async (data) => {
    const response = await saveTiposApi(data);
    return response;
  };

  const updateTipo = async (id, data) => {
    const response = await updateTiposApi(id, data);
    return response;
  };

  const destroyTipo = async (data) => {
    const response = await destroyTipoApi(data.id);
    return response;
  };

  return (
    <TiposContext.Provider
      value={{
        getAllTipos,
        saveTipo,
        updateTipo,
        destroyTipo,
      }}
    >
      {children}
    </TiposContext.Provider>
  );
};
