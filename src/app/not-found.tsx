import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Construction, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center py-24 bg-neutral-50 min-h-[70vh]">
      <div className="container-custom flex flex-col items-center text-center max-w-2xl mx-auto px-4">
        <div className="bg-primary/10 p-6 rounded-full mb-8">
          <Construction className="h-16 w-16 text-primary" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
          ¡Zona en construcción!
        </h1>
        
        <p className="text-xl text-neutral-800/70 mb-8">
          Error 404: Parece que te has perdido. La página que estás buscando no existe, ha sido movida o está actualmente en obras.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <Button asChild size="lg" className="text-lg">
            <Link href="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Volver al Inicio
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg bg-white hover:bg-neutral-100">
            <Link href="/contacto">
              Contactar con nosotros
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
