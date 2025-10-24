import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    // Static routes
    route("/about", "routes/about.tsx"),
    route("/products", "routes/products.tsx"),
    route("/contact", "routes/contact.tsx"),
    route("/services", "routes/services.tsx"),

    // Product-specific static pages
    route("/products/server-cabinets", "routes/products/server-cabinets.tsx"),
    route("/products/security-cages", "routes/products/security-cages.tsx"),
    route("/products/aisle-containment", "routes/products/aisle-containment.tsx"),
    route("/products/cabinet-accessories", "routes/products/cabinet-accessories.tsx"),

    // 🧩 Dynamic route (MUST be last to avoid conflict with static ones)
    route("/solutions/:slug", "routes/solutions/[slug].tsx"),

] satisfies RouteConfig;
