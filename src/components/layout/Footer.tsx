import Link from "next/link";
import Image from "next/image"; // Importado para el logo
import { Phone, Mail, MapPin, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";

const navigation = {
  servicios: services.map((service) => ({
    name: service.title,
    href: `/servicios/${service.id}`,
  })),
  empresa: [
    { name: "Sobre Nosotros", href: "/sobre-nosotros" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Contacto", href: "/contacto" },
    { name: "Presupuesto", href: "/presupuesto" },
  ],
  legal: [
    { name: "Aviso Legal", href: "/aviso-legal" },
    { name: "Política de Privacidad", href: "/privacidad" },
    { name: "Cookies", href: "/cookies" },
  ],
};

const socialLinks = [
  { name: "Google Reseñas", href: siteConfig.socials.googleBusiness, icon: Star },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Columna 1: Información de la empresa */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* Logo con el favicon sobre fondo blanco */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white overflow-hidden p-1.5 shadow-sm">
                <Image
                  src="/icons/favicon.webp"
                  alt={`Logo ${siteConfig.name}`}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-heading text-xl font-bold">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-neutral-100/80">
              Especialistas en reformas y restauración de casas antiguas. Más de
              20 años de experiencia transformando hogares.
            </p>
            <address className="space-y-2 not-italic">
              <a
                href={`tel:${siteConfig.contact.phoneLink}`}
                className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Pozoblanco y Los Pedroches</span> {/* Ubicación actualizada */}
              </div>
            </address>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">
              Servicios
            </h3>
            <nav aria-label="Navegación de servicios">
              <ul className="space-y-2">
                {navigation.servicios.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-neutral-100/80 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Columna 3: Empresa */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Empresa</h3>
            <nav aria-label="Navegación de empresa">
              <ul className="space-y-2">
                {navigation.empresa.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-neutral-100/80 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Columna 4: Horario y Redes Sociales */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">
              Horario de Atención
            </h3>
            <div className="space-y-2 text-sm text-neutral-100/80 mb-6">
              {siteConfig.hours.map((hours) => (
                <p key={hours.display}>{hours.display}</p>
              ))}
            </div>
            <h4 className="font-heading text-sm font-semibold mb-3">
              Síguenos
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-neutral-100/80 hover:text-primary transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}  
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-neutral-100/20" />

        {/* Copyright y Legal */}
        <div className="flex flex-col items-center justify-between space-y-4 text-sm text-neutral-100/80 md:flex-row md:space-y-0">
          <p>
            © {currentYear} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}