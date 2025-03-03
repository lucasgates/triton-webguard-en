
import { CheckCircle2 } from 'lucide-react';

const ApproachSection = () => {
  const steps = [
    {
      number: "01",
      title: "Descoberta e Definição",
      description: "Trabalhamos com você para entender seus sistemas, aplicações e preocupações de segurança para definir o escopo dos testes."
    },
    {
      number: "02",
      title: "Planejamento e Reconhecimento",
      description: "Nossa equipe coleta informações e desenvolve uma estratégia de teste personalizada específica para seu ambiente e requisitos de segurança."
    },
    {
      number: "03",
      title: "Teste e Exploração",
      description: "Usando técnicas avançadas, identificamos e exploramos vulnerabilidades de forma segura para demonstrar impactos reais."
    },
    {
      number: "04",
      title: "Análise e Relatório",
      description: "Fornecemos relatórios detalhados com explicações claras das vulnerabilidades, níveis de risco e etapas recomendadas para correção."
    }
  ];

  const benefits = [
    "Identificar falhas críticas de segurança",
    "Validar controles de segurança existentes",
    "Atender requisitos de conformidade",
    "Reduzir risco de vazamento de dados",
    "Melhorar sua postura de segurança",
    "Proteger a reputação da marca"
  ];

  return (
    <section id="approach" className="py-12 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-block mb-3 py-1 px-3 bg-accent1/10 rounded-full">
              <p className="text-accent1 font-medium text-sm">Nossa Metodologia</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-security-800">
              Uma Abordagem Estratégica para Testes de Intrusão
            </h2>
            <p className="text-security-600 mb-8">
              Nossa metodologia sistemática garante uma avaliação completa dos seus sistemas enquanto minimiza 
              riscos ao seu ambiente de produção. Seguimos as melhores práticas, como PTES, NIST, e OWASP WSTG e adaptamos nossa 
              abordagem às suas necessidades específicas.
            </p>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-6">
                    <div className="w-12 h-12 rounded-full bg-accent1/10 flex items-center justify-center text-accent1 font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-security-800">{step.title}</h3>
                    <p className="text-security-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-10 animate-fade-up">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  className="w-full h-auto" 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
                  alt="Visualização de segurança digital" 
                  loading="lazy"
                />
              </div>
              
              <div className="absolute -bottom-8 -right-8 md:w-80 bg-white shadow-lg rounded-lg p-6 z-10">
                <h3 className="text-lg font-semibold mb-4 text-security-800">Benefícios dos Nossos Testes</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent2 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-security-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 rounded-full bg-accent1/5"></div>
              <div className="absolute -z-10 bottom-40 -right-10 w-60 h-60 rounded-full bg-accent2/5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
