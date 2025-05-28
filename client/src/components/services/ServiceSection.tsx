import { ReactNode } from 'react';

interface ServiceSectionProps {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  listItems: string[];
  deliverable: string;
}

const ServiceSection = ({
  id,
  icon,
  title,
  subtitle,
  description,
  listItems,
  deliverable
}: ServiceSectionProps) => {
  return (
    <div id={id} className="mb-16">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-1 bg-primary p-8 text-white flex flex-col justify-center">
            <div className="mb-6">
              <i className={`${icon} text-4xl`}></i>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
            <p>{subtitle}</p>
          </div>
          <div className="md:col-span-2 p-8">
            <p className="mb-4">{description}</p>
            <ul className="space-y-2 mb-6">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-2"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 bg-neutral-light rounded-lg">
              <p className="font-semibold">Deliverable:</p>
              <p>{deliverable}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
