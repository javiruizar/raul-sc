import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y protección de datos.",
};

export default function PrivacidadPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl mx-auto prose prose-neutral">
        <h1 className="text-3xl font-heading font-bold text-secondary mb-6">Política de Privacidad</h1>
        <div className="space-y-4 text-neutral-800/80">
          <p>Raúl Sánchez Construcciones garantiza la privacidad de los datos de carácter personal aportados, de acuerdo con el Reglamento General de Protección de Datos (RGPD).</p>
          
          <h2 className="text-xl font-semibold text-secondary mt-8 mb-2">1. Recogida, finalidad y tratamientos de datos</h2>
          <p>Raúl Sánchez Construcciones tiene el deber de informar a los usuarios de su sitio web acerca de la recogida de datos de carácter personal que pueden llevarse a cabo, bien sea mediante el envío de correo electrónico o al cumplimentar los formularios incluidos en el sitio web.</p>
          <p>La finalidad del tratamiento de los datos recabados contempla: La atención de solicitudes realizadas por los usuarios, la inclusión en la agenda de contactos y la prestación de servicios de elaboración de presupuestos.</p>

          <h2 className="text-xl font-semibold text-secondary mt-8 mb-2">2. Comunicación de información a terceros</h2>
          <p>Raúl Sánchez Construcciones informa a los usuarios de que sus datos personales no serán cedidos a terceras organizaciones, con la salvedad de que dicha cesión de datos esté amparada en una obligación legal.</p>

          <h2 className="text-xl font-semibold text-secondary mt-8 mb-2">3. Derechos de los usuarios</h2>
          <p>En tanto en cuanto los datos del usuario son objeto de tratamiento por parte de Raúl Sánchez Construcciones, los usuarios podrán ejercer los derechos de acceso, rectificación, cancelación y oposición de acuerdo con lo previsto en la normativa legal vigente en materia de protección de datos personales.</p>
          <p>Para ejercer estos derechos, el usuario deberá dirigirse mediante comunicación escrita a la siguiente dirección de correo electrónico: contacto@raulalbanil.com.</p>
        </div>
      </div>
    </section>
  );
}
