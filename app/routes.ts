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
    route("/products/wallboxes", "routes/products/wallboxes.tsx"),
    route("/products/retrofit-solutions", "routes/products/retrofit-solutions.tsx"),
    route("/products/micro-data-centre", "routes/products/micro-data-centre.tsx"),
    route("/products/electromechanical-solutions", "routes/products/electromechanical-solutions.tsx"),


    // 🧩 Dynamic route (MUST be last to avoid conflict with static ones)
    route("/solutions/:slug", "routes/solutions/[slug].tsx"),

] satisfies RouteConfig;
