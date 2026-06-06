import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal e información sobre las condiciones de uso de la web.",
};

export default function AvisoLegalPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl mx-auto prose prose-neutral">
        <h1 className="text-3xl font-heading font-bold text-secondary mb-6">Aviso Legal</h1>
        <div className="space-y-4 text-neutral-800/80">
          <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se hace constar:</p>
          
          <h2 className="text-xl font-semibold text-secondary mt-8 mb-2">1. Datos identificativos</h2>
          <p>La empresa titular de esta página web es Raúl Sánchez Construcciones, con domicilio en Pozoblanco (Córdoba), España.</p>
          <p>Correo electrónico de contacto: contacto@raulalbanil.com</p>
          <p>Teléfono: 647 684 443</p>

          <h2 className="text-xl font-semibold text-secondary mt-8 mb-2">2. Usuarios</h2>
          <p>El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.</p>

          <h2 className="text-xl font-semibold text-secondary mt-8 mb-2">3. Uso del portal</h2>
          <p>Esta página web proporciona el acceso a multitud de informaciones, servicios o datos (en adelante, "los contenidos") en Internet pertenecientes a Raúl Sánchez Construcciones a los que el USUARIO pueda tener acceso.</p>
          
          <h2 className="text-xl font-semibold text-secondary mt-8 mb-2">4. Propiedad intelectual e industrial</h2>
          <p>Raúl Sánchez Construcciones es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.). Todos los derechos reservados.</p>
        </div>
      </div>
    </section>
  );
}
