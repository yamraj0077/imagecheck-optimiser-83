import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  FileText,
  Image as ImageIcon,
  Type,
  Video,
  Code,
  QrCode,
  Settings,
  Wrench,
} from "lucide-react";

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

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Settings className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">Free Online Tools</span>
        </Link>
        <div className="ml-auto flex space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary",
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};