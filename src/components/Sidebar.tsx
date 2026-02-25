import { Link, useLocation } from "react-router-dom";
import { BookOpen, UtensilsCrossed, CalendarDays } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
    const loc = useLocation();
    const links = [
        { to: "/", icon: BookOpen, label: "My Recipes" },
        { to: "/recipe", icon: UtensilsCrossed, label: "View Recipe" },
        { to: "/planner", icon: CalendarDays, label: "Meal Planner" }
    ];
    const categories = ["🥗 Salads", "🍝 Pasta", "🍲 Soups", "🍰 Desserts", "🥘 Stews"];
    return (<aside style={{ width: "var(--sidebar-width)", background: "var(--color-bg-card)", borderRight: "1px solid var(--color-border)", height: "100vh", position: "fixed", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "var(--space-5)", display: "flex", alignItems: "center", gap: "var(--space-3)", borderBottom: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: "28px" }}>📖</div>
            <div>
                <strong className="serif" style={{ fontSize: "22px" }}>RecipeVault</strong>
                <div style={{ fontSize: "11px", color: "var(--color-text-tertiary)", fontWeight: 600 }}>Your Kitchen Companion</div>
            </div>
        </div>

        <nav style={{ padding: "var(--space-3)", display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
            {links.map(l => <Link key={l.to} to={l.to} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "10px 14px", borderRadius: "var(--radius-md)", color: loc.pathname === l.to ? "var(--color-accent-primary)" : "var(--color-text-secondary)", background: loc.pathname === l.to ? "var(--color-accent-soft)" : "transparent", fontWeight: loc.pathname === l.to ? 700 : 500, fontSize: "14px", transition: "all var(--transition-fast)" }}><l.icon size={18} />{l.label}</Link>)}
        </nav>

        <div style={{ padding: "var(--space-3) var(--space-5)", flex: 1 }}>
            <h3 style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: "var(--space-3)" }}>Categories</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {categories.map(c => <div key={c} style={{ padding: "6px 10px", fontSize: "14px", color: "var(--color-text-secondary)", borderRadius: "var(--radius-sm)", cursor: "pointer", fontWeight: 500 }}>{c}</div>)}
            </div>
        </div>

        <div style={{ padding: "var(--space-4)", borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-secondary)" }}>24 recipes</span>
            <ThemeToggle />
        </div>
    </aside>);
}
