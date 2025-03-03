import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';
import PhoneInput from './PhoneInput';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+1 ',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailDisplay, setEmailDisplay] = useState('contact[at]tritoninfosec[dot]com');
  const [realEmail, setRealEmail] = useState('');
  
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setRealEmail('contact@tritoninfosec.com');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({ ...prev, phone: value }));
  };

  const nonBusinessDomains = [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 
    'aol.com', 'icloud.com', 'protonmail.com', 'mail.com',
    'zoho.com', 'yandex.com', 'gmx.com', 'live.com',
    'me.com', 'inbox.com', 'mail.ru'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Required field";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Required field";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    } else {
      const emailDomain = formData.email.split('@')[1].toLowerCase();
      if (nonBusinessDomains.includes(emailDomain)) {
        newErrors.email = "Please use a business email";
      }
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Required field";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      if (errors.name && nameRef.current) {
        nameRef.current.focus();
      } else if (errors.email && emailRef.current) {
        emailRef.current.focus();
      } else if (errors.message && messageRef.current) {
        messageRef.current.focus();
      }
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const currentURL = window.location.href;
      const referrer = document.referrer || 'direct';
      
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('nome_do_contato', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('telefone', formData.phone.replace(/\+\d+\s/, '')); // Remove country code prefix
      formDataToSend.append('empresa', formData.company || 'Not provided');
      formDataToSend.append('observa_es', formData.message);
      formDataToSend.append('url', currentURL);
      formDataToSend.append('referral', referrer);

      // Using no-cors mode to avoid CORS issues
      await fetch('https://autumn-lab-6af2.lucas-5c3.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString(),
        mode: 'no-cors' // Adding no-cors mode
      });

      // Since we're using no-cors, we can't parse the response
      // Let's assume it worked and show the success message
      
      // Check if the function exists before calling
      if (typeof window.gtag_report_conversion === 'function') {
        try {
          window.gtag_report_conversion();
        } catch (error) {
          console.log('Error calling gtag_report_conversion:', error);
          // Don't let this error interrupt the success flow
        }
      }
      
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '+1 ',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending form:', error);
      toast({
        title: "Error Sending Message",
        description: "An error occurred while sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${realEmail}`;
  };

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if the function exists before calling
    if (typeof window.gtag_report_conversion === 'function') {
      e.preventDefault();
      try {
        window.gtag_report_conversion('https://wa.me/5531972291337');
      } catch (error) {
        console.log('Error calling gtag_report_conversion for WhatsApp:', error);
        // In case of error, redirect directly
        window.open('https://wa.me/5531972291337', '_blank');
      }
    } else {
      // If the function doesn't exist, just let the default link behavior happen
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-accent1" />,
      title: "Email",
      content: emailDisplay,
      href: "#",
      onClick: handleEmailClick,
      ariaLabel: "Send email to Triton Infosec"
    },
    {
      icon: <Phone className="h-5 w-5 text-accent1" />,
      title: "Phone",
      content: "+55 (31) 97229-1337",
      href: "tel:+5531972291337",
      ariaLabel: "Call Triton Infosec"
    },
    {
      icon: <MapPin className="h-5 w-5 text-accent1" />,
      title: "Address",
      content: "Belo Horizonte, Brazil",
      href: "#",
      ariaLabel: "View Triton Infosec location"
    }
  ];

  return (
    <section id="contact" className="py-12 bg-security-50">
      <div className="section-container">
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-block mb-3 py-1 px-3 bg-accent1/10 rounded-full">
            <p className="text-accent1 font-medium text-sm">Contact Us</p>
          </div>
          <h2 className="section-title">Want to know how secure your business is?</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Schedule a Free Consultation With Triton Infosec. In 30 minutes, we'll show you how your company can:
          </p>
          <div className="mt-6 space-y-4 text-left max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-accent1 flex items-center justify-center text-white shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <p className="text-security-700">
                Meet corporate client requirements with reports accepted by international audits.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-accent1 flex items-center justify-center text-white shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <p className="text-security-700">
                Avoid fines for non-compliance with GDPR, PCI DSS, or ISO 27001.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-accent1 flex items-center justify-center text-white shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <p className="text-security-700">
                Transform security into a competitive advantage to close more lucrative contracts.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-fade-up">
            <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-security-800">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-security-700" htmlFor="name">Full Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      ref={nameRef}
                      required
                      className={`border-security-200 focus:border-accent1 focus:ring-accent1 ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-security-700" htmlFor="email">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      ref={emailRef}
                      required
                      className={`border-security-200 focus:border-accent1 focus:ring-accent1 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-security-700" htmlFor="phone">Phone</label>
                  <PhoneInput
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="border-security-200 focus:border-accent1 focus:ring-accent1"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-security-700" htmlFor="company">Company</label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                    className="border-security-200 focus:border-accent1 focus:ring-accent1"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-security-700" htmlFor="message">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your security needs..."
                    value={formData.message}
                    onChange={handleChange}
                    ref={messageRef}
                    required
                    className={`min-h-32 border-security-200 focus:border-accent1 focus:ring-accent1 ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent1 hover:bg-accent1-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
          
          <div className="animate-fade-up">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6 text-security-800">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="mt-1 mr-4">
                        <div className="w-10 h-10 rounded-full bg-accent1/10 flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-security-800 mb-1">{item.title}</h4>
                        <a 
                          href={item.href} 
                          onClick={item.onClick}
                          className="text-security-600 hover:text-accent1 transition-colors"
                          aria-label={item.ariaLabel}
                        >
                          {item.content}
                        </a>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-6 pt-6 border-t border-security-100">
                    <a 
                      href="https://wa.me/5531972291337" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={handleWhatsAppClick}
                      className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors"
                      aria-label="Contact via WhatsApp"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>Contact us via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-security-800 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-semibold mb-6">Why Choose Triton Infosec</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-accent1 flex items-center justify-center mr-3 mt-0.5 text-white font-bold text-xs">✓</div>
                    <div>
                      <h4 className="font-medium">Specialized Team</h4>
                      <p className="text-sm text-white/80">We are a company specialized in penetration testing. We bring over a decade of proven experience to your company.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-accent1 flex items-center justify-center mr-3 mt-0.5 text-white font-bold text-xs">✓</div>
                    <div>
                      <h4 className="font-medium">Highly Certified Team</h4>
                      <p className="text-sm text-white/80">Pentesters with OSCP, SANS, and other certifications to meet standards like GDPR, PCI DSS, and ISO 27001.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-accent1 flex items-center justify-center mr-3 mt-0.5 text-white font-bold text-xs">✓</div>
                    <div>
                      <h4 className="font-medium">Strategic Reports</h4>
                      <p className="text-sm text-white/80">Prove security to demanding clients with irrefutable technical evidence.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-accent1 flex items-center justify-center mr-3 mt-0.5 text-white font-bold text-xs">✓</div>
                    <div>
                      <h4 className="font-medium">Continuous Support</h4>
                      <p className="text-sm text-white/80">Guidance and assistance during remediation and beyond</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;