import { ShieldCheck, Globe, Database, Computer, Network, Key } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-security-100 p-6 card-hover">
      <div className="w-12 h-12 rounded-lg bg-accent1/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-security-800">{title}</h3>
      <p className="text-security-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-accent1" />,
      title: "Black Box Infra Pentest",
      description: "Simulation of hacker attacks that can include external and internal perimeter. This test uses phishing customized for your company. Vulnerability analysis included."
    },
    {
      icon: <Globe className="h-6 w-6 text-accent1" />,
      title: "Advanced Web/API Pentest",
      description: "Comprehensive security assessment of your web applications to discover vulnerabilities in design and implementation. Ideal for SaaS companies."
    },
    {
      icon: <Network className="h-6 w-6 text-accent1" />,
      title: "Vulnerability Analysis",
      description: "Evaluate your network security posture to identify flaws in your environment. Includes detailed report with recommendations."
    },
    {
      icon: <Database className="h-6 w-6 text-accent1" />,
      title: "Cyber Security Consulting",
      description: "Risk assessment and recommendations to improve information security. Includes security awareness training."
    },
    {
      icon: <Computer className="h-6 w-6 text-accent1" />,
      title: "Mobile Pentest",
      description: "Discover security flaws in iOS and Android applications that could compromise user data and privacy."
    },
    {
      icon: <Key className="h-6 w-6 text-accent1" />,
      title: "Secure Development Training",
      description: "Empower your development team with security best practices to prevent vulnerabilities in your applications."
    }
  ];

  return (
    <section id="services" className="py-12 bg-security-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-block mb-3 py-1 px-3 bg-accent1/10 rounded-full">
            <p className="text-accent1 font-medium text-sm">Our Specialized Services</p>
          </div>
          <h2 className="section-title">Tailored Pentest Services</h2>
          <p className="section-subtitle">
            Our expert-led security testing services help organizations identify and resolve 
            vulnerabilities before they are exploited.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;