import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/about", "routes/about.tsx"),
    route("/products", "routes/products.tsx"),
    route("/contact", "routes/contact.tsx"),
    route("/services", "routes/services.tsx"),
    route("/products/server-cabinets", "routes/products/server-cabinets.tsx"),
    route("/products/security-cages", "routes/products/security-cages.tsx"),
    route("/products/aisle-containment", "routes/products/aisle-containment.tsx"),
] satisfies RouteConfig;
