import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import RecipeGridPage from "./pages/RecipeGridPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import MealPlannerPage from "./pages/MealPlannerPage";

export default function App() {
  return (<BrowserRouter>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<RecipeGridPage />} />
          <Route path="/recipe" element={<RecipeDetailPage />} />
          <Route path="/planner" element={<MealPlannerPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>);
}
