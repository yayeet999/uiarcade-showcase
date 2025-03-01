
import { getCategoryById } from "@/data/categories";

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
    </div>
  );
};
