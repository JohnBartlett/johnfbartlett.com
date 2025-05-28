import { useEffect } from 'react';
import PageTitle from '@/components/shared/PageTitle';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Update page title
    document.title = "Privacy Policy | JF Bartlett & Associates";
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <PageTitle title="Privacy Policy" />
        
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p>Last updated: January 1, 2025</p>
          
          <h2>Introduction</h2>
          <p>JF Bartlett & Associates ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website and services.</p>
          
          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and other information you provide when contacting us or using our services.</li>
            <li><strong>Usage Information:</strong> Information about how you use our website, including IP address, browser type, referring/exit pages, operating system, date/time stamps, and clickstream data.</li>
            <li><strong>Cookies and Similar Technologies:</strong> We use cookies and similar technologies to collect information about your browsing activities.</li>
          </ul>
          
          <h2>How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including:</p>
          <ul>
            <li>Providing and improving our services</li>
            <li>Communicating with you about our services</li>
            <li>Sending promotional materials and newsletters</li>
            <li>Analyzing website usage and trends</li>
            <li>Protecting our legal rights and complying with legal obligations</li>
          </ul>
          
          <h2>How We Share Your Information</h2>
          <p>We may share your information with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Third-party vendors who provide services on our behalf, such as email delivery, analytics, and customer support.</li>
            <li><strong>Business Transfers:</strong> If we're involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or if we believe it's necessary to protect our rights or the safety of others.</li>
          </ul>
          
          <h2>Your Rights and Choices</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul>
            <li>Accessing, correcting, or deleting your personal information</li>
            <li>Objecting to or restricting the processing of your personal information</li>
            <li>Requesting portability of your personal information</li>
            <li>Withdrawing consent at any time</li>
          </ul>
          
          <h2>Security</h2>
          <p>We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
          
          <h2>Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We'll notify you of any significant changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
          
          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@jfbartlett.com.</p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
