"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Sobre Nosotros", href: "/sobre-nosotros" },
  { name: "Contacto", href: "/contacto" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-xl font-bold text-white">RA</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-xl font-bold text-secondary">
                Raúl Sanchez Calero
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-neutral-800 transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="tel:+34600000000"
              className="flex items-center space-x-2 text-sm text-neutral-800 hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              <span>600 000 000</span>
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-neutral-800 transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <a
                    href="tel:+34600000000"
                    className="flex items-center space-x-2 text-neutral-800 hover:text-primary mb-4"
                  >
                    <Phone className="h-5 w-5" />
                    <span>600 000 000</span>
                  </a>
                  <a
                    href="mailto:contacto@raulalbanil.com"
                    className="flex items-center space-x-2 text-neutral-800 hover:text-primary mb-4"
                  >
                    <Mail className="h-5 w-5" />
                    <span>contacto@raulalbanil.com</span>
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
