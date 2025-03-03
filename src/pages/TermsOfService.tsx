
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 flex items-center gap-3">
              <Shield className="h-8 w-8 text-accent1" />
              <h1 className="text-3xl md:text-4xl font-display font-bold text-security-800">Termos de Serviço</h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead">Ao acessar e utilizar os serviços da Triton Infosec, você concorda com os seguintes termos e condições.</p>
              
              <h2>Aceitação dos Termos</h2>
              <p>Ao acessar ou utilizar nosso site e serviços, você concorda em ficar vinculado a estes Termos de Serviço. Se você não concordar com alguma parte destes termos, não poderá acessar ou utilizar nossos serviços.</p>
              
              <h2>Descrição dos Serviços</h2>
              <p>A Triton Infosec oferece serviços de teste de intrusão e avaliação de segurança. Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer parte de nossos serviços a qualquer momento, com ou sem aviso prévio.</p>
              
              <h2>Autorização para Testes</h2>
              <p>Todos os serviços de teste de intrusão e avaliação de segurança são realizados apenas mediante autorização expressa e por escrito do cliente. É responsabilidade do cliente garantir que possui autoridade legal para autorizar testes nas redes e sistemas alvo.</p>
              
              <h2>Uso Aceitável</h2>
              <p>Você concorda em não utilizar nosso site ou serviços para:</p>
              <ul>
                <li>Violar leis ou regulamentos aplicáveis</li>
                <li>Infringir os direitos de terceiros</li>
                <li>Tentar acessar não autorizado a sistemas ou redes</li>
                <li>Distribuir malware ou conteúdo malicioso</li>
                <li>Realizar qualquer atividade que possa prejudicar nossos serviços ou outros usuários</li>
              </ul>
              
              <h2>Propriedade Intelectual</h2>
              <p>Todo o conteúdo disponível em nosso site, incluindo texto, gráficos, logotipos, ícones e imagens, é propriedade da Triton Infosec e está protegido por leis de direitos autorais. Você não pode reproduzir, distribuir ou criar trabalhos derivados de nosso conteúdo sem nossa permissão expressa por escrito.</p>
              
              <h2>Confidencialidade</h2>
              <p>Tratamos todos os dados e informações compartilhados conosco com estrita confidencialidade. Nossos colaboradores são obrigados a manter a confidencialidade de todas as informações obtidas durante a prestação de serviços.</p>
              
              <h2>Limitação de Responsabilidade</h2>
              <p>Em nenhuma circunstância a Triton Infosec, seus diretores, funcionários ou agentes serão responsáveis por danos diretos, indiretos, incidentais, especiais ou consequentes resultantes do uso ou incapacidade de usar nossos serviços.</p>
              
              <h2>Indenização</h2>
              <p>Você concorda em indenizar e isentar a Triton Infosec e seus funcionários de qualquer reivindicação, responsabilidade, dano ou custo que possa surgir do seu uso de nossos serviços ou violação destes Termos.</p>
              
              <h2>Lei Aplicável</h2>
              <p>Estes Termos serão regidos e interpretados de acordo com as leis brasileiras, sem consideração a conflitos de princípios legais.</p>
              
              <h2>Alterações nos Termos</h2>
              <p>Reservamo-nos o direito de modificar estes Termos a qualquer momento. As alterações entram em vigor imediatamente após serem publicadas em nosso site. O uso continuado de nossos serviços após tais alterações constitui sua aceitação dos novos Termos.</p>
              
              <h2>Contato</h2>
              <p>Se você tiver dúvidas sobre estes Termos, entre em contato conosco pelo e-mail contato@tritoninfosec.com.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
