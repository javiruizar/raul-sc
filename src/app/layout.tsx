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
  // Asegúrate de que esta URL sea la definitiva de tu web
  metadataBase: new URL("https://raul.javierruiz.org"),
  title: {
    default: "Raúl Sánchez · Reformas y Construcción en Los Pedroches",
    template: "%s | Raúl Sánchez Construcciones",
  },
  verification: {
    google: "rb8aGSb9nqhSL_M_GfiV29-R-CirCWfU0Am9kyhiV_4",
  },
  description:
    "Servicios profesionales de albañilería y reformas integrales en Los Pedroches. Especialistas en restauración de casas antiguas con más de 20 años de experiencia.",
  
  // 2. OPEN GRAPH (Para WhatsApp, Facebook, LinkedIn)
  openGraph: {
    title: "Raúl Sánchez - Reformas y Construcción",
    description: "Servicios profesionales de albañilería y reformas integrales en Los Pedroches.",
    url: "https://raul.javierruiz.org",
    siteName: "Raúl Sánchez",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.png", // WhatsApp busca esta imagen en la raíz de public/
        width: 1200,
        height: 630,
        alt: "Raúl Sánchez - Reformas y Construcción en Los Pedroches",
      },
    ],
  },

  // 3. TWITTER CARD (Para X/Twitter y previsualizaciones modernas)
  twitter: {
    card: "summary_large_image",
    title: "Raúl Sánchez - Reformas y Construcción",
    description: "Especialistas en restauración de casas antiguas y reformas integrales.",
    images: ["/og-image.png"],
  },

  keywords: [
    "albañil", "reformas", "casas antiguas", "restauración", "construcción", 
    "albañilería", "Los Pedroches", "Pozoblanco", "Córdoba"
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
    "url": "https://raul.javierruiz.org"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Raúl Sánchez Construcciones",
    "image": "https://raul.javierruiz.org/og-image.png",
    "url": "https://raul.javierruiz.org",
    "telephone": "+34647684443",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pozoblanco",
      "addressRegion": "Córdoba",
      "addressCountry": "ES"
    },
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