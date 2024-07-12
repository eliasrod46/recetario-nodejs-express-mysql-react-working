import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";

export function IndexRoutesList() {
  return (
    <Routes>
      <Route path="/" element={<h1>la raiz de todo</h1>} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
