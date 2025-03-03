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
              <h1 className="text-3xl md:text-4xl font-display font-bold text-security-800">Cookie Policy</h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead">This Cookie Policy explains how Triton Infosec uses cookies and similar technologies on our website.</p>
              
              <h2>What Are Cookies?</h2>
              <p>Cookies are small text files stored on your device (computer, tablet, or smartphone) when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.</p>
              
              <h2>How We Use Cookies</h2>
              <p>We use cookies for the following reasons:</p>
              <ul>
                <li><strong>Essential Cookies:</strong> Necessary for the basic functionality of the website, enabling features such as page navigation and access to secure areas.</li>
                <li><strong>Preference Cookies:</strong> Allow the website to remember information that changes the way the website behaves or appears, such as your preferred language.</li>
                <li><strong>Statistical Cookies:</strong> Help us understand how visitors interact with the website by collecting and reporting information anonymously.</li>
                <li><strong>Marketing Cookies:</strong> Used to track visitors across websites. The intention is to display relevant and engaging ads for the user.</li>
              </ul>
              
              <h2>Types of Cookies We Use</h2>
              <p>Our website uses the following types of cookies:</p>
              
              <h3>Session Cookies</h3>
              <p>Temporary cookies that are deleted when you close your browser. We use session cookies to maintain your information during your browsing session.</p>
              
              <h3>Persistent Cookies</h3>
              <p>Remain on your device for a specified period or until manually deleted. We use persistent cookies to remember your preferences and settings when you return to our website.</p>
              
              <h3>Third-Party Cookies</h3>
              <p>Placed by third-party services that appear on our pages, such as analytics tools or social media platforms.</p>
              
              <h2>Cookie Control</h2>
              <p>You can control and manage cookies in various ways. Most browsers allow you to see what cookies you have and delete them individually or block cookies from specific sites or domains. You can also set your browser to notify you when a website attempts to set a cookie.</p>
              
              <p>To learn more about managing cookies in popular browsers, visit:</p>
              <ul>
                <li>Google Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Manage cookies</a></li>
                <li>Mozilla Firefox: <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">Enable and disable cookies</a></li>
                <li>Safari: <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">Manage cookies</a></li>
                <li>Microsoft Edge: <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Delete cookies</a></li>
              </ul>
              
              <h2>Changes to This Policy</h2>
              <p>We may update our Cookie Policy periodically. We recommend that you review this policy regularly to be aware of any changes. Changes take effect immediately after being posted on this page.</p>
              
              <h2>Contact</h2>
              <p>If you have questions about our Cookie Policy, please contact us at contact@tritoninfosec.com.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;