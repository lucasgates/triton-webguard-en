import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-security-900 backdrop-blur-lg shadow-sm py-3' : 'bg-security-900/90 py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <img 
            src="/lovable-uploads/c263fbf1-0b0e-4b8d-a3e2-1d6e7941f5dd.png" 
            alt="Triton Logo" 
            className="h-8 w-8"
          />
          <span className="font-display font-bold text-xl text-white">Triton Infosec</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-white/70 hover:text-white font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent1 after:origin-bottom-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Services</a>
          <a href="#approach" className="text-white/70 hover:text-white font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent1 after:origin-bottom-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Methodology</a>
          <a href="#about" className="text-white/70 hover:text-white font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent1 after:origin-bottom-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">About</a>
          <a href="#contact">
            <Button className="bg-accent1 hover:bg-accent1-600 text-white">Contact Us</Button>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 animate-fade-in" />
          ) : (
            <Menu className="h-6 w-6 animate-fade-in" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-security-900 shadow-lg animate-fade-down">
          <div className="container py-5 flex flex-col gap-4">
            <a 
              href="#services" 
              className="py-2 text-white/70 hover:text-white font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#approach" 
              className="py-2 text-white/70 hover:text-white font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Methodology
            </a>
            <a 
              href="#about" 
              className="py-2 text-white/70 hover:text-white font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="w-full bg-accent1 hover:bg-accent1-600 text-white">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;