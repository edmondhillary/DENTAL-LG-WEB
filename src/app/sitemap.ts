import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/site";
import { treatmentCatalog } from "@/data/treatment-catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://clinicadentallorenzogonzalez.es";

  const staticRoutes = [
    "",
    "/sobre-nosotros",
    "/tratamientos",
    "/precios",
    "/equipo",
    "/testimonios",
    "/antes-y-despues",
    "/blog",
    "/contacto",
    "/faq",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const treatmentRoutes = treatmentCatalog.map((treatment) => ({
    url: `${baseUrl}/tratamientos/${treatment.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...treatmentRoutes, ...blogRoutes];
}
