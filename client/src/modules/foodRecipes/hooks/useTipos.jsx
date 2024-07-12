import { useContext } from "react";
import { TiposContext } from "../contexts/TiposContext";

//this hook recive and returns all functions of context
export const useTipos = () => {
  const tipos = useContext(TiposContext);

  //verify if use this hook inside of provider
  if (tipos === undefined) {
    throw new Error("useTipos must be used within a TiposProvider");
  }

  return tipos;
};
