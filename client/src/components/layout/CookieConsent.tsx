import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or declined cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-neutral-light border-t border-gray-200 shadow-lg p-4 z-50 fade-in">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-3 md:mb-0">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <div className="flex space-x-2">
          <Button
            variant="default"
            className="bg-primary hover:bg-primary-light text-white px-4 py-1 text-sm"
            onClick={handleAccept}
          >
            Accept
          </Button>
          <Button
            variant="secondary"
            className="bg-neutral-medium text-neutral-dark px-4 py-1 text-sm"
            onClick={handleDecline}
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
