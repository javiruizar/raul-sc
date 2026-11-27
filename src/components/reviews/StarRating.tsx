import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

// Estrellas de 0 a 5. La media se redondea a media estrella.
export function StarRating({
  rating,
  size = "sm",
  className,
}: {
  rating: number;
  size?: "sm" | "lg";
  className?: string;
}) {
  const rounded = Math.round(rating * 2) / 2;
  const box = size === "lg" ? "h-6 w-6" : "h-4 w-4";

  return (
    <span
      role="img"
      aria-label={`${rating.toLocaleString("es-ES", { maximumFractionDigits: 1 })} de 5 estrellas`}
      className={cn("inline-flex items-center gap-0.5", className)}
    >
      {[1, 2, 3, 4, 5].map((n) => {
        const fill = rounded >= n ? "full" : rounded >= n - 0.5 ? "half" : "empty";
        return (
          <span key={n} className={cn("relative inline-block", box)} aria-hidden="true">
            <Star className={cn("absolute inset-0 text-neutral-300", box)} />
            {fill !== "empty" && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: fill === "half" ? "50%" : "100%" }}
              >
                <Star className={cn("fill-accent text-accent", box)} />
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
}

export function formatRating(rating: number) {
  return rating.toLocaleString("es-ES", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}
