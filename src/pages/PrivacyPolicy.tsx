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
              <h1 className="text-3xl md:text-4xl font-display font-bold text-security-800">Privacy Policy</h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead">Triton Infosec is committed to protecting the privacy and data of visitors to our website. This policy explains how we collect, use, and protect your information.</p>
              
              <h2>Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li><strong>Contact Information:</strong> such as name, email address, phone number, and company when you fill out our contact forms.</li>
                <li><strong>Usage Information:</strong> such as data about how you navigate our website, including IP address, browser type, pages visited, and time spent on each page.</li>
                <li><strong>Cookies:</strong> we use cookies to improve your experience on our website. You can adjust your browser settings to refuse cookies, although this may affect the functionality of the site.</li>
              </ul>
              
              <h2>How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul>
                <li>Respond to your requests and provide the requested service</li>
                <li>Improve our website and services</li>
                <li>Personalize your experience on the site</li>
                <li>Send information about our services (only if you consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2>Data Sharing</h2>
              <p>We do not sell, rent, or share your personal information with third parties, except:</p>
              <ul>
                <li>When necessary to provide the requested services</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights, property, or safety</li>
              </ul>
              
              <h2>Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
              
              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Withdraw your consent at any time</li>
                <li>File a complaint with a data protection authority</li>
              </ul>
              
              <h2>Changes to This Policy</h2>
              <p>We may update this privacy policy periodically. We recommend that you review this page regularly to be aware of any changes. Changes take effect immediately after being posted on this page.</p>
              
              <h2>Contact</h2>
              <p>If you have questions about this privacy policy, please contact us at contact@tritoninfosec.com.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;