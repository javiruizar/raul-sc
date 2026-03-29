import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const navigation = {
  servicios: [
    { name: "Reformas Integrales", href: "/servicios#reformas" },
    { name: "Restauración", href: "/servicios#restauracion" },
    { name: "Albañilería", href: "/servicios#albanileria" },
    { name: "Baños y Cocinas", href: "/servicios#banos-cocinas" },
  ],
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
  { name: "Facebook", href: "https://facebook.com/[TU_PERFIL]", icon: Facebook },
  { name: "Instagram", href: "https://instagram.com/[TU_PERFIL]", icon: Instagram },
  { name: "LinkedIn", href: "https://linkedin.com/in/[TU_PERFIL]", icon: Linkedin },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Columna 1: Información de la empresa */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-white">RA</span>
              </div>
              <span className="font-heading text-xl font-bold">
                Raúl Albañil
              </span>
            </div>
            <p className="text-sm text-neutral-100/80">
              Especialistas en reformas y restauración de casas antiguas. Más de
              20 años de experiencia transformando hogares.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+34600000000"
                className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>600 000 000</span>
              </a>
              <a
                href="mailto:contacto@raulalbanil.com"
                className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>contacto@raulalbanil.com</span>
              </a>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Madrid y alrededores</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">
              Servicios
            </h3>
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
          </div>

          {/* Columna 3: Empresa */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Empresa</h3>
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
          </div>

          {/* Columna 4: Horario y Redes Sociales */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">
              Horario de Atención
            </h3>
            <div className="space-y-2 text-sm text-neutral-100/80 mb-6">
              <p>Lunes - Viernes: 8:00 - 18:00</p>
              <p>Sábados: 9:00 - 14:00</p>
              <p>Domingos: Cerrado</p>
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
            © {currentYear} Raúl Albañil. Todos los derechos reservados.
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
