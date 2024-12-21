interface PageHeaderProps {
  title: string;
  description: string;
  category?: string;
}

export const PageHeader = ({ title, description, category }: PageHeaderProps) => {
  return (
    <div className="page-header">
      {category && <div className="category-chip">{category}</div>}
      <h1 className="page-title">{title}</h1>
      <p className="page-description">{description}</p>
    </div>
  );
};