import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { baseOpenGraph } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Albañil en Pozoblanco y Los Pedroches | ${siteConfig.shortName}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  verification: {
    google: "rb8aGSb9nqhSL_M_GfiV29-R-CirCWfU0Am9kyhiV_4",
  },
  description:
    "Albañil en Pozoblanco con más de 20 años de experiencia. Reformas integrales y restauración de casas antiguas en Los Pedroches. Presupuesto gratis.",

  // 2. OPEN GRAPH (Para WhatsApp, Facebook, LinkedIn)
  openGraph: {
    ...baseOpenGraph,
    title: `Albañil en Pozoblanco y Los Pedroches | ${siteConfig.shortName}`,
    description: "Albañil en Pozoblanco con más de 20 años de experiencia. Reformas integrales y restauración de casas antiguas en Los Pedroches. Presupuesto gratis.",
    url: siteConfig.url,
  },

  // 3. TWITTER CARD: el título y la descripción se toman del Open Graph de cada página.
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // SearchAction eliminado: la URL destino no acepta query params reales.
  // Volver a añadirlo solo cuando exista funcionalidad de búsqueda implementada.
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": siteConfig.url
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": siteConfig.businessId,
    "name": siteConfig.name,
    "description": "Albañil profesional en Pozoblanco con más de 20 años de experiencia. Especialistas en reformas integrales, restauración de casas antiguas y construcción en la comarca de Los Pedroches (Córdoba).",
    "image": `${siteConfig.url}/og-image.webp`,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phoneLink,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      // Sin calle a propósito: no se atiende al público en ningún local.
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.province,
      "postalCode": siteConfig.address.postalCode,
      "addressCountry": siteConfig.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.geo.latitude,
      "longitude": siteConfig.geo.longitude
    },
    "hasMap": siteConfig.socials.googleBusiness,
    "sameAs": [siteConfig.socials.googleBusiness],
    "areaServed": siteConfig.serviceAreas.map((name) => ({ "@type": "City", name })),
    "knowsAbout": [
      "Reformas integrales en Pozoblanco",
      "Restauración de casas antiguas en Los Pedroches",
      "Albañilería general en Córdoba",
      "Rehabilitación de viviendas en Los Pedroches",
      "Reformas de baños en Pozoblanco",
      "Reformas de cocinas en Pozoblanco",
      "Trabajos de piedra en Los Pedroches",
      "Fachadas y revocos en Pozoblanco",
      "Construcción en Los Pedroches"
    ],
    "openingHoursSpecification": siteConfig.hours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.days,
      "opens": hours.opens,
      "closes": hours.closes
    })),
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    // Reviews y aggregateRating eliminados.
    // Google requiere reviews verificables (p.ej. Google Business Profile).
    // Añadir reviews aquí sin fuente verificable puede provocar una acción manual
    // o que Google ignore completamente los rich snippets de estrellas.
    // TODO: Volver a añadir cuando haya reseñas reales en Google Business Profile.
  };

  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased flex min-h-screen flex-col">
        <JsonLd data={websiteSchema} />
        <JsonLd data={localBusinessSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
