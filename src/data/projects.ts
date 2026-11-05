import { Project } from "@/types";

// Los tres proyectos son partes de la misma obra: una casa de Pozoblanco.
export const projects: Project[] = [
  {
    id: "reforma-casa-rural-1",
    title: "Restauración de casa señorial de 1950",
    // El título completo con la ubicación no cabe en 60 caracteres.
    seoTitle: "Restauración de casa señorial en Pozoblanco",
    description:
      "Restauración de una casa de bóvedas de 1950 en Pozoblanco, deshabitada durante 10 años: instalaciones nuevas y elementos originales conservados.",
    category: "restauracion",
    images: [
      "/images/projects/restauracion-casa-senorial/1197.webp",
      "/images/projects/restauracion-casa-senorial/1196.webp",
      "/images/projects/restauracion-casa-senorial/1199.webp",
      "/images/projects/restauracion-casa-senorial/IMG_5112.webp",
      "/images/projects/restauracion-casa-senorial/IMG_5113.webp",
      "/images/projects/restauracion-casa-senorial/easquina-cocina-autonivelante.webp"
    ],
    date: "2026-07",
    location: "Pozoblanco",
    serviceIds: ["restauracion-casas-antiguas", "reformas-integrales"],
    story: [
      {
        heading: "Estado inicial",
        text: "La casa llevaba 10 años deshabitada y necesitaba modernizar sus instalaciones para adaptarse a la vida de una familia de hoy.",
      },
      {
        heading: "Qué hicimos",
        text: "Hicimos una reforma integral: renovamos las instalaciones, mantuvimos los elementos originales de la casa y recuperamos sus suelos hidráulicos, que combinamos con porcelánicos nuevos.",
      },
    ],
    materials: [
      "Suelos hidráulicos recuperados de la propia casa",
      "Porcelánicos nuevos",
      "Ventanas de PVC",
      "Puertas de madera maciza",
    ],
    duration: "2 años en total, por los plazos de otros proveedores. El trabajo de albañilería se hizo en 15 meses.",
    relatedProjectIds: ["reforma-de-tejado", "reforma-patio"],
  },
  {
    id: "reforma-patio",
    title: "Reforma de patio",
    description:
      "Ampliación del patio de una casa en Pozoblanco tras demoler una parte de la edificación de atrás.",
    category: "reformas",
    serviceIds: ["albanileria-general", "trabajos-piedra"],
    images: [
      "/images/projects/reforma-de-patio/1198.webp",
      "/images/projects/reforma-de-patio/desde-la-cascada.webp",
      "/images/projects/reforma-de-patio/IMG_9591.webp",
      "/images/projects/reforma-de-patio/patio-desde-puerta.webp",
      "/images/projects/reforma-de-patio/patio-y-cochera-desde-la-terraza.webp"],
    date: "2026-07",
    location: "Pozoblanco",
    story: [
      {
        heading: "Estado inicial",
        text: "En la parte de atrás de la casa había una parte de edificación que no se ha conservado.",
      },
      {
        heading: "Qué hicimos",
        text: "Demolimos esa parte de la edificación y ampliamos el patio que ya había. El patio tiene una gran pared de piedra.",
      },
    ],
    relatedProjectIds: ["reforma-casa-rural-1", "reforma-de-tejado"],
  },
  {
    id: "reforma-de-tejado",
    title: "Reforma de tejado",
    description:
      "Reforma estructural de un tejado con agujeros en Pozoblanco: mantuvimos las cerchas y cambiamos tablas y rollizos, con aislamiento y tejas nuevas.",
    category: "albanileria",
    serviceIds: ["fachadas-tejados"],
    images: [
      "/images/projects/restauracion-de-tejado/1201.webp",

    ],
    date: "2026-07",
    location: "Pozoblanco",
    story: [
      {
        heading: "Estado inicial",
        text: "El tejado de la casa tenía agujeros y había que intervenir en su estructura.",
      },
      {
        heading: "Qué hicimos",
        text: "Lo reformamos estructuralmente: mantuvimos las cerchas y cambiamos las tablas y los rollizos.",
      },
    ],
    materials: ["Tablas y rollizos nuevos", "Aislamiento", "Tejas nuevas"],
    duration: "1 mes.",
    relatedProjectIds: ["reforma-casa-rural-1", "reforma-patio"],
  },

];
