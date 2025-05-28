import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useMobileMenu } from '@/hooks/use-mobile-menu';
import { useScroll } from '@/hooks/use-scroll';

const Header = () => {
  const [location] = useLocation();
  const { isScrolled } = useScroll(10);
  const { 
    isMobileMenuOpen, 
    toggleMobileMenu,
    isServicesDropdownOpen,
    isIndustriesDropdownOpen,
    toggleServicesDropdown,
    toggleIndustriesDropdown
  } = useMobileMenu();
  
  // Close mobile menu on location change
  useEffect(() => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  }, [location]);

  const isActive = (path: string) => {
    return location === path ? 'text-secondary' : '';
  };

  return (
    <header className={`sticky top-0 z-30 bg-white ${isScrolled ? 'shadow-md' : ''} transition-shadow duration-300`}>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">JF<span className="text-secondary">B</span></span>
            <span className="ml-2 hidden md:inline-block text-sm">JF Bartlett & Associates</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={`font-medium hover:text-secondary transition ${isActive('/')}`}>
              Home
            </Link>
            <Link href="/about" className={`font-medium hover:text-secondary transition ${isActive('/about')}`}>
              About Us
            </Link>
            <div className="relative group">
              <Link href="/services" className={`font-medium hover:text-secondary transition flex items-center ${isActive('/services')}`}>
                Services
                <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </Link>
              {/* Added padding-top to create hover gap and increased transition delay */}
              <div className="absolute left-0 mt-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out bg-white shadow-lg rounded-md p-2 z-40">
                <a href="/services#services-assessment" className="block py-2 px-3 hover:bg-neutral-light rounded-md transition">AI Readiness Assessment</a>
                <a href="/services#services-strategy" className="block py-2 px-3 hover:bg-neutral-light rounded-md transition">AI Strategy Development</a>
                <a href="/services#services-implementation" className="block py-2 px-3 hover:bg-neutral-light rounded-md transition">Custom AI Implementation</a>
                <a href="/services#services-integration" className="block py-2 px-3 hover:bg-neutral-light rounded-md transition">Integration & Modernization</a>
                <a href="/services#services-advisory" className="block py-2 px-3 hover:bg-neutral-light rounded-md transition">Ongoing Advisory</a>
              </div>
            </div>
            <div className="relative group">
              <Link href="/industries" className={`font-medium hover:text-secondary transition flex items-center ${isActive('/industries')}`}>
                Industries
                <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </Link>
              {/* Added padding-top to create hover gap and increased transition delay */}
              <div className="absolute left-0 mt-0 pt-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out bg-white shadow-lg rounded-md p-2 z-40">
                <a href="/industries#industries-manufacturing" className="block py-2 px-3 hover:bg-neutral-light rounded-md transition">Manufacturing & Logistics</a>
                <a href="/industries#industries-financial" className="block py-2 px-3 hover:bg-neutral-light rounded-md transition">Financial Services</a>
                <a href="/industries#industries-professional" className="block py-2 px-3 hover:bg-neutral-light rounded-md transition">Professional Services</a>
                <a href="/industries#industries-education" className="block py-2 px-3 hover:bg-neutral-light rounded-md transition">Education & Non-profits</a>
              </div>
            </div>
            <Link href="/contact" className={`font-medium hover:text-secondary transition ${isActive('/contact')}`}>
              Contact
            </Link>
          </div>
          
          {/* CTA Button (Desktop) */}
          <Link href="/contact" className="hidden md:block btn-primary">
            Get in Touch
          </Link>
          
          {/* Mobile Menu Button */}
          <div 
            className={`md:hidden hamburger cursor-pointer ${isMobileMenuOpen ? 'active' : ''}`} 
            onClick={toggleMobileMenu}
          >
            <div className="line1 w-6 h-0.5 bg-neutral-dark mb-1.5"></div>
            <div className="line2 w-6 h-0.5 bg-neutral-dark mb-1.5"></div>
            <div className="line3 w-6 h-0.5 bg-neutral-dark"></div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden mt-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-3 py-3">
            <Link href="/" className="font-medium hover:text-secondary transition px-2 py-1">Home</Link>
            <Link href="/about" className="font-medium hover:text-secondary transition px-2 py-1">About Us</Link>
            
            {/* Mobile Services Submenu */}
            <div className="mobile-dropdown">
              <div 
                className="flex justify-between items-center px-2 py-1 cursor-pointer" 
                onClick={toggleServicesDropdown}
              >
                <span className="font-medium">Services</span>
                <i className={`fas fa-chevron-down text-xs transform ${isServicesDropdownOpen ? 'rotate-180' : ''} transition-transform duration-300`}></i>
              </div>
              <div className={`${isServicesDropdownOpen ? 'block' : 'hidden'} pl-4 mt-1 space-y-2`}>
                <a href="/services#services-assessment" className="block py-1 hover:text-secondary transition">AI Readiness Assessment</a>
                <a href="/services#services-strategy" className="block py-1 hover:text-secondary transition">AI Strategy Development</a>
                <a href="/services#services-implementation" className="block py-1 hover:text-secondary transition">Custom AI Implementation</a>
                <a href="/services#services-integration" className="block py-1 hover:text-secondary transition">Integration & Modernization</a>
                <a href="/services#services-advisory" className="block py-1 hover:text-secondary transition">Ongoing Advisory</a>
              </div>
            </div>
            
            {/* Mobile Industries Submenu */}
            <div className="mobile-dropdown">
              <div 
                className="flex justify-between items-center px-2 py-1 cursor-pointer"
                onClick={toggleIndustriesDropdown}
              >
                <span className="font-medium">Industries</span>
                <i className={`fas fa-chevron-down text-xs transform ${isIndustriesDropdownOpen ? 'rotate-180' : ''} transition-transform duration-300`}></i>
              </div>
              <div className={`${isIndustriesDropdownOpen ? 'block' : 'hidden'} pl-4 mt-1 space-y-2`}>
                <a href="/industries#industries-manufacturing" className="block py-1 hover:text-secondary transition">Manufacturing & Logistics</a>
                <a href="/industries#industries-financial" className="block py-1 hover:text-secondary transition">Financial Services</a>
                <a href="/industries#industries-professional" className="block py-1 hover:text-secondary transition">Professional Services</a>
                <a href="/industries#industries-education" className="block py-1 hover:text-secondary transition">Education & Non-profits</a>
              </div>
            </div>
            
            <Link href="/contact" className="font-medium hover:text-secondary transition px-2 py-1">Contact</Link>
            <Link href="/contact" className="btn-primary text-center py-2 px-4 rounded transition mt-2">
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
