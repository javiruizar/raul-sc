"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { ProjectCategory } from "@/types";

const categories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "reformas", label: "Reformas" },
  { value: "albañileria", label: "Albañilería" },
  { value: "restauracion", label: "Restauración" },
  { value: "construccion", label: "Construcción" },
  { value: "otros", label: "Otros" },
];

interface ProjectFiltersProps {
  activeFilter: ProjectCategory | "all";
  onFilterChange: (filter: ProjectCategory | "all") => void;
  projectCount: number;
}

export function ProjectFilters({
  activeFilter,
  onFilterChange,
  projectCount,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={activeFilter === category.value ? "default" : "outline"}
            size="sm"
            onClick={() => onFilterChange(category.value)}
            className="transition-all duration-200"
          >
            {category.label}
          </Button>
        ))}
      </div>
      <Badge variant="secondary" className="text-sm">
        {projectCount} {projectCount === 1 ? "proyecto" : "proyectos"}
      </Badge>
    </div>
  );
}
