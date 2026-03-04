import { Search, Clock, Star, Plus, Filter } from "lucide-react";
import { Button, Card, Input, Badge } from "@geenius-ui/react-css";

export default function RecipeGridPage() {
    const recipes = [
        { title: "Lemon Herb Chicken", time: "45 min", rating: 4.8, category: "Mains", emoji: "🍗", difficulty: "Easy" },
        { title: "Thai Basil Fried Rice", time: "20 min", rating: 4.5, category: "Asian", emoji: "🍚", difficulty: "Easy" },
        { title: "Mushroom Risotto", time: "60 min", rating: 4.9, category: "Italian", emoji: "🍄", difficulty: "Medium" },
        { title: "Avocado Toast Deluxe", time: "10 min", rating: 4.2, category: "Breakfast", emoji: "🥑", difficulty: "Easy" },
        { title: "Beef Bourguignon", time: "2.5 hrs", rating: 5.0, category: "French", emoji: "🥩", difficulty: "Hard" },
        { title: "Chocolate Lava Cake", time: "30 min", rating: 4.7, category: "Dessert", emoji: "🍫", difficulty: "Medium" }
    ];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <div>
                <h1 className="serif" style={{ fontSize: "var(--font-size-2xl)", marginBottom: 4 }}>My Recipes</h1>
                <p style={{ color: "var(--color-text-secondary)" }}>Your personal cookbook collection.</p>
            </div>
            <Button variant="primary" icon={<Plus size={16} />}>Add Recipe</Button>
        </div>

        <div style={{ display: "flex", gap: "var(--space-3)", marginBottom: "var(--space-6)" }}>
            <div style={{ flex: 1, position: "relative" }}>
                <Search size={18} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--color-text-tertiary)", zIndex: 1 }} />
                <Input type="text" placeholder="Search your recipes…" style={{ width: "100%", paddingLeft: 44 }} />
            </div>
            <Button variant="outline" icon={<Filter size={16} />}>Filter</Button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "var(--space-5)" }}>
            {recipes.map((r, i) => (
                <Card key={i} padding="none" hover>
                    <div style={{ height: 180, background: "var(--color-bg-tertiary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "64px" }}>{r.emoji}</div>
                    <div style={{ padding: "var(--space-5)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-2)" }}>
                            <h3 className="serif" style={{ fontSize: "20px" }}>{r.title}</h3>
                            <Badge variant="default" size="sm">{r.difficulty}</Badge>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--color-text-tertiary)", fontSize: "13px", fontWeight: 600 }}>
                            <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Clock size={14} /> {r.time}</span>
                            <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Star size={14} fill="var(--color-warning)" style={{ color: "var(--color-warning)" }} /> {r.rating}</span>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    </div>);
}
