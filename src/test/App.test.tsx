import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import RecipeGridPage from "../pages/RecipeGridPage";
import RecipeDetailPage from "../pages/RecipeDetailPage";
import MealPlannerPage from "../pages/MealPlannerPage";

function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("RecipeVault")).toBeInTheDocument(); });
    it("RecipeGridPage renders", () => { wrap(<RecipeGridPage />); expect(screen.getByText("My Recipes")).toBeInTheDocument(); });
    it("RecipeDetailPage renders", () => { wrap(<RecipeDetailPage />); expect(screen.getByText("Lemon Herb Chicken")).toBeInTheDocument(); });
    it("MealPlannerPage renders", () => { wrap(<MealPlannerPage />); expect(screen.getByText("Meal Planner")).toBeInTheDocument(); });
});
