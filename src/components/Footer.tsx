import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [emailDisplay, setEmailDisplay] = useState('contact[at]tritoninfosec[dot]com');
  const [realEmail, setRealEmail] = useState('');

  useEffect(() => {
    // Set the real email in a way that's not immediately accessible to bots
    setRealEmail('contact@tritoninfosec.com');
  }, []);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Only reveal the real email when a human clicks
    window.location.href = `mailto:${realEmail}`;
  };
  
  const links = {
    company: [
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      // "Team" link hidden as requested
      { name: "Careers", href: "https://www.linkedin.com/company/triton-infosec-llc/jobs/?viewAsMember=true", external: true },
    ],
    services: [
      { name: "Network Pentesting", href: "#services" },
      { name: "Web Application Testing", href: "#services" },
      { name: "Mobile Pentesting", href: "#services" },
      { name: "Cyber Security Consulting", href: "#services" },
    ],
    resources: [
      { name: "Blog", href: "https://www.linkedin.com/company/triton-infosec-llc/posts/?feedView=all&viewAsMember=true", external: true },
      // "Case Studies" link hidden as requested
      { name: "Security Resources", href: "https://cheatsheetseries.owasp.org", external: true },
      // "FAQ" link hidden as requested
      { name: "Training", href: "https://webhacker.academy", external: true },
    ],
  };

  return (
    <footer className="bg-security-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/c263fbf1-0b0e-4b8d-a3e2-1d6e7941f5dd.png" 
                alt="Triton Logo" 
                className="h-7 w-7"
              />
              <span className="font-display font-bold text-xl">Triton Infosec</span>
            </div>
            <p className="text-white/70 mb-6 max-w-xs">
              Specialists in penetration testing and cybersecurity assessments, helping organizations identify and resolve security vulnerabilities.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/triton.infosec/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://youtube.com/lucasgates" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/triton-infosec-llc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {links.resources.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  onClick={handleEmailClick}
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Send email to Triton Infosec"
                >
                  {emailDisplay}
                </a>
              </li>
              <li>
                <a href="tel:+16784592336" className="text-white/70 hover:text-white transition-colors">
                  +1 (678) 459-2336
                </a>
              </li>
              <li className="text-white/70">
                Greater Nashville, TN
              </li>
              {/* <li className="mt-4">
                <a 
                  href="https://wa.me/5531972291337" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </li>  */}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center md:flex md:justify-between md:text-left">
          <p className="text-white/50 text-sm">
            © {currentYear} Triton Infosec. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link to="/privacy-policy" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-white/50 hover:text-white text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
