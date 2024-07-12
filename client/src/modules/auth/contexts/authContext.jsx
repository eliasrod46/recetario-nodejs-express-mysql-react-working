import { loginApi, registerApi } from "../apiConections/authApi.js";
import { createContext, useState } from "react";

// create Context
export const AuthContext = createContext();

// create Provider
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState([]);

  const login = async (data) => {
    const response = await loginApi(data);
    setAuth(response.data);
  };

  const register = async () => {
    const response = await registerApi();
    setAuth(response.data);
  };

  const authInfo = async (data) => {
    return auth;
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        authInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
