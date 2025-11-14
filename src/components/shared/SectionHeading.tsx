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
        centered && "text-center mx-auto max-w-3xl",
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
        <p className="text-lg text-neutral-800/80 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
