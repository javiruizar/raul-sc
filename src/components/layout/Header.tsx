"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { siteConfig } from "@/config/site";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
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
          <nav aria-label="Navegación principal" className="hidden md:flex md:items-center md:space-x-6">
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
            >
              <Phone className="h-4 w-4" />
              <span>{siteConfig.contact.phoneDisplay}</span> {/* Ej: 611 222 333 */}
            </a>
            <Button asChild>
              <Link href="/presupuesto">Solicitar Presupuesto</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-neutral-100 border-l border-neutral-200 shadow-2xl overflow-y-auto">              <nav className="flex flex-col space-y-4 mt-8">
              {navigation.map((item) => {
                if (item.name === "Servicios") {
                  return (
                    <div key={item.name} className="flex flex-col space-y-2">
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-neutral-800 transition-colors hover:text-primary"
                      >
                        {item.name}
                      </Link>
                      <div className="pl-4 flex flex-col space-y-2 border-l-2 border-neutral-200">
                        {servicesMenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="text-base font-normal text-neutral-600 transition-colors hover:text-primary"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-neutral-800 transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t">
                <a
                  href={`tel:${siteConfig.contact.phoneLink}`}
                  className="flex items-center space-x-2 text-sm text-neutral-800 hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center space-x-2 text-neutral-800 hover:text-primary mb-4"
                >
                  <Mail className="h-5 w-5" />
                  <span>{siteConfig.contact.email}</span>
                </a>
                <Button asChild className="w-full">
                  <Link href="/presupuesto" onClick={() => setIsOpen(false)}>
                    Solicitar Presupuesto
                  </Link>
                </Button>
              </div>
            </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
