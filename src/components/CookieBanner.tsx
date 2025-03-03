import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-security-200 shadow-lg z-50 p-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-security-600 flex-grow">
          We use cookies to improve your experience on our site. By continuing to browse, you agree to our{' '}
          <Link to="/cookie-policy" className="text-accent1 hover:underline">
            Cookie Policy
          </Link>
          .
        </div>
        <Button onClick={handleAccept} className="whitespace-nowrap">
          OK, Got it
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;