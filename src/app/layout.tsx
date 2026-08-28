import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";

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
  metadataBase: new URL("https://raul.javierruiz.org"),
  title: {
    default: "Albañil en Pozoblanco · Reformas y Construcción en Los Pedroches | Raúl Sánchez",
    template: "%s | Raúl Sánchez Construcciones",
  },
  verification: {
    google: "rb8aGSb9nqhSL_M_GfiV29-R-CirCWfU0Am9kyhiV_4",
  },
  description:
    "Albañil en Pozoblanco con más de 20 años de experiencia. Reformas integrales, restauración de casas antiguas y construcción en Los Pedroches, Villanueva de Córdoba, Hinojosa del Duque y toda la comarca. Presupuesto gratis.",

  // 2. OPEN GRAPH (Para WhatsApp, Facebook, LinkedIn)
  openGraph: {
    title: "Albañil en Pozoblanco · Reformas y Construcción en Los Pedroches",
    description: "Albañil profesional en Pozoblanco y Los Pedroches. Reformas integrales, restauración de casas antiguas y construcción. Presupuesto gratuito y sin compromiso.",
    url: "https://raul.javierruiz.org",
    siteName: "Raúl Sánchez Construcciones",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Raúl Sánchez - Albañil y Reformas en Pozoblanco, Los Pedroches (Córdoba)",
      },
    ],
  },

  // 3. TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Albañil en Pozoblanco · Reformas en Los Pedroches | Raúl Sánchez",
    description: "Reformas integrales, restauración de casas antiguas y albañilería en Pozoblanco y toda la comarca de Los Pedroches. Más de 20 años de experiencia.",
    images: ["/og-image.webp"],
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
    "name": "Raúl Sánchez Construcciones",
    "url": "https://raul.javierruiz.org"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Raúl Sánchez Construcciones",
    "alternateName": "Raúl Albañil Pozoblanco",
    "description": "Albañil profesional en Pozoblanco con más de 20 años de experiencia. Especialistas en reformas integrales, restauración de casas antiguas y construcción en la comarca de Los Pedroches (Córdoba).",
    "image": "https://raul.javierruiz.org/og-image.webp",
    "url": "https://raul.javierruiz.org",
    "telephone": "+34617847211",
    // TODO: reemplazar por un email profesional del negocio (no personal)
    "email": "javiruizar@gmail.com",
    "address": {
      "@type": "PostalAddress",
      // TODO: completar con la dirección real de la empresa cuando esté disponible
      "streetAddress": "Pozoblanco",
      "addressLocality": "Pozoblanco",
      "addressRegion": "Córdoba",
      "postalCode": "14400",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.1855",
      "longitude": "-4.8495"
    },
    "hasMap": "https://maps.google.com/maps?q=Pozoblanco,Cordoba,Spain",
    "areaServed": [
      { "@type": "City", "name": "Pozoblanco" },
      { "@type": "City", "name": "Villanueva de Córdoba" },
      { "@type": "City", "name": "Hinojosa del Duque" },
      { "@type": "City", "name": "Alcaracejos" },
      { "@type": "City", "name": "Añora" },
      { "@type": "City", "name": "Dos Torres" },
      { "@type": "City", "name": "Pedroche" },
      { "@type": "City", "name": "El Viso" },
      { "@type": "City", "name": "Villaralto" },
      { "@type": "City", "name": "Belalcázar" },
      { "@type": "City", "name": "Cardeña" },
      { "@type": "City", "name": "Santa Eufemia" },
      { "@type": "City", "name": "Torrecampo" },
      { "@type": "City", "name": "Fuente la Lancha" },
      { "@type": "City", "name": "Guijo" },
      { "@type": "City", "name": "Conquista" },
      { "@type": "City", "name": "Venta del Charco" }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "38.1855",
        "longitude": "-4.8495"
      },
      "geoRadius": "30000"
    },
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Bank Transfer",
    // Reseñas individuales que respaldan el aggregateRating.
    // Google requiere reviews verificables para mostrar rich snippets de estrellas.
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "María González" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Raúl restauró nuestra casa rural del siglo XIX con un cuidado excepcional. Respetó cada detalle original mientras modernizaba las instalaciones. Un trabajo impecable.",
        "datePublished": "2024-03-01"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Carlos Martínez" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Profesionalidad y calidad en cada detalle. La reforma de nuestro baño superó todas nuestras expectativas. Muy recomendable.",
        "datePublished": "2024-02-01"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Ana Rodríguez" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "He trabajado con Raúl en varios proyectos de restauración. Su conocimiento de técnicas tradicionales y su atención al detalle son excepcionales.",
        "datePublished": "2024-01-01"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "José Luis Fernández" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Reformó nuestra cocina y el resultado es espectacular. Cumplió con los plazos y el presupuesto acordado. Un profesional de confianza.",
        "datePublished": "2023-12-01"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Laura Sánchez" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "La rehabilitación de la fachada de nuestro edificio fue un éxito total. Trabajo limpio, rápido y de gran calidad.",
        "datePublished": "2023-11-01"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "5"
    }
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