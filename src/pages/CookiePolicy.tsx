
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 flex items-center gap-3">
              <Shield className="h-8 w-8 text-accent1" />
              <h1 className="text-3xl md:text-4xl font-display font-bold text-security-800">Política de Cookies</h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead">Esta Política de Cookies explica como a Triton Infosec utiliza cookies e tecnologias similares em nosso site.</p>
              
              <h2>O que são Cookies?</h2>
              <p>Cookies são pequenos arquivos de texto armazenados em seu dispositivo (computador, tablet ou smartphone) quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de maneira mais eficiente e fornecer informações aos proprietários do site.</p>
              
              <h2>Como Utilizamos os Cookies</h2>
              <p>Utilizamos cookies pelos seguintes motivos:</p>
              <ul>
                <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site, permitindo recursos como navegação em páginas e acesso a áreas seguras.</li>
                <li><strong>Cookies de Preferências:</strong> Permitem que o site se lembre de informações que mudam a forma como o site se comporta ou aparece, como seu idioma preferido.</li>
                <li><strong>Cookies Estatísticos:</strong> Ajudam-nos a entender como os visitantes interagem com o site, coletando e relatando informações anonimamente.</li>
                <li><strong>Cookies de Marketing:</strong> Utilizados para rastrear visitantes em sites. A intenção é exibir anúncios relevantes e envolventes para o usuário.</li>
              </ul>
              
              <h2>Tipos de Cookies que Utilizamos</h2>
              <p>Nosso site utiliza os seguintes tipos de cookies:</p>
              
              <h3>Cookies de Sessão</h3>
              <p>Cookies temporários que são excluídos quando você fecha o navegador. Utilizamos cookies de sessão para manter suas informações durante a navegação no site.</p>
              
              <h3>Cookies Persistentes</h3>
              <p>Permanecem no seu dispositivo por um período específico ou até serem excluídos manualmente. Utilizamos cookies persistentes para lembrar suas preferências e configurações quando você retorna ao nosso site.</p>
              
              <h3>Cookies de Terceiros</h3>
              <p>Colocados por serviços de terceiros que aparecem em nossas páginas, como ferramentas de análise ou plataformas de mídia social.</p>
              
              <h2>Controle de Cookies</h2>
              <p>Você pode controlar e gerenciar cookies de várias maneiras. A maioria dos navegadores permite que você veja quais cookies você tem e exclua-os individualmente ou bloqueie cookies de sites ou domínios específicos. Você também pode configurar seu navegador para notificá-lo quando um site tenta definir um cookie.</p>
              
              <p>Para saber mais sobre como gerenciar cookies em navegadores populares, visite:</p>
              <ul>
                <li>Google Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Gerenciar cookies</a></li>
                <li>Mozilla Firefox: <a href="https://support.mozilla.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sites-usam" target="_blank" rel="noopener noreferrer">Ativar e desativar cookies</a></li>
                <li>Safari: <a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Gerenciar cookies</a></li>
                <li>Microsoft Edge: <a href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Excluir cookies</a></li>
              </ul>
              
              <h2>Alterações nesta Política</h2>
              <p>Podemos atualizar nossa Política de Cookies periodicamente. Recomendamos que você revise esta política regularmente para estar ciente de quaisquer alterações. As alterações entram em vigor imediatamente após serem publicadas nesta página.</p>
              
              <h2>Contato</h2>
              <p>Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco pelo e-mail contato@tritoninfosec.com.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;
