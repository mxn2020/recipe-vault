import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    recipes: defineTable({ title: v.string(), emoji: v.string(), time: v.string(), difficulty: v.string(), rating: v.number(), category: v.string() }),
    ingredients: defineTable({ recipeId: v.id("recipes"), name: v.string(), quantity: v.string(), unit: v.optional(v.string()) }).index("by_recipe", ["recipeId"]),
    mealPlans: defineTable({ date: v.string(), meal: v.string(), recipeId: v.id("recipes") }).index("by_date", ["date"])
});
