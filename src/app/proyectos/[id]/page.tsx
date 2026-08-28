import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProjectCarousel } from "./ProjectPageClient";
import { projects } from "@/data/projects";
import { MapPin, Calendar, ArrowRight, ArrowLeft } from "lucide-react";

const BASE_URL = "https://raul.javierruiz.org";

const categoryLabels: Record<string, string> = {
  reformas: "Reformas",
  albanileria: "Albañilería",
  restauracion: "Restauración",
  construccion: "Construcción",
  otros: "Otros",
};

// ---------------------------------------------------------------------------
// generateStaticParams — pre-renderiza todas las rutas en build time
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

// ---------------------------------------------------------------------------
// generateMetadata — metadatos dinámicos por proyecto
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return { title: "Proyecto no encontrado" };
  }

  const formattedDate = new Date(project.date + "-01").toLocaleDateString(
    "es-ES",
    { year: "numeric", month: "long" }
  );

  const locationSuffix = project.location
    ? ` en ${project.location}`
    : " en Los Pedroches";

  const title = `${project.title}${locationSuffix} | Raúl Sánchez Construcciones`;
  const description = `${project.description} Trabajo de ${categoryLabels[project.category] ?? project.category} realizado${locationSuffix} en ${formattedDate}. Raúl Sánchez Construcciones, albañil en Pozoblanco.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/proyectos/${project.id}`,
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/proyectos/${project.id}`,
      images: project.images.slice(0, 1).map((img) => ({
        url: img,
        width: 1200,
        height: 800,
        alt: `${project.title} — Raúl Sánchez Construcciones`,
      })),
    },
  };
}

// ---------------------------------------------------------------------------
// Page — Server Component
// ---------------------------------------------------------------------------
export default async function ProyectoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  const formattedDate = new Date(project.date + "-01").toLocaleDateString(
    "es-ES",
    { year: "numeric", month: "long" }
  );

  // Schema.org CreativeWork para el proyecto individual
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: project.images.map((img) =>
      img.startsWith("http") ? img : `${BASE_URL}${img}`
    ),
    dateCreated: project.date + "-01",
    ...(project.location && {
      locationCreated: {
        "@type": "Place",
        name: project.location,
        address: {
          "@type": "PostalAddress",
          addressLocality: project.location,
          addressRegion: "Córdoba",
          addressCountry: "ES",
        },
      },
    }),
    creator: {
      "@type": "Organization",
      "@id": "https://raul.javierruiz.org/#localbusiness",
      name: "Raúl Sánchez Construcciones",
      url: BASE_URL,
    },
    genre: categoryLabels[project.category] ?? project.category,
    url: `${BASE_URL}/proyectos/${project.id}`,
  };

  // BreadcrumbList — permite a Google mostrar el rich snippet de migas de pan en SERPs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Proyectos",
        item: `${BASE_URL}/proyectos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${BASE_URL}/proyectos/${project.id}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={projectSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero del proyecto */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary py-14 md:py-20">
        <div className="container-custom">
          <div>
            {/* Breadcrumb */}
            <nav aria-label="Migas de pan" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/70">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    href="/proyectos"
                    className="hover:text-white transition-colors"
                  >
                    Proyectos
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-white font-medium truncate max-w-[200px]">
                  {project.title}
                </li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-primary hover:bg-primary-dark">
                {categoryLabels[project.category]}
              </Badge>
              {project.location && (
                <span className="flex items-center text-white/80 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.location}
                </span>
              )}
              <span className="flex items-center text-white/80 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                {formattedDate}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Galería de imágenes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ProjectCarousel images={project.images} title={project.title} />

          {/* Detalles del proyecto */}
          <div className="mt-10 p-6 bg-neutral-50 border border-neutral-100 rounded-xl">
            <h2 className="font-heading font-semibold text-secondary mb-4 text-lg">
              Detalles del Proyecto
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>
                <dt className="text-neutral-500 mb-1">Categoría</dt>
                <dd className="font-medium text-secondary">
                  {categoryLabels[project.category]}
                </dd>
              </div>
              <div>
                <dt className="text-neutral-500 mb-1">Fecha de realización</dt>
                <dd className="font-medium text-secondary">{formattedDate}</dd>
              </div>
              {project.location && (
                <div>
                  <dt className="text-neutral-500 mb-1">Ubicación</dt>
                  <dd className="font-medium text-secondary">
                    {project.location}
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-neutral-500 mb-1">Imágenes</dt>
                <dd className="font-medium text-secondary">
                  {project.images.length} foto
                  {project.images.length !== 1 ? "s" : ""}
                </dd>
              </div>
            </dl>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="flex-1">
              <Link href="/presupuesto">
                Solicitar Presupuesto Similar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="flex-1">
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>

          {/* Volver */}
          <div className="mt-6">
            <Link
              href="/proyectos"
              className="inline-flex items-center text-sm text-neutral-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Ver todos los proyectos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
