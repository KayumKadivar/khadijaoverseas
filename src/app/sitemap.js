import { products } from "@/data/products";

export default async function sitemap() {
  const baseUrl = "https://www.khadijaexim.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/industries",
    "/contact",
    "/quality",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic products routes
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes];
}
