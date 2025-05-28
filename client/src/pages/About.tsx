import { useEffect } from 'react';
import PageTitle from '@/components/shared/PageTitle';

const About = () => {
  useEffect(() => {
    // Update page title
    document.title = "About Us | JF Bartlett & Associates";
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <PageTitle title="About JF Bartlett & Associates" />
        
        {/* Company Overview Section */}
        <div className="max-w-4xl mx-auto mb-16 fade-in">
          <p className="text-lg mb-6">JF Bartlett & Associates is a boutique AI advisory consultancy based in St. Petersburg, Florida. We specialize in helping organizations leverage artificial intelligence to enhance operations, improve decision-making, and create competitive advantage.</p>
          <p className="text-lg">Our approach combines strategic business insight with deep technical expertise, ensuring AI implementations deliver measurable value. As a boutique firm, we provide the personalized attention of a dedicated consultant with the diverse capabilities of a larger organization.</p>
        </div>
        
        {/* Founder Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16 slide-in-bottom">
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden shadow-lg">
              {/* Professional headshot of John Bartlett */}
              <img src="/images/john-bartlett.jpeg" alt="John Bartlett, Principal Consultant and Founder" className="w-full h-auto" />
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-primary mb-4">John Bartlett</h2>
            <h3 className="text-xl text-neutral-dark mb-4">Principal Consultant and Founder</h3>
            <p className="mb-4">John brings over 15 years of experience in infrastructure modernization, systems development, and AI implementation. With a background spanning financial services, manufacturing, professional services, and technology companies, John has led multimillion-dollar digital transformation initiatives and pioneered AI solutions for diverse business challenges.</p>
            <p>Prior to founding JF Bartlett & Associates, John successfully implemented custom AI solutions including large language models for professional services firms and real-time data analysis systems for manufacturing operations. His experience with companies like EMI Industries, Willis Stein & Partners, and multiple technology innovators provides a foundation of practical expertise in translating AI's potential into business results.</p>
          </div>
        </div>
        
        {/* Our Team Approach Section */}
        <div className="bg-neutral-light rounded-lg p-8 shadow-md fade-in">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Our Team Approach</h2>
          <p className="text-lg mb-8">JF Bartlett & Associates operates on a boutique consultancy model, bringing together specialized expertise for each client engagement. Our core team is supplemented by a carefully curated network of specialists in application development, financial analysis, change management, and industry-specific domains.</p>
          <p className="text-lg mb-8">This model allows us to assemble the perfect team for your specific needs while maintaining the personalized service and accountability of a dedicated consultant.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="hover-translate">
              <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-code text-2xl text-primary"></i>
              </div>
              <h3 className="font-semibold">Development Specialists</h3>
            </div>
            <div className="hover-translate">
              <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-2xl text-primary"></i>
              </div>
              <h3 className="font-semibold">Financial Analysts</h3>
            </div>
            <div className="hover-translate">
              <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users-cog text-2xl text-primary"></i>
              </div>
              <h3 className="font-semibold">Change Management</h3>
            </div>
            <div className="hover-translate">
              <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-industry text-2xl text-primary"></i>
              </div>
              <h3 className="font-semibold">Industry Experts</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
