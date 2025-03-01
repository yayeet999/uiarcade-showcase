import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} UIarcade</div>
          <div className="flex items-center gap-4">
            <Link to="/components" className="hover:text-primary transition-colors">Components</Link>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}; 