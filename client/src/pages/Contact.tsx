import { useEffect } from 'react';
import PageTitle from '@/components/shared/PageTitle';
import ContactForm from '@/components/contact/ContactForm';
import NewsletterForm from '@/components/contact/NewsletterForm';

const Contact = () => {
  useEffect(() => {
    // Update page title
    document.title = "Contact Us | JF Bartlett & Associates";
  }, []);

  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <PageTitle 
          title="Contact Us" 
          subtitle="Ready to explore how AI can transform your business? Schedule a complimentary 30-minute consultation to discuss your challenges and opportunities." 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8 h-full">
              <h2 className="text-xl font-bold text-primary mb-6">JF Bartlett & Associates</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 rounded-full p-2 mr-4">
                    <i className="fas fa-map-marker-alt text-primary"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p>St. Petersburg, Florida</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 rounded-full p-2 mr-4">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>john@jfbartlett.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 rounded-full p-2 mr-4">
                    <i className="fas fa-phone-alt text-primary"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>[Business Phone]</p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-6 h-48 bg-neutral-medium rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113580.50098749098!2d-82.70642069134857!3d27.773235756918246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e19ba840dd67%3A0x1ffe06e50c46c91e!2sSt.%20Petersburg%2C%20FL!5e0!3m2!1sen!2sus!4v1671583997918!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JF Bartlett & Associates St. Petersburg Location"
                ></iframe>
              </div>
              
              {/* Newsletter Signup */}
              <NewsletterForm />
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
<p className="text-xs text-gray-400 fixed bottom-2 right-4 z-50">Version: 0.1.3-dev</p>
