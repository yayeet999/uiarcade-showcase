
import { getCategoryById } from "@/data/categories";
import { Badge } from "@/components/ui/badge";
import { Grid2X2, List, Grid } from "lucide-react"; 

interface CategoryInfoProps {
  categoryId: string;
}

export const CategoryInfo = ({ categoryId }: CategoryInfoProps) => {
  const category = getCategoryById(categoryId);
  
  if (!category) {
    return null;
  }
  
  // Determine the layout icon
  const getLayoutIcon = () => {
    switch (category.displayOptions?.layout) {
      case "list":
        return <List className="h-3 w-3 mr-1" />;
      case "compact":
        return <Grid className="h-3 w-3 mr-1" />;
      case "grid":
      default:
        return <Grid2X2 className="h-3 w-3 mr-1" />;
    }
  };
  
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold">{category.name}</h2>
      <p className="text-muted-foreground mt-1">{category.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Badge variant="outline" className="flex items-center">
          {getLayoutIcon()}
          {category.displayOptions?.layout || "grid"} view
        </Badge>
        
        <Badge variant="outline">
          {category.displayOptions?.itemsPerPage || 12} per page
        </Badge>
        
        {category.displayOptions?.showDescription !== undefined && (
          <Badge variant="outline">
            {category.displayOptions.showDescription ? "With" : "Without"} descriptions
          </Badge>
        )}
      </div>
    </div>
  );
};
