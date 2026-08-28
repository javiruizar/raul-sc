import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

const BASE_URL = "https://raul.javierruiz.org";

// Fecha de referencia del último despliegue con cambios de contenido.
// Actualizar manualmente cuando se modifique contenido estático significativo.
// NO usar new Date() — causaría que Google vea cambios en cada build.
const LAST_CONTENT_UPDATE = new Date("2026-07-24");

export default function sitemap(): MetadataRoute.Sitemap {
  // Rutas estáticas principales
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/servicios`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      // /presupuesto: contenido mayormente formulario → priority reducida a 0.7
      url: `${BASE_URL}/presupuesto`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/proyectos`,
      lastModified: new Date(
        // lastModified del índice = fecha del proyecto más reciente
        projects
          .map((p) => new Date(p.date + "-01").getTime())
          .reduce((a, b) => Math.max(a, b), 0)
      ),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/sobre-nosotros`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    // Páginas legales — incluidas para que el crawler las encuentre fácilmente
    {
      url: `${BASE_URL}/aviso-legal`,
      lastModified: new Date("2026-07-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/privacidad`,
      lastModified: new Date("2026-07-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/cookies`,
      lastModified: new Date("2026-07-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  // Rutas dinámicas de servicios — generadas desde services.ts (DRY)
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/servicios/${service.id}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Rutas dinámicas de proyectos individuales
  // date tiene formato "YYYY-MM" → parseamos como primer día del mes (ISO válido)
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/proyectos/${project.id}`,
    lastModified: new Date(project.date + "-01"),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}