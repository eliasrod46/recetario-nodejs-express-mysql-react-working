import { Route, Routes } from "react-router-dom";
import { Tipos } from "../pages/Tipos";
import { Ingredientes } from "../pages/Ingredientes/Ingredientes";
import { AgregarIngrediente } from "../pages/Ingredientes/AgregarIngrediente";
import { TiposProvider } from "../contexts/TiposContext";
import { IngredientesProvider } from "../contexts/IngredientsContext";

export function IngredientsRoutesList() {
  return (
    <TiposProvider>
      <IngredientesProvider>
        <Routes>
          <Route path="/tipos" element={<Tipos />} />
          <Route path="/ingredientes" element={<Ingredientes />} />
          <Route path="/ingredientes/agregar" element={<AgregarIngrediente />} />
          <Route path="/recetas" element={<h1> sera recetas</h1>} />
        </Routes>
      </IngredientesProvider>
    </TiposProvider>
  );
}
