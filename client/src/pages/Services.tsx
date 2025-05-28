import { useEffect } from 'react';
import PageTitle from '@/components/shared/PageTitle';
import ServiceSection from '@/components/services/ServiceSection';

const Services = () => {
  useEffect(() => {
    // Update page title
    document.title = "Services | JF Bartlett & Associates";
    
    // Scroll to section if URL has hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const services = [
    {
      id: "services-assessment",
      icon: "fas fa-clipboard-check",
      title: "AI Readiness Assessment",
      subtitle: "The foundation for any successful AI implementation",
      description: "Before implementing AI solutions, organizations need to understand their current capabilities, limitations, and opportunities. Our comprehensive AI Readiness Assessment evaluates your:",
      listItems: [
        "Data infrastructure and quality",
        "Technical environment and integration points",
        "Organizational processes and workflows",
        "Team capabilities and knowledge gaps",
        "Potential high-value AI use cases"
      ],
      deliverable: "A detailed report identifying your organization's AI readiness, prioritized opportunities, and recommended next steps."
    },
    {
      id: "services-strategy",
      icon: "fas fa-route",
      title: "AI Strategy Development",
      subtitle: "Your roadmap to AI-powered business transformation",
      description: "Successful AI implementation requires a clear roadmap aligned with business objectives. Our AI Strategy Development service creates a customized plan for leveraging AI within your organization:",
      listItems: [
        "Business goal alignment and prioritization",
        "Use case identification and evaluation",
        "Implementation sequencing and dependencies",
        "Required resources and capabilities",
        "ROI modeling and success metrics"
      ],
      deliverable: "A comprehensive AI strategy and implementation roadmap tailored to your business objectives."
    },
    {
      id: "services-implementation",
      icon: "fas fa-code",
      title: "Custom AI Solution Implementation",
      subtitle: "Purpose-built AI for your unique business challenges",
      description: "When off-the-shelf AI products don't address your unique business challenges, our team develops custom AI solutions designed for your specific needs:",
      listItems: [
        "Custom LLM development with proprietary data",
        "Computer vision systems for quality control or safety",
        "Predictive analytics models for operational optimization",
        "Natural language processing for document analysis",
        "Process automation with intelligent decision-making"
      ],
      deliverable: "Fully implemented custom AI solution integrated with your existing systems."
    },
    {
      id: "services-integration",
      icon: "fas fa-network-wired",
      title: "AI Integration & Infrastructure Modernization",
      subtitle: "Building the technical foundation for AI success",
      description: "AI implementations often require updates to existing infrastructure and integration with legacy systems. Our team:",
      listItems: [
        "Assesses current infrastructure capabilities",
        "Develops modernization roadmaps",
        "Implements cloud migrations when beneficial",
        "Creates secure data pipelines and processing workflows",
        "Ensures seamless integration with existing operations"
      ],
      deliverable: "Modernized infrastructure and integrated systems supporting AI capabilities."
    },
    {
      id: "services-advisory",
      icon: "fas fa-headset",
      title: "Ongoing Advisory Services",
      subtitle: "Ensuring long-term AI success and evolution",
      description: "AI implementation is not a one-time project but an evolving capability. Our ongoing advisory services provide:",
      listItems: [
        "Regular strategy reviews and updates",
        "Performance monitoring and optimization",
        "New use case identification",
        "Implementation support for emerging technologies",
        "Team capability development and knowledge transfer"
      ],
      deliverable: "Continuous support ensuring your AI investments deliver sustained value."
    }
  ];

  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <PageTitle 
          title="Our Services" 
          subtitle="Our services span the complete AI implementation journey, from initial assessment through strategy development, implementation, and ongoing support. Each engagement is tailored to your specific business needs and objectives." 
        />
        
        {services.map((service, index) => (
          <ServiceSection
            key={index}
            id={service.id}
            icon={service.icon}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
            listItems={service.listItems}
            deliverable={service.deliverable}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
