interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  withDivider?: boolean;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true, 
  withDivider = true 
}: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
      {withDivider && (
        <div className={`w-24 h-1 bg-secondary ${centered ? 'mx-auto' : ''} mb-6`}></div>
      )}
      {subtitle && (
        <p className={`text-lg ${centered ? 'max-w-3xl mx-auto' : ''}`}>{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
