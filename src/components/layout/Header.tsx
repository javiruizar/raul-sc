import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { MobileMenu } from "./MobileMenu";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Sobre Nosotros", href: "/sobre-nosotros" },
  { name: "Contacto", href: "/contacto" },
];

const servicesMenu = [
  { name: "Reformas Integrales", href: "/servicios/reformas-integrales" },
  { name: "Restauración Casas", href: "/servicios/restauracion-casas-antiguas" },
  { name: "Albañilería General", href: "/servicios/albanileria-general" },
  { name: "Baños y Cocinas", href: "/servicios/reformas-banos-cocinas" },
  { name: "Fachadas y Tejados", href: "/servicios/fachadas-tejados" },
  { name: "Trabajos en Piedra", href: "/servicios/trabajos-piedra" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" aria-label="Ir a la página de inicio de Construcciones y Reformas Raúl Sánchez">
            <div className="relative h-12 w-12 overflow-hidden rounded-lg">
              <Image
                src="/icons/favicon.ico"
                alt="Logo Raúl Sánchez"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-xl font-bold text-secondary">
                Raúl Sánchez
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Navegación principal de escritorio" className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => {
              if (item.name === "Servicios") {
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-neutral-800 transition-colors hover:text-primary py-4 flex items-center"
                    >
                      {item.name}
                    </Link>
                    <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-neutral-200 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="py-2">
                        {servicesMenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-neutral-800 transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href={`tel:${siteConfig.contact.phoneLink}`}
              className="flex items-center space-x-2 text-sm text-neutral-800 hover:text-primary"
              aria-label="Llamar por teléfono"
            >
              <Phone className="h-4 w-4" />
              <span>{siteConfig.contact.phoneDisplay}</span> {/* Ej: 611 222 333 */}
            </a>
            <Button asChild>
              <Link href="/presupuesto">Solicitar Presupuesto</Link>
            </Button>
          </div>

          {/* Mobile Menu Component */}
          <MobileMenu navigation={navigation} servicesMenu={servicesMenu} />
        </div>
      </div>
    </header>
  );
}
