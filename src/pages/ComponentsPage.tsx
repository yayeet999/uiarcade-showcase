
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ComponentCard } from "@/components/common/ComponentCard"; 
import { CategoryInfo } from "@/components/common/CategoryInfo";
import { searchComponents } from "@/data/components";
import { Component } from "@/types/components";
import { getCategoryById } from "@/data/categories";
import { Pagination } from "@/components/common/Pagination";

const ComponentsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredComponents, setFilteredComponents] = useState<Component[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  const category = getCategoryById(selectedCategory);
  const itemsPerPage = category?.displayOptions?.itemsPerPage || 12;
  const layout = category?.displayOptions?.layout || "grid";
  
  // Calculate pagination
  const totalComponents = filteredComponents.length;
  const totalPages = Math.ceil(totalComponents / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalComponents);
  const currentComponents = filteredComponents.slice(startIndex, endIndex);
  
  useEffect(() => {
    setFilteredComponents(searchComponents(searchQuery, selectedCategory));
    setCurrentPage(1); // Reset to first page when search or category changes
  }, [searchQuery, selectedCategory]);

  // Listen for category selection events from the Navbar
  useEffect(() => {
    const handleCategoryChange = (event: CustomEvent) => {
      setSelectedCategory(event.detail);
    };
    
    const handleSearchQueryChange = (event: CustomEvent) => {
      setSearchQuery(event.detail);
    };
    
    window.addEventListener('categorySelected', handleCategoryChange as EventListener);
    window.addEventListener('searchQueryChanged', handleSearchQueryChange as EventListener);
    
    return () => {
      window.removeEventListener('categorySelected', handleCategoryChange as EventListener);
      window.removeEventListener('searchQueryChanged', handleSearchQueryChange as EventListener);
    };
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Get grid columns based on category
  const getGridColumns = (categoryId: string) => {
    const baseClasses = "grid gap-6 w-full";
    const mobileClass = "grid-cols-1";
    const tabletClass = "md:grid-cols-2";
    
    const categoryColumns: Record<string, string> = {
      all: "lg:grid-cols-4",
      forms: "lg:grid-cols-3",
      buttons: "lg:grid-cols-4",
      cards: "lg:grid-cols-4",
      images: "lg:grid-cols-3",
      inputs: "lg:grid-cols-4",
      loaders: "lg:grid-cols-4",
      others: "lg:grid-cols-4"
    };

    return `${baseClasses} ${mobileClass} ${tabletClass} ${categoryColumns[categoryId] || categoryColumns.all}`;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="w-full">
        <CategoryInfo categoryId={selectedCategory} />
        
        {currentComponents.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-lg font-medium mb-2">No components found</h3>
            <p className="text-muted-foreground">Try changing your search or filters</p>
          </div>
        ) : (
          <>
            <motion.div 
              className={getGridColumns(selectedCategory)}
              variants={container}
              initial="hidden"
              animate="show"
            >
              {currentComponents.map((component, index) => (
                <ComponentCard 
                  key={component.id} 
                  component={component} 
                  index={index}
                  layout={layout}
                  showDescription={category?.displayOptions?.showDescription}
                />
              ))}
            </motion.div>
            
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ComponentsPage;
