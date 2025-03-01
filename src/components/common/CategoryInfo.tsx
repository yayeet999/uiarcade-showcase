
import { getCategoryById } from "@/data/categories";
import { Badge } from "@/components/ui/badge";
import { ComponentCategory } from "@/types/components";

interface CategoryInfoProps {
  categoryId: string;
}

export const CategoryInfo = ({ categoryId }: CategoryInfoProps) => {
  const category = getCategoryById(categoryId);
  
  if (!category) {
    return null;
  }
  
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold">{category.name}</h2>
      <p className="text-muted-foreground mt-1">{category.description}</p>
      <div className="mt-3">
        <Badge variant="outline">
          {category.displayOptions?.layout || "grid"} view
        </Badge>
      </div>
    </div>
  );
};
