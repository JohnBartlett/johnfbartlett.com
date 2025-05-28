interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <div className="text-center mb-12 fade-in">
      <h1 className="text-4xl font-bold text-primary mb-4">{title}</h1>
      <div className="w-24 h-1 bg-secondary mx-auto"></div>
      {subtitle && (
        <p className="mt-6 text-lg max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default PageTitle;
