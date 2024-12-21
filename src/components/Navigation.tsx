import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import {
  FileText,
  Image as ImageIcon,
  Type,
  Video,
  Code,
  QrCode,
  Settings,
  Wrench,
  Menu,
  X,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navigation = [
  { name: "PDF Tools", href: "/pdf-tools", icon: FileText },
  { name: "Image Tools", href: "/image-tools", icon: ImageIcon },
  { name: "Text Tools", href: "/text-tools", icon: Type },
  { name: "Media Tools", href: "/media-tools", icon: Video },
  { name: "Dev Tools", href: "/dev-tools", icon: Code },
  { name: "QR Tools", href: "/qr-tools", icon: QrCode },
  { name: "Utilities", href: "/utilities", icon: Wrench },
];

export const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Settings className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">Free Online Tools</span>
        </Link>

        {isMobile ? (
          <>
            <button
              onClick={toggleMenu}
              className="p-2 text-muted-foreground hover:text-primary focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="fixed inset-0 top-16 z-50">
                <div className="absolute inset-0 bg-background/95 backdrop-blur-md">
                  <div className="container py-6 px-4">
                    <div className="flex flex-col space-y-3">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={toggleMenu}
                          className={cn(
                            "flex items-center space-x-3 rounded-lg p-3 text-base font-medium transition-colors hover:bg-accent",
                            location.pathname.startsWith(item.href)
                              ? "bg-accent text-accent-foreground"
                              : "text-muted-foreground"
                          )}
                        >
                          <item.icon className="h-5 w-5" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary",
                  location.pathname.startsWith(item.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};