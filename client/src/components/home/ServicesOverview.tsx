import { Link } from 'wouter';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 transform hover:-translate-y-1 duration-300">
    <div className="rounded-full bg-primary bg-opacity-10 w-16 h-16 flex items-center justify-center mb-4">
      <i className={`${icon} text-2xl text-primary`}></i>
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="mb-4">{description}</p>
    <a 
      href={link} 
      className="text-secondary hover:text-primary-light font-medium flex items-center"
    >
      Learn More
      <i className="fas fa-arrow-right ml-2 text-sm"></i>
    </a>
  </div>
);

const ServicesOverview = () => {
  const services = [
    {
      icon: "fas fa-clipboard-check",
      title: "AI Readiness Assessment",
      description: "Evaluate your organization's capabilities, data infrastructure, and identify high-value AI opportunities.",
      link: "/services#services-assessment"
    },
    {
      icon: "fas fa-route",
      title: "Strategic AI Roadmapping",
      description: "Create a comprehensive AI strategy aligned with your business objectives and implementation timeline.",
      link: "/services#services-strategy"
    },
    {
      icon: "fas fa-code",
      title: "Custom AI Solution Development",
      description: "Develop tailored AI solutions addressing your unique business challenges and opportunities.",
      link: "/services#services-implementation"
    },
    {
      icon: "fas fa-network-wired",
      title: "Implementation & Integration",
      description: "Seamlessly integrate AI solutions with your existing systems and modernize infrastructure as needed.",
      link: "/services#services-integration"
    },
    {
      icon: "fas fa-headset",
      title: "Ongoing Advisory Support",
      description: "Receive continuous guidance, optimization, and updates to maximize your AI investment over time.",
      link: "/services#services-advisory"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
