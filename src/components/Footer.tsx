import { Link } from "react-router-dom";
import { Github, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About</h3>
            <p className="text-sm text-muted-foreground">
              Free online tools to help you with your daily tasks. Easy to use and completely free.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/pdf-tools" className="text-sm text-muted-foreground hover:text-primary">PDF Tools</Link></li>
              <li><Link to="/image-tools" className="text-sm text-muted-foreground hover:text-primary">Image Tools</Link></li>
              <li><Link to="/text-tools" className="text-sm text-muted-foreground hover:text-primary">Text Tools</Link></li>
              <li><Link to="/media-tools" className="text-sm text-muted-foreground hover:text-primary">Media Tools</Link></li>
              <li><Link to="/dev-tools" className="text-sm text-muted-foreground hover:text-primary">Developer Tools</Link></li>
              <li><Link to="/qr-tools" className="text-sm text-muted-foreground hover:text-primary">QR Tools</Link></li>
              <li><Link to="/utilities" className="text-sm text-muted-foreground hover:text-primary">Utilities</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Free Online Tools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};