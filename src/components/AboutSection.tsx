
import { Shield } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-security-800 text-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-up">
            <div className="relative z-10">
              <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md">
                <img 
                  src="/lovable-uploads/c263fbf1-0b0e-4b8d-a3e2-1d6e7941f5dd.png" 
                  alt="Triton Logo" 
                  className="h-8 w-8"
                />
              </div>
              
              <div className="rounded-2xl overflow-hidden">
                <img 
                  className="w-full h-auto" 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" 
                  alt="Profissional da Triton Infosec trabalhando" 
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full bg-security-700 rounded-2xl"></div>
          </div>
          
          <div className="animate-fade-up">
            <div className="inline-block mb-4 py-1 px-3 bg-white/10 rounded-full">
              <p className="text-white/80 font-medium text-sm">Sobre a Triton Infosec</p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              Especialistas de Confiança em Cibersegurança
            </h2>
            
            <p className="text-white/80 mb-6">
              Na Triton Infosec, construímos nossa reputação com base na excelência técnica e no compromisso profundo em proteger 
              nossos clientes contra ameaças cibernéticas em evolução. Nossa equipe de profissionais certificados em segurança traz experiência 
              extensiva em diversos setores e tecnologias.
            </p>
            
            <p className="text-white/80 mb-10">
              Fazemos parceria com organizações de todos os tamanhos para identificar vulnerabilidades, fortalecer a postura de segurança 
              e construir resiliência contra ataques. Nossa abordagem colaborativa garante que compreendamos seus desafios únicos 
              e entreguemos soluções que atendam às suas necessidades específicas.
            </p>
            
            <div className="bg-security-700 rounded-lg p-6 border border-security-600">
              <h3 className="text-xl font-semibold mb-3 text-white">Nossa Missão</h3>
              <p className="text-white/80">
                Capacitar organizações com o conhecimento e as ferramentas necessárias para proteger seus ativos digitais e construir 
                confiança com seus clientes por meio de medidas proativas de segurança e orientação especializada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
