import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/components?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate("/components");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Beautiful UI Components
              <br />
              Built for React
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A collection of modern, accessible, and customizable UI components
              that help you build better applications faster.
            </p>

            <form onSubmit={handleSearch} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xl mx-auto">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search components..."
                    className="pl-10 h-12 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit" size="lg" className="group">
                  <Link to="/components" className="flex items-center">
                    Browse Components
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to build beautiful UIs?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get started with UIarcade today and create stunning applications with ease.
            </p>
            <Button asChild size="lg">
              <Link to="/components">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
