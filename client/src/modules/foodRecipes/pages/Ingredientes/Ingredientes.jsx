import { IngredientesTable } from "../../components/Ingredientes/IngredientesTable";
import { NavRoutes } from "../../../../components/NavRoute";
const routes = [
  { name: "Inicio", route: "/" },
  { name: "Ingredientes", route: "/ingredientes" },
];

export function Ingredientes() {
  return (
    <div>
      <NavRoutes breadcrumb={routes} />
      <div className="px-4 py-2 text-grey-800 flex flex-col justify-between bg-white bg-opacity-50 rounded-2xl mt-2">
        <h1 className="text-center text-3xl text-gray-500 font-bold my-4">
          Lista de ingredientes
        </h1>
        <IngredientesTable />
      </div>
    </div>
  );
}
