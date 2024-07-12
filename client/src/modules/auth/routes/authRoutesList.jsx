import { Route, Routes } from "react-router-dom";
// pages
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Protected } from "../pages/Protected";
// providers

export function AuthRoutesList() {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/protected" element={<Protected />} />
    </Routes>
  );
}
