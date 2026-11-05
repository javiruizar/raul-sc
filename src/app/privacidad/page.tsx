import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y protección de datos.",
  alternates: {
    canonical: "https://raul.javierruiz.org/privacidad",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacidadPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl mx-auto prose prose-neutral">
        <h1 className="text-3xl font-heading font-bold text-secondary mb-6">Política de Privacidad</h1>
        <div className="space-y-4 text-neutral-800/80">
          <p>El responsable del tratamiento de los datos es Raúl Sánchez Calero ({siteConfig.name}). Sus datos completos figuran en el <Link href="/aviso-legal" className="text-primary hover:underline">aviso legal</Link>. Garantiza la privacidad de los datos de carácter personal aportados, de acuerdo con el Reglamento General de Protección de Datos (RGPD).</p>

          <h2 className="text-xl font-semibold text-secondary mt-8 mb-2">1. Recogida, finalidad y tratamientos de datos</h2>
          <p>El responsable tiene el deber de informar a los usuarios de su sitio web acerca de la recogida de datos de carácter personal que pueden llevarse a cabo, bien sea mediante el envío de correo electrónico o al cumplimentar los formularios incluidos en el sitio web.</p>
          <p>La finalidad del tratamiento de los datos recabados contempla: La atención de solicitudes realizadas por los usuarios, la inclusión en la agenda de contactos y la prestación de servicios de elaboración de presupuestos.</p>

          <h2 className="text-xl font-semibold text-secondary mt-8 mb-2">2. Comunicación de información a terceros</h2>
          <p>Los datos personales no se ceden a terceras organizaciones, salvo obligación legal.</p>
          <p>Para prestar el servicio se utilizan proveedores que tratan los datos por cuenta del responsable: Vercel (alojamiento de la web), Google (almacenamiento de las solicitudes en Google Sheets), Cloudinary (almacenamiento de los archivos adjuntos) y Resend (envío de correos electrónicos).</p>

          <h2 className="text-xl font-semibold text-secondary mt-8 mb-2">3. Derechos de los usuarios</h2>
          <p>Mientras sus datos sean objeto de tratamiento, los usuarios podrán ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de acuerdo con lo previsto en la normativa vigente en materia de protección de datos personales.</p>
          <p>Para ejercer estos derechos, el usuario deberá dirigirse mediante comunicación escrita a la siguiente dirección de correo electrónico: {siteConfig.contact.email}. También puede presentar una reclamación ante la Agencia Española de Protección de Datos.</p>
        </div>
      </div>
    </section>
  );
}

