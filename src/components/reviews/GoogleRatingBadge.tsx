import { getGoogleRating } from "@/lib/google-reviews";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { StarRating, formatRating } from "./StarRating";

// Insignia compacta "★ 4,9 · 23 reseñas en Google" que enlaza a la ficha de Google.
// `dark`: para fondos oscuros (los heros con fondo secondary).
export async function GoogleRatingBadge({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const data = await getGoogleRating();
  if (!data) return null;

  return (
    <a
      href={data.mapsUrl ?? siteConfig.socials.googleBusiness}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
        variant === "dark"
          ? "bg-white/10 text-white hover:bg-white/20"
          : "bg-white text-secondary shadow-sm hover:bg-neutral-50",
        className
      )}
    >
      <StarRating rating={data.rating} />
      <span>{formatRating(data.rating)}</span>
      <span className={variant === "dark" ? "text-white/80" : "text-neutral-800/70"}>
        · {data.total} {data.total === 1 ? "reseña" : "reseñas"} en Google
      </span>
    </a>
  );
}
