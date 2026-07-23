"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";

interface NavItem {
  name: string;
  href: string;
}

interface MobileMenuProps {
  navigation: NavItem[];
  servicesMenu: NavItem[];
}

export function MobileMenu({ navigation, servicesMenu }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú de navegación</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-neutral-100 border-l border-neutral-200 shadow-2xl overflow-y-auto">
        <nav className="flex flex-col space-y-4 mt-8" aria-label="Navegación móvil">
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
              aria-label="Llamar por teléfono"
            >
              <Phone className="h-4 w-4" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center space-x-2 text-neutral-800 hover:text-primary mb-4"
              aria-label="Enviar un correo electrónico"
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
  );
}
