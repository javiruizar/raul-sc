import type { GoogleReviewsData } from "@/types";
import { googleReviews } from "@/data/google-reviews";

// Reseñas reales del perfil de Google Business, copiadas a mano en src/data/google-reviews.ts.
// Se eligió así (2026-11-27) para que sea gratis y sin método de pago: Places API exige
// una cuenta de facturación. Sin reseñas con texto, la web no muestra la sección.
// Si algún día se activa la facturación, la versión con Places API está comentada abajo.
export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  // trim: al pegar el texto suele colarse un salto de línea final, que con
  // whitespace-pre-line dejaría una línea vacía en la tarjeta.
  const reviews = googleReviews.reviews
    .map((review) => ({ ...review, text: review.text.trim() }))
    .filter((review) => review.text.length > 0);
  if (!googleReviews.rating || !googleReviews.total || reviews.length === 0) return null;
  return { ...googleReviews, reviews };
}

// Solo la nota media y el total (para la insignia): no depende de que haya textos.
export async function getGoogleRating(): Promise<Pick<GoogleReviewsData, "rating" | "total" | "mapsUrl"> | null> {
  const { rating, total, mapsUrl } = googleReviews;
  return rating && total ? { rating, total, mapsUrl } : null;
}

// ---------------------------------------------------------------------------
// DESACTIVADO (2026-11-27): versión con Google Places API (New). Necesita
// GOOGLE_PLACES_API_KEY y GOOGLE_PLACE_ID, y facturación activa en Google Cloud.
// Para reactivarla: descomentar, quitar las funciones de arriba y el import de
// @/data/google-reviews, e importar también el tipo GoogleReview. En GoogleRatingBadge,
// volver a usar getGoogleReviews.
// ---------------------------------------------------------------------------
//
// // Reseñas reales del perfil de Google Business, vía Places API (New).
// // - Google devuelve como máximo 5 reseñas (las "más relevantes", elegidas por Google).
// // - Los términos de Google Maps Platform no permiten guardarlas de forma permanente
// //   ni modificarlas: se piden en el servidor con caché de 24 h y se muestran tal cual.
// // - La API key solo se usa en el servidor (sin prefijo NEXT_PUBLIC_).
// // - Si falta configuración o la API falla, devuelve null y la web no muestra la sección.
//
// const REVALIDATE_SECONDS = 60 * 60 * 24;
//
// // Forma (parcial) de la respuesta de GET https://places.googleapis.com/v1/places/{id}
// interface PlacesReview {
//   rating?: number;
//   relativePublishTimeDescription?: string;
//   publishTime?: string;
//   text?: { text?: string };
//   originalText?: { text?: string };
//   authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
//   googleMapsUri?: string;
// }
//
// interface PlacesResponse {
//   rating?: number;
//   userRatingCount?: number;
//   googleMapsUri?: string;
//   reviews?: PlacesReview[];
// }
//
// export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
//   const apiKey = process.env.GOOGLE_PLACES_API_KEY;
//   const placeId = process.env.GOOGLE_PLACE_ID;
//   if (!apiKey || !placeId) return null;
//
//   try {
//     const res = await fetch(
//       `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=es`,
//       {
//         headers: {
//           "X-Goog-Api-Key": apiKey,
//           "X-Goog-FieldMask": "rating,userRatingCount,reviews,googleMapsUri",
//         },
//         // Si varias secciones lo piden en la misma página, Next.js reutiliza la respuesta.
//         next: { revalidate: REVALIDATE_SECONDS },
//       }
//     );
//
//     if (!res.ok) {
//       console.error(
//         `Error al obtener las reseñas de Google (Places API ${res.status}):`,
//         await res.text()
//       );
//       return null;
//     }
//
//     const data = (await res.json()) as PlacesResponse;
//     if (!data.rating || !data.userRatingCount) return null;
//
//     const reviews: GoogleReview[] = (data.reviews ?? [])
//       .map((review) => ({
//         authorName: review.authorAttribution?.displayName ?? "Usuario de Google",
//         authorUrl: review.authorAttribution?.uri,
//         authorPhotoUrl: review.authorAttribution?.photoUri,
//         rating: review.rating ?? 0,
//         relativeTime: review.relativePublishTimeDescription ?? "",
//         publishTime: review.publishTime,
//         // originalText: el texto tal como lo escribió el autor, sin traducción automática.
//         text: review.originalText?.text ?? review.text?.text ?? "",
//         reviewUrl: review.googleMapsUri,
//       }))
//       // Google permite reseñas solo con estrellas; esas no aportan nada que leer.
//       .filter((review) => review.text.trim().length > 0);
//
//     return {
//       rating: data.rating,
//       total: data.userRatingCount,
//       mapsUrl: data.googleMapsUri,
//       writeReviewUrl: `https://search.google.com/local/writereview?placeid=${encodeURIComponent(placeId)}`,
//       reviews,
//     };
//   } catch (error) {
//     console.error("Error en la integración con Google Places (reseñas):", error);
//     return null;
//   }
// }
