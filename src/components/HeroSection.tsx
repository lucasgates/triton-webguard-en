import { Award, LockKeyhole } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-b from-security-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 max-w-2xl animate-fade-up">
            <div className="inline-block mb-4 py-1 px-3 bg-accent1/10 rounded-full">
              <p className="text-accent1 font-medium text-sm">Penetration Testing Specialists</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-security-800 leading-tight mb-6">
            
              <span className="relative inline-block ml">
                <span className="text-gradient">Pentests </span>
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-accent1/20" 
                     viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,5 Q40,0 50,5 Q60,10 100,5 L100,8 L0,8 Z" fill="currentColor" />
                </svg>
              </span>
              &nbsp; that Impress Clients.
            </h1>
            
            <p className="text-lg text-security-600 mb-8 max-w-lg">
              Corporate clients increasingly demand transparency.
              Prove your systems are protected with a professional Penetration Test (pentest) report from Triton Infosec.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary" size="lg" onClick={scrollToContact}>
                Schedule a Consultation
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent2" />
                <span className="text-sm text-security-600">OSCP Team</span>
              </div>
              <div className="flex items-center gap-2">
                <LockKeyhole className="h-5 w-5 text-accent2" />
                <span className="text-sm text-security-600">SANS Certifications</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-fade-in">
            <div className="relative z-10 glass-panel rounded-2xl p-4 md:p-6 bg-white/50">
              <img 
                className="w-full h-auto rounded-lg shadow-lg" 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                alt="Cybersecurity professional working" 
                loading="lazy"
              />
              
              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md animate-float">
                <div className="flex items-center gap-3">
                  <img 
                    src="/lovable-uploads/c263fbf1-0b0e-4b8d-a3e2-1d6e7941f5dd.png" 
                    alt="Triton Logo" 
                    className="h-10 w-10"
                  />
                  <div>
                    <p className="font-semibold text-security-800">Expert pentesters</p>
                    <p className="text-xs text-security-600">in penetration testing</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full bg-gradient-to-r from-accent1/5 to-accent2/5 blur-3xl animate-pulse-slow"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;