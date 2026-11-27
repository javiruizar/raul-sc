import type { GoogleReview, GoogleReviewsData } from "@/types";

// Reseñas reales de la ficha de Google Business de Raúl, copiadas a mano.
// Cómo actualizarlo cuando entre una reseña nueva:
// 1. Sumar 1 a `total` y recalcular `rating` (la media que muestra la ficha).
// 2. Añadir la reseña arriba del todo (las más recientes primero).
// Normas:
// - El texto se pega TAL CUAL, sin corregir ni recortar (la web ya lo recorta visualmente).
// - Autor: nombre e inicial del apellido, por protección de datos.
// - `date` en formato "AAAA-MM" (mes de publicación). No poner "hace un mes": se queda viejo.
// - Las reseñas con `text` vacío no se muestran. Si ninguna tiene texto, la sección no aparece.
// - No añadir estas reseñas al JSON-LD (ver comentario en src/app/layout.tsx).
// Última revisión de la ficha: 2026-11-27 (5,0 de media, 3 reseñas).

interface StoredReview {
  authorName: string;
  rating: number;
  date: string; // "AAAA-MM"
  text: string;
}

const reviews: StoredReview[] = [
  {
    authorName: "Ignacio G.",
    rating: 5,
    date: "2026-10",
    text: "Muy contento con Raúl y su cuadrilla. Desde el principio se han preocupado por dejarlo todo lo mejor posible y que de precio fuera lo más controlado posible. Grandes profesionales, muy buen trato y unos acabados excelentes. Me reformaron la casa en la que vivo y no he podido terminar más contento con el resultado. Los recomiendo 100%\n",
  },
  {
    authorName: "Victoria G.",
    rating: 5,
    date: "2026-10",
    text: "Ahora tengo a Raúl en casa arreglando muchas cosas que hacían falta...quitando humedades, cambiando suelo estropeado, etc. Estoy muy agradecida. Lo resuelve todo rápido y de forma eficaz ...y sus trabajadores Manuel y Rafael son finos, limpios y educados. Super contenta!!!",
  },
  {
    authorName: "Fernando G.",
    rating: 5,
    date: "2026-10",
    text: "Me ha hecho una reforma en una casa de campo y no puedo estar mas contento. Raul es un albañil de primera y honrado a carta cabal.\n",
  },
];

// "2026-10" → "octubre de 2026"
function formatMonth(date: string) {
  const [year, month] = date.split("-").map(Number);
  return new Date(year, month - 1, 1).toLocaleDateString("es-ES", { month: "long", year: "numeric" });
}

export const googleReviews: GoogleReviewsData = {
  rating: 5,
  total: 3,
  // Sin `mapsUrl`: se usa siteConfig.socials.googleBusiness.
  // Enlace "Pedir reseñas" del Perfil de Empresa: abre directamente el formulario de reseña.
  writeReviewUrl: "https://g.page/r/CXT46H-5UZIYEBM/review",
  reviews: reviews.map(
    (review): GoogleReview => ({
      authorName: review.authorName,
      rating: review.rating,
      relativeTime: formatMonth(review.date),
      publishTime: review.date,
      text: review.text,
    })
  ),
};
