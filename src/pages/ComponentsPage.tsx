
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
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

  // Determine layout classes based on category settings
  const getLayoutClasses = () => {
    switch (layout) {
      case "list":
        return "flex flex-col gap-4";
      case "compact":
        return "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4";
      case "grid":
      default:
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          UI Components
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Browse our collection of beautiful and functional UI components for your next project.
        </motion.p>
      </div>

      <div className="w-full">
        {/* Mobile search */}
        <div className="md:hidden mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search components..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {/* Desktop search */}
        <div className="hidden md:block mb-6">
          <div className="relative w-full max-w-sm mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search components..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <CategoryInfo categoryId={selectedCategory} />
        
        {currentComponents.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-lg font-medium mb-2">No components found</h3>
            <p className="text-muted-foreground">Try changing your search or filters</p>
          </div>
        ) : (
          <>
            <motion.div 
              className={getLayoutClasses()}
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
