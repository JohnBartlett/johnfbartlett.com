interface IndustrySectionProps {
  id: string;
  title: string;
  description: string;
  applications: string[];
  caseExample: string;
  image: string;
  imageAlt: string;
  isReversed?: boolean;
}

const IndustrySection = ({
  id,
  title,
  description,
  applications,
  caseExample,
  image,
  imageAlt,
  isReversed = false
}: IndustrySectionProps) => {
  return (
    <div id={id} className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className={isReversed ? "order-2 lg:order-1" : ""}>
          {!isReversed && (
            <img 
              src={image} 
              alt={imageAlt} 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          )}
          {isReversed && (
            <>
              <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
              <p className="mb-4">{description}</p>
              <p className="mb-6">Key applications include:</p>
              <ul className="space-y-2 mb-6">
                {applications.map((app, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-2"></i>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-neutral-light rounded-lg">
                <p className="font-semibold">Case Example:</p>
                <p>{caseExample}</p>
              </div>
            </>
          )}
        </div>
        <div className={isReversed ? "order-1 lg:order-2" : ""}>
          {isReversed && (
            <img 
              src={image} 
              alt={imageAlt} 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          )}
          {!isReversed && (
            <>
              <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
              <p className="mb-4">{description}</p>
              <p className="mb-6">Key applications include:</p>
              <ul className="space-y-2 mb-6">
                {applications.map((app, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-2"></i>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-neutral-light rounded-lg">
                <p className="font-semibold">Case Example:</p>
                <p>{caseExample}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndustrySection;
