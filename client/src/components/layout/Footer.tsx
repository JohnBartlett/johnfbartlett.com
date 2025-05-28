import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">JF Bartlett & Associates</h3>
            <p className="mb-2">AI Advisory Consultancy</p>
            <p>St. Petersburg, Florida</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-secondary transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition">Services</Link></li>
              <li><Link href="/industries" className="hover:text-secondary transition">Industries</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services#services-assessment" className="hover:text-secondary transition">AI Readiness Assessment</a></li>
              <li><a href="/services#services-strategy" className="hover:text-secondary transition">AI Strategy Development</a></li>
              <li><a href="/services#services-implementation" className="hover:text-secondary transition">Custom AI Implementation</a></li>
              <li><a href="/services#services-integration" className="hover:text-secondary transition">Integration & Modernization</a></li>
              <li><a href="/services#services-advisory" className="hover:text-secondary transition">Ongoing Advisory</a></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-secondary transition">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="hover:text-secondary transition">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="hover:text-secondary transition">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
            </div>
            <Link href="/contact" className="inline-block bg-secondary hover:bg-opacity-90 text-white py-2 px-6 rounded-md transition mt-2">
              Get in Touch
            </Link>
          </div>
        </div>
        
        <hr className="border-white border-opacity-20 mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>Copyright © 2025 JF Bartlett & Associates. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-secondary transition">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-secondary transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
