import { useEffect } from 'react';
import PageTitle from '@/components/shared/PageTitle';
import IndustrySection from '@/components/industries/IndustrySection';

const Industries = () => {
  useEffect(() => {
    // Update page title
    document.title = "Industries | JF Bartlett & Associates";
    
    // Scroll to section if URL has hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const industries = [
    {
      id: "industries-manufacturing",
      title: "Manufacturing & Logistics",
      description: "AI offers transformative potential for manufacturing and logistics operations. Our experience with companies like EMI Industries has demonstrated the power of AI to optimize processes, reduce costs, and improve quality.",
      applications: [
        "Predictive maintenance to reduce downtime",
        "Quality control through computer vision",
        "Supply chain optimization and demand forecasting",
        "Process optimization through real-time analytics",
        "Inventory management and optimization"
      ],
      caseExample: "For a Tampa-based manufacturer, we implemented real-time data analysis of manufacturing lines, enabling proactive quality control and reducing defect rates by 23%.",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800",
      imageAlt: "Advanced manufacturing with AI technology",
      isReversed: false
    },
    {
      id: "industries-financial",
      title: "Financial Services & Fintech",
      description: "Financial institutions face increasing pressure to enhance customer experiences, improve risk management, and increase operational efficiency. Our experience with financial services firms provides a foundation for effective AI implementation.",
      applications: [
        "Customer service automation and enhancement",
        "Risk assessment and fraud detection",
        "Portfolio analysis and optimization",
        "Document processing and analysis",
        "Regulatory compliance monitoring"
      ],
      caseExample: "For a private equity firm, we streamlined document analysis through custom NLP models, reducing review time by 60% while increasing accuracy.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800",
      imageAlt: "Financial services analytics dashboard",
      isReversed: true
    },
    {
      id: "industries-professional",
      title: "Professional Services",
      description: "Law firms, accounting practices, and consulting organizations can leverage AI to enhance service delivery, increase efficiency, and provide new client value.",
      applications: [
        "Intelligent document analysis and classification",
        "Contract review and risk identification",
        "Knowledge management and information retrieval",
        "Automated report generation",
        "Client service enhancement"
      ],
      caseExample: "We developed a custom large language model for a law firm that processed over 500GB of proprietary data, enabling associate attorneys to access firm knowledge and precedents with unprecedented efficiency.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800",
      imageAlt: "Professional services meeting with AI technology",
      isReversed: false
    },
    {
      id: "industries-education",
      title: "Education & Non-profits",
      description: "Educational institutions and non-profit organizations can leverage AI to enhance their mission while operating within resource constraints.",
      applications: [
        "Student performance analytics and intervention",
        "Donor analysis and engagement optimization",
        "Resource allocation optimization",
        "Automated administrative processes",
        "Enhanced learning experiences"
      ],
      caseExample: "For a non-profit organization, we implemented a donor analysis system that increased fundraising efficiency by identifying high-potential donors and optimizing outreach timing.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800",
      imageAlt: "Education with technology integration",
      isReversed: true
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <PageTitle 
          title="Industries We Serve" 
          subtitle="Our expertise spans multiple industries, each with unique AI applications and opportunities." 
        />
        
        {industries.map((industry, index) => (
          <IndustrySection
            key={index}
            id={industry.id}
            title={industry.title}
            description={industry.description}
            applications={industry.applications}
            caseExample={industry.caseExample}
            image={industry.image}
            imageAlt={industry.imageAlt}
            isReversed={industry.isReversed}
          />
        ))}
      </div>
    </section>
  );
};

export default Industries;
