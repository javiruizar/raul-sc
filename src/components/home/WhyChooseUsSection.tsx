import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function WhyChooseUsSection() {
  return (
    <section aria-labelledby="why-choose-heading" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-neutral-800/80 max-w-2xl mx-auto">
            Ofrecemos los mejores acabados y el mejor servicio
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Experiencia Comprobada</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Más de 25 años realizando proyectos de reforma y restauración de casas
                antiguas completas
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Calidad garantizada</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Utilizamos materiales de primera calidad y técnicas
                tradicionales. Proyectos realizados visitables.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Compromiso Total</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Cumplimos plazos, rematamos con cuidado y mantenemos una
                comunicación constante.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}