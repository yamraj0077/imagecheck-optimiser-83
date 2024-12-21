import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
}

export const ToolCard = ({ title, description, icon, to }: ToolCardProps) => {
  return (
    <Link to={to} className="tool-card group">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-muted-foreground">{description}</p>
      <div className="absolute bottom-6 right-6 text-muted-foreground transition-transform group-hover:translate-x-1">
        <ArrowRight size={20} />
      </div>
    </Link>
  );
};