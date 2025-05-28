import { useEffect } from 'react';
import PageTitle from '@/components/shared/PageTitle';

const TermsOfService = () => {
  useEffect(() => {
    // Update page title
    document.title = "Terms of Service | JF Bartlett & Associates";
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <PageTitle title="Terms of Service" />
        
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p>Last updated: January 1, 2025</p>
          
          <h2>Introduction</h2>
          <p>These Terms of Service ("Terms") govern your access to and use of the JF Bartlett & Associates website and services. By accessing or using our website, you agree to be bound by these Terms.</p>
          
          <h2>Use of Our Website and Services</h2>
          <p>You may use our website and services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul>
            <li>Use our website in any way that violates applicable laws or regulations</li>
            <li>Access or attempt to access areas of our website or systems that are not publicly available</li>
            <li>Attempt to probe, scan, or test the vulnerability of our systems or networks</li>
            <li>Use any automated means to access our website or collect information from it</li>
            <li>Interfere with or disrupt the operation of our website or servers</li>
          </ul>
          
          <h2>Intellectual Property</h2>
          <p>All content on our website, including text, graphics, logos, images, and software, is the property of JF Bartlett & Associates or our licensors and is protected by copyright, trademark, and other intellectual property laws.</p>
          
          <h2>Disclaimer of Warranties</h2>
          <p>Our website and services are provided "as is" and "as available," without any warranties of any kind, either express or implied. To the fullest extent permitted by law, we disclaim all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
          
          <h2>Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, JF Bartlett & Associates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our website or services.</p>
          
          <h2>Indemnification</h2>
          <p>You agree to indemnify, defend, and hold harmless JF Bartlett & Associates and our officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of our website or services or your violation of these Terms.</p>
          
          <h2>Changes to These Terms</h2>
          <p>We may update these Terms from time to time. We'll notify you of any significant changes by posting the new Terms on this page and updating the "Last updated" date.</p>
          
          <h2>Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.</p>
          
          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at legal@jfbartlett.com.</p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
