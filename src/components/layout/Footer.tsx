
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">UIarcade</h3>
            <p className="text-muted-foreground text-sm">
              Beautiful UI components crafted with Tailwind CSS.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-muted-foreground">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/components" className="text-sm hover:text-primary transition-colors">
                  Components
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-sm hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-sm hover:text-primary transition-colors">
                  Guides
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-muted-foreground">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-muted-foreground">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-sm hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm hover:text-primary transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/license" className="text-sm hover:text-primary transition-colors">
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} UIarcade. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex items-center space-x-4">
            <a href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="https://discord.com" className="text-muted-foreground hover:text-primary transition-colors">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
