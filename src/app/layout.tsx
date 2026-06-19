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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
  },

  keywords: [
    // Búsquedas por oficio + localidad
    "albañil Pozoblanco", "albañil Los Pedroches", "albañil Villanueva de Córdoba",
    "albañil Hinojosa del Duque", "albañil Córdoba",
    // Búsquedas por servicio + localidad
    "reformas Pozoblanco", "reformas integrales Los Pedroches",
    "reformas Villanueva de Córdoba", "reformas Hinojosa del Duque",
    "reformas Alcaracejos", "reformas Añora", "reformas Dos Torres",
    // Constructor
    "constructor Pozoblanco", "empresa construcción Pozoblanco",
    "empresa reformas Los Pedroches", "empresa construcción Los Pedroches",
    // Servicios específicos
    "restauración casas antiguas Pozoblanco", "rehabilitación vivienda Los Pedroches",
    "reformas cocinas Pozoblanco", "reformas baños Pozoblanco",
    "trabajos piedra Los Pedroches", "fachadas Pozoblanco",
    // Intención transaccional
    "presupuesto reformas Pozoblanco", "presupuesto albañil Los Pedroches",
    "presupuesto gratis reforma Córdoba",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Raúl Sánchez Construcciones",
    "url": "https://raul.javierruiz.org",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://raul.javierruiz.org/servicios",
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Raúl Sánchez Construcciones",
    "alternateName": "Raúl Albañil Pozoblanco",
    "description": "Albañil profesional en Pozoblanco con más de 20 años de experiencia. Especialistas en reformas integrales, restauración de casas antiguas y construcción en la comarca de Los Pedroches (Córdoba).",
    "image": "https://raul.javierruiz.org/og-image.png",
    "url": "https://raul.javierruiz.org",
    "telephone": "+34617847211",
    "email": "contacto@raulalbanil.com",
    "address": {
      "@type": "PostalAddress",
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