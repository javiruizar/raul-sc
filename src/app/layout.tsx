import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
  metadataBase: new URL("https://www.raulsanchez.javierruiz.org"),
  title: "Raúl Albañil - Reformas y Albañilería en Los Pedroches",
  description:
    "Servicios profesionales de albañilería y reformas integrales en Los Pedroches. Especialistas en restauración de casas antiguas con más de 20 años de experiencia.",
  keywords: [
    "albañil",
    "reformas",
    "casas antiguas",
    "restauración",
    "construcción",
    "albañilería",
    "Los Pedroches",
    "Pozoblanco",
    "Córdoba"
  ],
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "Raúl Sanchez - Reformas y Construcción",
    description: "Servicios profesionales de albañilería y reformas integrales en Los Pedroches.",
    url: "https://www.raulsanchez.javierruiz.org",
    siteName: "Raúl Sanchez - Reformas y Construcción",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg", // Debes crear esta imagen en la carpeta public/images
        width: 1200,
        height: 630,
        alt: "Proyectos de reformas de Raúl Sánchez",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}