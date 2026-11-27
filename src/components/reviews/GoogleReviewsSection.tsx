import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { getGoogleReviews } from "@/lib/google-reviews";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { GoogleReviewsData } from "@/types";
import { StarRating, formatRating } from "./StarRating";

// Sección de reseñas reales de Google. Server component: las reseñas van en el HTML.
// Si no hay datos (falta configuración o la API falla), no se muestra nada.
export async function GoogleReviewsSection({ className }: { className?: string }) {
  const data = await getGoogleReviews();
  if (!data || data.reviews.length === 0) return null;
  return <GoogleReviewsView data={data} className={className} />;
}

// Separada de la carga de datos para poder renderizarla con datos de prueba.
// Requisitos de Google: atribución visible, autor enlazado a su perfil y texto sin modificar
// (solo se recorta visualmente, con enlace para leerlo entero en Google).
export function GoogleReviewsView({ data, className }: { data: GoogleReviewsData; className?: string }) {
  const mapsUrl = data.mapsUrl ?? siteConfig.socials.googleBusiness;

  return (
    <section aria-labelledby="google-reviews-heading" className={cn("section-padding bg-neutral-50", className)}>
      <div className="container-custom">
        <SectionHeading
          id="google-reviews-heading"
          subtitle="Opiniones"
          title="Lo que dicen nuestros clientes en Google"
          centered
          className="mb-8"
        />

        {/* Resumen con la nota media y la atribución a Google */}
        <div className="mb-12 flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-3">
            <span className="font-heading text-4xl font-bold text-secondary">
              {formatRating(data.rating)}
            </span>
            <StarRating rating={data.rating} size="lg" />
          </div>
          <p className="text-neutral-800/80">
            {data.total} {data.total === 1 ? "reseña" : "reseñas"} en{" "}
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-secondary hover:text-primary">
              Google
            </a>
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.reviews.map((review, index) => (
            <li key={`${review.authorName}-${review.publishTime ?? index}`}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <div className="flex items-center gap-3">
                    {review.authorPhotoUrl ? (
                      <Image
                        src={review.authorPhotoUrl}
                        alt=""
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-white"
                      >
                        {review.authorName.charAt(0)}
                      </span>
                    )}
                    <div className="min-w-0">
                      {review.authorUrl ? (
                        <a
                          href={review.authorUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block truncate font-semibold text-secondary hover:text-primary"
                        >
                          {review.authorName}
                        </a>
                      ) : (
                        <span className="block truncate font-semibold text-secondary">{review.authorName}</span>
                      )}
                      <div className="flex items-center gap-2 text-xs text-neutral-800/60">
                        <StarRating rating={review.rating} />
                        {review.relativeTime && <span>{review.relativeTime}</span>}
                      </div>
                    </div>
                  </div>

                  <blockquote className="line-clamp-5 whitespace-pre-line text-neutral-800/90">
                    {review.text}
                  </blockquote>

                  <a
                    href={review.reviewUrl ?? mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark"
                  >
                    Leer en Google
                    <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                  </a>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-xs text-neutral-800/60">
          Reseñas publicadas en nuestra ficha de Google.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
              Ver todas las reseñas
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={data.writeReviewUrl ?? mapsUrl} target="_blank" rel="noopener noreferrer">
              Deja tu opinión
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
