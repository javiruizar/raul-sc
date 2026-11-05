import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

const defaultOgImage = {
  url: "/og-image.webp",
  width: 1200,
  height: 630,
  alt: `${siteConfig.shortName}: albañil y reformas en Pozoblanco, Los Pedroches (Córdoba)`,
};

export const baseOpenGraph = {
  siteName: siteConfig.name,
  locale: "es_ES",
  type: "website" as const,
  images: [defaultOgImage],
};

interface PageMetadataOptions {
  // Título sin marca: la plantilla del layout añade la marca.
  title: string;
  description: string;
  path: string;
  image?: { url: string; width: number; height: number; alt: string };
}

// Next.js no fusiona `openGraph` entre layout y página: el de la página sustituye
// al del layout entero, y si no lo define hereda el título y la URL de la portada.
// Por eso cada página indexable lo declara completo con este helper.
export function pageMetadata({ title, description, path, image }: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...baseOpenGraph,
      title: `${title} | ${siteConfig.shortName}`,
      description,
      url,
      images: [image ?? defaultOgImage],
    },
  };
}
