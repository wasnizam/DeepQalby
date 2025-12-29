import React from 'react';
import { Link } from 'react-router-dom';

export const TermsOfService: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-warm-50 border-b border-warm-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-navy-900 mb-6">Terms of Service</h1>
          <p className="text-xl text-navy-600 max-w-2xl">
            End User License Agreement (EULA)
          </p>
          <p className="text-lg text-navy-600/80 mt-2">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      <div className="py-20 px-6 bg-warm-white">
        <div className="max-w-4xl mx-auto text-navy-600 leading-relaxed space-y-12">
          
          <section>
            <p className="mb-6">
              Please read these Terms of Service ("Terms", "Terms of Service", "EULA") carefully before using our mobile applications, website, and services (the "Service") operated by DeepQalby ("us", "we", or "our").
            </p>
            <p>
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            <p className="mt-4">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">1. License Grant</h2>
            <p className="mb-4">
              Subject to your compliance with these Terms, DeepQalby grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use our mobile applications on your personal devices for personal, non-commercial purposes.
            </p>
            <p>
              This license does not include any right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Resell or redistribute the Service or any part thereof</li>
              <li>Modify, reverse engineer, or create derivative works of the Service</li>
              <li>Remove any proprietary notices or labels from the Service</li>
              <li>Use the Service for any commercial purpose without our prior written consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">2. Restrictions</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Service in any way that violates any applicable law or regulation</li>
              <li>Use the Service to transmit any malicious code, viruses, or harmful data</li>
              <li>Attempt to gain unauthorized access to any portion of the Service</li>
              <li>Interfere with or disrupt the Service or servers connected to the Service</li>
              <li>Use the Service to infringe upon the intellectual property rights of others</li>
              <li>Use the Service for any fraudulent or illegal purpose</li>
              <li>Copy, modify, or distribute the Service or any content contained therein</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">3. Intellectual Property Rights</h2>
            <p className="mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of DeepQalby and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
            </p>
            <p>
              All content, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, is the property of DeepQalby or its content suppliers and is protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">4. In-App Purchases and Subscriptions</h2>
            <h3 className="text-xl font-medium text-navy-900 mb-3">Premium Features</h3>
            <p className="mb-4">
              Some features of our applications may require a purchase or subscription. By making an in-app purchase, you agree to pay all charges associated with your purchase, including applicable taxes.
            </p>
            <h3 className="text-xl font-medium text-navy-900 mb-3">Subscription Terms</h3>
            <p className="mb-4">
              If you purchase a subscription:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period</li>
              <li>Your account will be charged for renewal within 24 hours prior to the end of the current period</li>
              <li>You can manage your subscriptions and turn off auto-renewal in your account settings</li>
              <li>Any unused portion of a free trial period will be forfeited when you purchase a subscription</li>
            </ul>
            <h3 className="text-xl font-medium text-navy-900 mb-3">Refunds</h3>
            <p>
              Refunds for in-app purchases are subject to the policies of the App Store (Apple App Store or Google Play Store) from which you made the purchase. Please contact the respective store for refund requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">5. User Accounts</h2>
            <p className="mb-4">
              Some features of our Service may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            <p>
              You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Provide accurate, current, and complete information when creating an account</li>
              <li>Maintain and update your account information to keep it accurate</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">6. User Content</h2>
            <p className="mb-4">
              Our Service may allow you to create, upload, or share content. You retain ownership of any intellectual property rights that you hold in such content.
            </p>
            <p className="mb-4">
              By submitting, posting, or displaying content on or through the Service, you grant DeepQalby a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content solely for the purpose of operating and providing the Service.
            </p>
            <p>
              You represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>You own or have the necessary rights to the content you submit</li>
              <li>Your content does not violate any third-party rights</li>
              <li>Your content is not defamatory, obscene, or otherwise objectionable</li>
              <li>Your content does not contain malicious code or viruses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">7. Privacy</h2>
            <p className="mb-4">
              Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
            </p>
            <p>
              By using the Service, you consent to the collection and use of information in accordance with our Privacy Policy. You can review our Privacy Policy at <Link to="/privacy" className="text-navy-900 font-medium hover:underline">/privacy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">8. Disclaimer of Warranties</h2>
            <p className="mb-4">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p className="mb-4">
              DeepQalby does not warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>The Service will be uninterrupted, secure, or error-free</li>
              <li>Defects will be corrected</li>
              <li>The Service is free of viruses or other harmful components</li>
              <li>The results obtained from using the Service will be accurate or reliable</li>
            </ul>
            <p>
              Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusion may not apply to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">9. Limitation of Liability</h2>
            <p className="mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL DEEPQALBY, ITS AFFILIATES, AGENTS, DIRECTORS, EMPLOYEES, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, THE SERVICE.
            </p>
            <p>
              Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not apply to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">10. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless DeepQalby and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Your use and access of the Service</li>
              <li>Your violation of any term of these Terms</li>
              <li>Your violation of any third party right, including without limitation any copyright, property, or privacy right</li>
              <li>Any claim that your content caused damage to a third party</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">11. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="mb-4">
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or delete the application from your device.
            </p>
            <p>
              All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">12. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be interpreted and governed by the laws of Malaysia, without regard to its conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">13. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
            <p>
              What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">14. Third-Party Services</h2>
            <p className="mb-4">
              Our Service may contain links to third-party websites or services that are not owned or controlled by DeepQalby. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>
            <p>
              You acknowledge and agree that DeepQalby shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">15. Apple App Store Terms</h2>
            <p className="mb-4">
              If you download our applications from the Apple App Store, the following additional terms apply:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>This agreement is between you and DeepQalby, not Apple</li>
              <li>Apple is not responsible for the Service or its content</li>
              <li>Your use of the Service must comply with Apple's App Store Terms of Service</li>
              <li>Apple has no obligation to furnish any maintenance or support services for the Service</li>
              <li>In the event of any failure of the Service, Apple has no responsibility to refund any purchase price</li>
              <li>Apple is not responsible for addressing any claims relating to the Service or your use of it</li>
            </ul>
            <p>
              For more information, please review Apple's standard End User License Agreement at{' '}
              <a 
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-navy-900 font-medium hover:underline"
              >
                https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">16. Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and DeepQalby regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
            </p>
          </section>

          <section className="border-t border-warm-100 pt-12 mt-12">
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">Contact Us</h2>
            <p className="mb-4">If you have any questions about these Terms of Service, you can contact us:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>By email: <a href="mailto:deepqalby@gmail.com" className="text-navy-900 font-medium hover:underline">deepqalby@gmail.com</a></li>
              <li>By visiting this page on our website: <Link to="/contact" className="text-navy-900 font-medium hover:underline">/contact</Link></li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};
