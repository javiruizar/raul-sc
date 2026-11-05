import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Información sobre el uso de cookies en nuestra página web.",
  alternates: {
    canonical: "https://raul.javierruiz.org/cookies",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function CookiesPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl mx-auto prose prose-neutral">
        <h1 className="text-3xl font-heading font-bold text-secondary mb-6">Política de Cookies</h1>
        <div className="space-y-4 text-neutral-800/80">
          <p>En esta página explicamos qué son las cookies y cuáles pueden instalarse al visitar la web de {siteConfig.name}.</p>

          <h2 className="text-xl font-semibold text-secondary mt-8 mb-2">¿Qué es una cookie?</h2>
          <p>Una &quot;cookie&quot; es una pequeña cantidad de texto que se almacena en tu navegador (como Chrome de Google o Safari de Apple) cuando navegas por la mayoría de los sitios web.</p>

          <h2 className="text-xl font-semibold text-secondary mt-8 mb-2">¿Qué tipo de cookies utiliza esta página web?</h2>
          <p>Esta web no utiliza cookies propias de análisis ni de publicidad.</p>
          <p><strong>Cookies de terceros:</strong> las páginas con un mapa incorporan Google Maps, y Google puede instalar sus propias cookies al cargarlo. Puedes consultar su uso en la política de privacidad de Google.</p>

          <h2 className="text-xl font-semibold text-secondary mt-8 mb-2">¿Cómo puedo gestionar las cookies?</h2>
          <p>Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador.</p>
        </div>
      </div>
    </section>
  );
}
