
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">About UIarcade</h1>
          <p className="text-lg text-muted-foreground">
            The story behind our component library and the team that built it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose dark:prose-invert max-w-none"
        >
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p>
            UIarcade was created with a simple mission: to provide developers with beautiful, 
            accessible, and customizable UI components that make building modern web applications 
            faster and more enjoyable.
          </p>
          <p>
            We believe that great design should be accessible to everyone, regardless of their 
            design skills or resources. That's why we've built UIarcade to be easy to use, 
            highly customizable, and based on the best modern web technologies.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Principles</h2>
          <ul className="space-y-4 list-disc pl-5">
            <li>
              <strong>Accessibility First:</strong> Every component is designed with accessibility in mind, 
              following WAI-ARIA guidelines and best practices.
            </li>
            <li>
              <strong>Beautiful by Default:</strong> Components look great out of the box, with carefully 
              chosen defaults that work well together.
            </li>
            <li>
              <strong>Customizable:</strong> Easy to customize to match your brand and design requirements, 
              from simple color changes to complete visual overhauls.
            </li>
            <li>
              <strong>Developer Experience:</strong> Comprehensive documentation, TypeScript support, and 
              intuitive APIs make UIarcade a joy to use.
            </li>
            <li>
              <strong>Performance:</strong> Optimized for speed and efficiency, with minimal bundle size 
              and optimal rendering performance.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Technology Stack</h2>
          <p>
            UIarcade is built with modern web technologies:
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>React for component architecture</li>
            <li>TypeScript for type safety</li>
            <li>Tailwind CSS for styling</li>
            <li>Framer Motion for animations</li>
            <li>Shadcn UI for component foundation</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Open Source</h2>
          <p>
            UIarcade is open source and available under the MIT license. We believe in the power 
            of community-driven development and welcome contributions from developers around the world.
          </p>
          <p>
            Whether you're fixing a bug, improving documentation, or adding a new feature, your 
            contributions are welcome and appreciated.
          </p>

          <div className="mt-8 flex justify-center">
            <Button asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <span>View on GitHub</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Get Started</h2>
          <p>
            Ready to start using UIarcade in your projects? Check out our documentation to learn 
            how to install and use our components.
          </p>

          <div className="mt-6 flex justify-center">
            <Button asChild>
              <Link to="/docs">Read the Documentation</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
