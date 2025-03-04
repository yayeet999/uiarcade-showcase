import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import InfiniteScrollGrid from "@/components/common/InfiniteScrollGrid";

// Define keyframes for the grid animations
const gridAnimationKeyframes = `
@keyframes gridPulse {
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
}

@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}
`;

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  // Track scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* Inject keyframes */}
      <style>{gridAnimationKeyframes}</style>
      
      {/* Hero Section */}
      <section className="py-20 pb-6 relative overflow-hidden">
        {/* Retro Grid Background */}
        <div className="absolute inset-0 z-0">
          {/* Gradient overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-70"
            style={{
              transform: `translateY(${scrollY * 0.15}px)`,
            }}
          />
          
          {/* Main grid */}
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: `
                linear-gradient(to right, hsla(var(--primary), 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, hsla(var(--primary), 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              backgroundPosition: 'center center',
              transform: `perspective(1000px) rotateX(20deg) translateY(${scrollY * 0.2}px)`,
              transformOrigin: 'center top',
              boxShadow: 'inset 0 0 30px hsla(var(--primary), 0.2)',
              animation: 'gridPulse 4s ease-in-out infinite',
            }}
          />
          
          {/* Secondary grid (smaller) */}
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(to right, hsla(var(--primary), 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, hsla(var(--primary), 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '10px 10px',
              backgroundPosition: 'center center',
              transform: `perspective(1000px) rotateX(20deg) translateY(${scrollY * 0.1}px)`,
              transformOrigin: 'center top',
              opacity: 0.5,
              animation: 'gridPulse 3s ease-in-out infinite',
            }}
          />
          
          {/* Glow effect */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(circle at 50% 50%, hsla(var(--primary), 0.4) 0%, transparent 70%)',
              filter: 'blur(40px)',
              animation: 'gridPulse 5s ease-in-out infinite',
            }}
          />
          
          {/* Horizontal scan line effect */}
          <div 
            className="absolute inset-0 overflow-hidden opacity-10"
            style={{
              background: 'linear-gradient(to bottom, transparent, transparent 50%, hsla(var(--primary), 0.5) 50%, transparent 51%)',
              backgroundSize: '100% 8px',
              animation: 'scanline 10s linear infinite',
              pointerEvents: 'none',
            }}
          />
        </div>
        
        <div className="container px-4 mx-auto relative z-10">
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

            <form onSubmit={handleSearch} className="mb-0">
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

      {/* Infinite Scroll Grid Section */}
      <InfiniteScrollGrid />

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
