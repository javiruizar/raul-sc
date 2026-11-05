import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export function RelatedProjects({ serviceId }: { serviceId: string }) {
  const relatedProjects = projects.filter((project) => project.serviceIds.includes(serviceId));

  if (relatedProjects.length === 0) {
    return (
      <section className="py-12 bg-neutral-50 border-t border-neutral-200">
        <div className="container-custom text-center">
          <p className="text-neutral-800/80">
            Pronto subiremos proyectos realizados de este servicio. Permanece atento a la web y, mientras tanto,{" "}
            <Link href="/proyectos" className="text-primary font-semibold hover:underline">
              mira nuestros otros proyectos
            </Link>
            .
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <SectionHeading
          subtitle="Trabajos Reales"
          title="Proyectos relacionados"
          centered
          className="mb-12"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
