
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ComponentCard } from "@/components/common/ComponentCard"; 
import { CategoryInfo } from "@/components/common/CategoryInfo";
import { searchComponents } from "@/data/components";
import { Component } from "@/types/components";

const ComponentsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredComponents, setFilteredComponents] = useState<Component[]>([]);

  useEffect(() => {
    setFilteredComponents(searchComponents(searchQuery, selectedCategory));
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
        
        {filteredComponents.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-lg font-medium mb-2">No components found</h3>
            <p className="text-muted-foreground">Try changing your search or filters</p>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {filteredComponents.map((component, index) => (
              <ComponentCard 
                key={component.id} 
                component={component} 
                index={index}
              />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ComponentsPage;
