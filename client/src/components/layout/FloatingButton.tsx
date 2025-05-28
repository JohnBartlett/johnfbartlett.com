import { Link } from 'wouter';
import { useState, useEffect } from 'react';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-40 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Link href="/contact" className="flex items-center bg-secondary hover:bg-opacity-90 text-white py-2 px-4 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
        <span>Schedule Consultation</span>
        <i className="fas fa-arrow-right ml-2"></i>
      </Link>
    </div>
  );
};

export default FloatingButton;
