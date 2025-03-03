
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 flex items-center gap-3">
              <Shield className="h-8 w-8 text-accent1" />
              <h1 className="text-3xl md:text-4xl font-display font-bold text-security-800">Política de Privacidade</h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead">A Triton Infosec se compromete a proteger a privacidade e os dados dos visitantes do nosso site. Esta política explica como coletamos, usamos e protegemos suas informações.</p>
              
              <h2>Informações que Coletamos</h2>
              <p>Podemos coletar os seguintes tipos de informações:</p>
              <ul>
                <li><strong>Informações de Contato:</strong> como nome, endereço de e-mail, número de telefone e empresa quando você preenche nossos formulários de contato.</li>
                <li><strong>Informações de Uso:</strong> como dados sobre como você navega em nosso site, incluindo endereço IP, tipo de navegador, páginas visitadas e tempo gasto em cada página.</li>
                <li><strong>Cookies:</strong> utilizamos cookies para melhorar sua experiência em nosso site. Você pode ajustar as configurações do seu navegador para recusar cookies, embora isso possa afetar a funcionalidade do site.</li>
              </ul>
              
              <h2>Como Usamos suas Informações</h2>
              <p>Utilizamos as informações coletadas para:</p>
              <ul>
                <li>Responder às suas solicitações e fornecer o serviço solicitado</li>
                <li>Melhorar nosso site e serviços</li>
                <li>Personalizar sua experiência no site</li>
                <li>Enviar informações sobre nossos serviços (somente se você consentir)</li>
                <li>Cumprir obrigações legais</li>
              </ul>
              
              <h2>Compartilhamento de Dados</h2>
              <p>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:</p>
              <ul>
                <li>Quando necessário para prestar os serviços solicitados</li>
                <li>Para cumprir com obrigações legais</li>
                <li>Para proteger nossos direitos, propriedade ou segurança</li>
              </ul>
              
              <h2>Segurança de Dados</h2>
              <p>Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.</p>
              
              <h2>Seus Direitos</h2>
              <p>Você tem o direito de:</p>
              <ul>
                <li>Acessar as informações pessoais que mantemos sobre você</li>
                <li>Solicitar a correção de informações imprecisas</li>
                <li>Solicitar a exclusão de suas informações pessoais</li>
                <li>Retirar seu consentimento a qualquer momento</li>
                <li>Apresentar uma reclamação a uma autoridade de proteção de dados</li>
              </ul>
              
              <h2>Alterações nesta Política</h2>
              <p>Podemos atualizar esta política de privacidade periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer alterações. As alterações entram em vigor imediatamente após serem publicadas nesta página.</p>
              
              <h2>Contato</h2>
              <p>Se você tiver dúvidas sobre esta política de privacidade, entre em contato conosco pelo e-mail contato@tritoninfosec.com.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
