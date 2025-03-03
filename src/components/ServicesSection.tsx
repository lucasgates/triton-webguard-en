
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
      title: "Pentest Infra Black Box",
      description: "Simulação de ataques hackers que pode incluir o perímetro externo e interno. Esse teste utiliza phishing customizado para sua empresa. Análise de vulnerabilidades inclusa."
    },
    {
      icon: <Globe className="h-6 w-6 text-accent1" />,
      title: "Pentest Web/API Avançado",
      description: "Avaliação completa de segurança das suas aplicações web para descobrir vulnerabilidades no design e implementação. Ideal para empresas SaaS."
    },
    {
      icon: <Network className="h-6 w-6 text-accent1" />,
      title: "Análise de Vulnerabilidades",
      description: "Avalie sua postura de segurança de rede para identificar falhas em seu ambiente. Inclui relatório detalhado com recomendações."
    },
    {
      icon: <Database className="h-6 w-6 text-accent1" />,
      title: "Consultoria Cyber Security",
      description: "Avaliação de riscos e recomendações para melhorar a segurança da informação. Inclui treinamento de conscientização em segurança."
    },
    {
      icon: <Computer className="h-6 w-6 text-accent1" />,
      title: "Pentest Mobile",
      description: "Descubra falhas de segurança em aplicativos iOS e Android que poderiam comprometer dados e privacidade dos usuários."
    },
    {
      icon: <Key className="h-6 w-6 text-accent1" />,
      title: "Treinamento Desenvolvimento Seguro",
      description: "Capacite sua equipe de desenvolvimento com as melhores práticas de segurança para evitar vulnerabilidades em seus aplicativos."
    }
  ];

  return (
    <section id="services" className="py-12 bg-security-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-block mb-3 py-1 px-3 bg-accent1/10 rounded-full">
            <p className="text-accent1 font-medium text-sm">Nossos Serviços Especializados</p>
          </div>
          <h2 className="section-title">Serviços de Pentest Sob Medida</h2>
          <p className="section-subtitle">
            Nossos serviços de teste de segurança liderados por especialistas ajudam organizações a identificar e resolver 
            vulnerabilidades antes que sejam exploradas.
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
