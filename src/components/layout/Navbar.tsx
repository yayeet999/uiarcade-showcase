import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import { motion } from "framer-motion";
import { categories, getOrderedCategories } from "@/data/categories";
import { Input } from "@/components/ui/input";

const navLinks = [
  { name: "Components", path: "/components" },
  { name: "Documentation", path: "/docs" },
  { name: "About", path: "/about" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const location = useLocation();
  const isComponentsPage = location.pathname === "/components";
  const orderedCategories = getOrderedCategories();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle category selection and dispatch event for ComponentsPage to listen to
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const event = new CustomEvent('categorySelected', { detail: categoryId });
    window.dispatchEvent(event);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link 
              to="/"
              className="flex items-center space-x-2"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="font-bold text-2xl text-primary"
              >
                <span>UI</span>
                <span className="text-foreground">arcade</span>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={location.pathname === link.path ? "default" : "ghost"}
                  className="transition-all duration-200"
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Category Navigation (Only on Components page) */}
      {isComponentsPage && !mobileMenuOpen && (
        <div className="hidden md:block border-t border-border">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center space-x-2 overflow-x-auto">
              {orderedCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handleCategorySelect(category.id)}
                  className="whitespace-nowrap"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-b border-border"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Main navigation links */}
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="block">
                  <Button
                    variant={location.pathname === link.path ? "default" : "ghost"}
                    className="w-full justify-start"
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>
            
            {/* Categories section - only on components page */}
            {isComponentsPage && (
              <div className="space-y-2 pt-2 border-t border-border">
                <h3 className="text-sm font-medium px-3 text-muted-foreground">Categories</h3>
                <div className="space-y-1">
                  {orderedCategories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => handleCategorySelect(category.id)}
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile search - only on components page */}
            {isComponentsPage && (
              <div className="pt-2 border-t border-border">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search components..."
                    className="pl-10"
                    onChange={(e) => {
                      // Dispatch a custom event for the search query
                      const event = new CustomEvent('searchQueryChanged', { 
                        detail: e.target.value 
                      });
                      window.dispatchEvent(event);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </header>
  );
};
