import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Panel de administración privado (además lleva noindex)
      disallow: ["/admin", "/api/admin"],
    },
    sitemap: "https://raul.javierruiz.org/sitemap.xml",
  };
}
