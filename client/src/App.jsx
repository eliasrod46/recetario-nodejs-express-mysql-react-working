import "./App.css";
import { AuthProvider } from "./modules/auth/contexts/authContext";
import { Header } from "./components/Header/Header";
import { IndexRoutesList } from "./routes/IndexRoutesList";
// foodRecipes module routes
import { IngredientsRoutesList } from "./modules/foodRecipes/routes/IngredientRoutesList";
// auth module routes
import { AuthRoutesList } from "./modules/auth/routes/authRoutesList";

function App() {
  return (
    <main className="bg-cover bg-[url('./assets/fondo.jpg')] h-screen p-2 overflow-y-auto">
      <AuthProvider>
        <div>
          <Header />
          {/* auth routes */}
          <AuthRoutesList />
          {/* index routes */}
          <IndexRoutesList /> 
          {/* foodRecipes module */}
          <IngredientsRoutesList />
        </div>
      </AuthProvider>
    </main>
  );
}

export default App;
