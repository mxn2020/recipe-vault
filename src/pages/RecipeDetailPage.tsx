import { Clock, Users, Star, Printer, Heart, Share2 } from "lucide-react";
import { Button, Badge } from "@geenius-ui/react-css";

export default function RecipeDetailPage() {
    const ingredients = ["400g chicken breast", "2 lemons (juiced & zested)", "3 tbsp olive oil", "4 cloves garlic, minced", "2 tsp dried oregano", "1 tsp dried thyme", "Salt & pepper to taste", "Fresh parsley, chopped"];
    const steps = ["Preheat oven to 200°C (400°F).", "In a bowl, mix lemon juice, zest, olive oil, garlic, oregano, thyme, salt, and pepper.", "Place chicken in a baking dish and pour the marinade over it. Let it marinate for at least 15 minutes.", "Bake for 25-30 minutes until internal temp reaches 74°C (165°F).", "Let rest for 5 minutes, then garnish with parsley and serve."];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-6)" }}>
            <div>
                <Badge variant="default" size="sm">Mains · Easy</Badge>
                <h1 className="serif" style={{ fontSize: "var(--font-size-2xl)", marginTop: 4, marginBottom: "var(--space-2)" }}>Lemon Herb Chicken</h1>
                <div style={{ display: "flex", gap: "var(--space-5)", color: "var(--color-text-secondary)", fontSize: "14px", fontWeight: 600 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Clock size={16} /> 45 min</span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Users size={16} /> 4 servings</span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Star size={16} fill="var(--color-warning)" style={{ color: "var(--color-warning)" }} /> 4.8</span>
                </div>
            </div>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <Button variant="ghost" size="sm" icon={<Heart size={16} />} />
                <Button variant="ghost" size="sm" icon={<Share2 size={16} />} />
                <Button variant="ghost" size="sm" icon={<Printer size={16} />} />
            </div>
        </div>

        <div style={{ height: 280, background: "var(--color-bg-tertiary)", borderRadius: "var(--radius-lg)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "80px", marginBottom: "var(--space-6)" }}>🍗</div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "var(--space-6)" }}>
            <div>
                <h2 className="serif" style={{ fontSize: "20px", marginBottom: "var(--space-4)" }}>Ingredients</h2>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                    {ingredients.map((ing, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", fontSize: "15px" }}>
                            <div style={{ width: 20, height: 20, borderRadius: 4, border: "2px solid var(--color-border-strong)", flexShrink: 0, cursor: "pointer" }}></div>
                            {ing}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2 className="serif" style={{ fontSize: "20px", marginBottom: "var(--space-4)" }}>Instructions</h2>
                <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-5)", counterReset: "step" }}>
                    {steps.map((step, i) => (
                        <li key={i} style={{ display: "flex", gap: "var(--space-4)" }}>
                            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--color-accent-soft)", color: "var(--color-accent-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "14px", flexShrink: 0 }}>{i + 1}</div>
                            <p style={{ fontSize: "16px", lineHeight: 1.6, paddingTop: 4 }}>{step}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    </div>);
}
