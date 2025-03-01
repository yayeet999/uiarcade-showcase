
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Zap, Shield, Palette } from "lucide-react";

const features = [
  {
    title: "Beautiful Components",
    description: "Expertly crafted UI components that look great out of the box.",
    icon: <Layers className="h-10 w-10 text-primary" />,
  },
  {
    title: "Powered by Tailwind",
    description: "Built with Tailwind CSS for effortless customization and styling.",
    icon: <Palette className="h-10 w-10 text-primary" />,
  },
  {
    title: "Performance Focused",
    description: "Optimized for speed and performance without sacrificing quality.",
    icon: <Zap className="h-10 w-10 text-primary" />,
  },
  {
    title: "Accessibility First",
    description: "Every component is designed with accessibility in mind.",
    icon: <Shield className="h-10 w-10 text-primary" />,
  },
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter mb-4">
                Beautiful UI Components for <span className="text-gradient">React</span> Applications
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                A collection of high-quality React components built with Tailwind CSS and Shadcn UI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link to="/components">
                    Browse Components
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/docs">View Documentation</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-16 w-full max-w-5xl rounded-lg border border-border shadow-lg overflow-hidden"
            >
              <div className="w-full bg-card p-8 rounded-t-lg border-b">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-muted-foreground text-sm">Components Preview</div>
                </div>
              </div>
              <div className="p-4 sm:p-8 bg-muted/40 flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div 
                      key={i} 
                      className="bg-background rounded-lg border border-border p-4 aspect-[4/3] flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-full h-full bg-secondary/40 rounded flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Component {i}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              UIarcade comes packed with features that make building beautiful UIs easier than ever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
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
