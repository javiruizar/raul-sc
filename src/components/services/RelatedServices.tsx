import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/data/services";

export function RelatedServices({ currentId }: { currentId: string }) {
  const otherServices = services.filter((service) => service.id !== currentId);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          subtitle="Más Servicios"
          title="Otros trabajos que realizamos"
          centered
          className="mb-12"
        />
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherServices.map((service) => (
            <li key={service.id}>
              <Link
                href={`/servicios/${service.id}`}
                className="block h-full p-6 rounded-xl border border-neutral-200 hover:border-primary hover:shadow-md transition-all"
              >
                <span className="block font-heading font-semibold text-secondary mb-1">
                  {service.title}
                </span>
                <span className="block text-sm text-neutral-800/70">
                  {service.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
