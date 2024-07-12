import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

//this hook recive and returns all functions of context
export const useAuth = () => {
  const auth = useContext(AuthContext);

  //verify if use this hook inside of provider
  if (auth === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return auth;
};
