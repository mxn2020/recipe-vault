import { ShoppingCart, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button, Card } from "@geenius-ui/react-css";

export default function MealPlannerPage() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const meals: Record<string, { breakfast: string; lunch: string; dinner: string }> = {
        Monday: { breakfast: "Avocado Toast 🥑", lunch: "Chicken Salad 🥗", dinner: "Mushroom Risotto 🍄" },
        Tuesday: { breakfast: "Oatmeal & Berries 🫐", lunch: "Thai Fried Rice 🍚", dinner: "Lemon Chicken 🍗" },
        Wednesday: { breakfast: "Smoothie Bowl 🍓", lunch: "Soup & Bread 🍲", dinner: "Beef Bourguignon 🥩" },
        Thursday: { breakfast: "", lunch: "Pasta Primavera 🍝", dinner: "" },
        Friday: { breakfast: "", lunch: "", dinner: "Fish Tacos 🌮" },
        Saturday: { breakfast: "", lunch: "", dinner: "" },
        Sunday: { breakfast: "", lunch: "", dinner: "" }
    };

    return (<div style={{ padding: "var(--space-6)", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <div>
                <h1 className="serif" style={{ fontSize: "var(--font-size-2xl)", marginBottom: 4 }}>Meal Planner</h1>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                    <Button variant="outline" size="sm" icon={<ChevronLeft size={16} />} />
                    <span style={{ fontWeight: 600, color: "var(--color-text-secondary)" }}>Oct 26 – Nov 1, 2026</span>
                    <Button variant="outline" size="sm" icon={<ChevronRight size={16} />} />
                </div>
            </div>
            <Button variant="primary" icon={<ShoppingCart size={16} />}>Generate Shopping List</Button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "var(--space-3)" }}>
            {days.map(day => (
                <Card key={day} padding="none" className="meal-day-card">
                    <div style={{ padding: "var(--space-3) var(--space-4)", borderBottom: "1px solid var(--color-border)", fontWeight: 700, fontSize: "14px", textAlign: "center", background: day === "Wednesday" ? "var(--color-accent-soft)" : "transparent", color: day === "Wednesday" ? "var(--color-accent-primary)" : "var(--color-text-primary)" }}>
                        {day.slice(0, 3)}
                    </div>
                    <div style={{ padding: "var(--space-3)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                        {(["breakfast", "lunch", "dinner"] as const).map(meal => (
                            <div key={meal}>
                                <div style={{ fontSize: "10px", fontWeight: 700, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>{meal}</div>
                                {meals[day]?.[meal] ? (
                                    <div style={{ fontSize: "13px", fontWeight: 600, padding: "6px 8px", background: "var(--color-bg-secondary)", borderRadius: "var(--radius-sm)" }}>{meals[day][meal]}</div>
                                ) : (
                                    <Button variant="ghost" size="sm" icon={<Plus size={12} />} className="meal-add-btn" />
                                )}
                            </div>
                        ))}
                    </div>
                </Card>
            ))}
        </div>
    </div>);
}
