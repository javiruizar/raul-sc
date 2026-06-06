import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Información sobre el uso de cookies en nuestra página web.",
};

export default function CookiesPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl mx-auto prose prose-neutral">
        <h1 className="text-3xl font-heading font-bold text-secondary mb-6">Política de Cookies</h1>
        <div className="space-y-4 text-neutral-800/80">
          <p>En esta web recopilamos y utilizamos la información según indicamos en nuestra política de privacidad. Una de las formas en las que recopilamos información es a través del uso de la tecnología llamada &quot;cookies&quot;. En Raúl Sánchez Construcciones, utilizamos cookies para varias cosas.</p>
          
          <h2 className="text-xl font-semibold text-secondary mt-8 mb-2">¿Qué es una cookie?</h2>
          <p>Una &quot;cookie&quot; es una pequeña cantidad de texto que se almacena en tu navegador (como Chrome de Google o Safari de Apple) cuando navegas por la mayoría de los sitios web.</p>

          <h2 className="text-xl font-semibold text-secondary mt-8 mb-2">¿Qué tipo de cookies utiliza esta página web?</h2>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Cookies técnicas:</strong> Son las más elementales y permiten, entre otras cosas, saber cuándo está navegando un humano o una aplicación automatizada.</li>
            <li><strong>Cookies de análisis:</strong> Recogen información sobre el tipo de navegación que estás realizando, las secciones que más utilizas, productos consultados, franja horaria de uso, idioma, etc.</li>
          </ul>

          <h2 className="text-xl font-semibold text-secondary mt-8 mb-2">¿Cómo puedo gestionar las cookies?</h2>
          <p>Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador.</p>
        </div>
      </div>
    </section>
  );
}
