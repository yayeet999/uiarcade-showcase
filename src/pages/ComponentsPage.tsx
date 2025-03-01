
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";

// Sample component categories
const categories = [
  { id: "all", name: "All Components" },
  { id: "layout", name: "Layout" },
  { id: "forms", name: "Forms" },
  { id: "data-display", name: "Data Display" },
  { id: "navigation", name: "Navigation" },
  { id: "feedback", name: "Feedback" },
  { id: "surfaces", name: "Surfaces" },
];

// Sample components data
const components = [
  { id: 1, name: "Button", category: "forms", description: "Button component with multiple variants" },
  { id: 2, name: "Card", category: "surfaces", description: "Versatile card component for content" },
  { id: 3, name: "Input", category: "forms", description: "Input field with various states" },
  { id: 4, name: "Dropdown", category: "navigation", description: "Dropdown menu with customizable options" },
  { id: 5, name: "Modal", category: "feedback", description: "Modal dialog for important actions" },
  { id: 6, name: "Tabs", category: "navigation", description: "Tab interface for organized content" },
  { id: 7, name: "Table", category: "data-display", description: "Data table with sorting and pagination" },
  { id: 8, name: "Avatar", category: "data-display", description: "User avatar with various sizes" },
  { id: 9, name: "Toggle", category: "forms", description: "Toggle switch for boolean values" },
  { id: 10, name: "Alert", category: "feedback", description: "Alert messages for notifications" },
  { id: 11, name: "Progress", category: "feedback", description: "Progress indicators and bars" },
  { id: 12, name: "Tooltip", category: "feedback", description: "Contextual tooltips for elements" },
];

const ComponentsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredComponents = components.filter((component) => {
    const matchesCategory = selectedCategory === "all" || component.category === selectedCategory;
    const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          component.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
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

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <div className="sticky top-24">
            <div className="mb-6">
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
            
            <div className="space-y-1.5">
              <h3 className="text-sm font-medium mb-2 text-muted-foreground">Categories</h3>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "ghost"}
                  className="justify-start w-full"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-3/4">
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
              {filteredComponents.map((component) => (
                <motion.div key={component.id} variants={item}>
                  <Link to={`/components/${component.name.toLowerCase()}`} className="block h-full">
                    <Card className="h-full transition-all duration-300 hover:shadow-md">
                      <CardHeader>
                        <CardTitle>{component.name}</CardTitle>
                        <CardDescription>
                          {component.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-32 bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                          Component Preview
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm" className="ml-auto">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;
