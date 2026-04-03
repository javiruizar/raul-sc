import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        centered && "text-center mx-auto flex flex-col items-center", // Añadido flex y centrado de items
        className
      )}
    >
      {subtitle && (
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          {subtitle}
        </p>
      )}
      <h2 className="font-heading text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg text-neutral-800/80 max-w-2xl",
          centered && "mx-auto text-center" // Asegura que la caja y el texto se centren
        )}>
          {description}
        </p>
      )}
    </div>
  );
}