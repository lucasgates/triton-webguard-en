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
              <h1 className="text-3xl md:text-4xl font-display font-bold text-security-800">Terms of Service</h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead">By accessing and using Triton Infosec's services, you agree to the following terms and conditions.</p>
              
              <h2>Acceptance of Terms</h2>
              <p>By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access or use our services.</p>
              
              <h2>Service Description</h2>
              <p>Triton Infosec offers penetration testing and security assessment services. We reserve the right to modify, suspend, or discontinue any part of our services at any time, with or without notice.</p>
              
              <h2>Testing Authorization</h2>
              <p>All penetration testing and security assessment services are performed only with express written authorization from the client. It is the client's responsibility to ensure they have legal authority to authorize testing on the target networks and systems.</p>
              
              <h2>Acceptable Use</h2>
              <p>You agree not to use our website or services to:</p>
              <ul>
                <li>Violate applicable laws or regulations</li>
                <li>Infringe on the rights of third parties</li>
                <li>Attempt unauthorized access to systems or networks</li>
                <li>Distribute malware or malicious content</li>
                <li>Conduct any activity that may harm our services or other users</li>
              </ul>
              
              <h2>Intellectual Property</h2>
              <p>All content available on our website, including text, graphics, logos, icons, and images, is the property of Triton Infosec and is protected by copyright laws. You may not reproduce, distribute, or create derivative works from our content without our express written permission.</p>
              
              <h2>Confidentiality</h2>
              <p>We treat all data and information shared with us with strict confidentiality. Our staff are required to maintain the confidentiality of all information obtained during the provision of services.</p>
              
              <h2>Limitation of Liability</h2>
              <p>Under no circumstances shall Triton Infosec, its directors, employees, or agents be liable for direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.</p>
              
              <h2>Indemnification</h2>
              <p>You agree to indemnify and hold harmless Triton Infosec and its employees from any claim, liability, damage, or cost that may arise from your use of our services or violation of these Terms.</p>
              
              <h2>Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of Brazil, without regard to its conflict of law principles.</p>
              
              <h2>Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. Changes take effect immediately after being posted on our website. Your continued use of our services after such changes constitutes your acceptance of the new Terms.</p>
              
              <h2>Contact</h2>
              <p>If you have questions about these Terms, please contact us at contact@tritoninfosec.com.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;