import React from 'react';
import { Link } from 'react-router-dom';

const SUPPORT_EMAIL = 'nizam.sabian@gmail.com';

export const RuqyahPrivacy: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-warm-50 border-b border-warm-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-navy-900 mb-6">Ruqyah360 Privacy Policy</h1>
          <p className="text-xl text-navy-600 max-w-2xl">
            How the Ruqyah360 iOS app handles your information.
          </p>
          <p className="text-lg text-navy-600/80 mt-2">Last updated: October 15, 2026</p>
        </div>
      </div>

      <div className="py-20 px-6 bg-warm-white">
        <div className="max-w-4xl mx-auto text-navy-600 leading-relaxed space-y-12">
          <section>
            <p className="mb-4">
              Ruqyah360 ("the App") is published by DeepQalby ("we", "us"). This policy explains what information
              the App collects, how it is used, and the choices you have. Ruqyah360 offers spiritual guidance and
              ruqyah practice only; it is not a medical service.
            </p>
            <p>
              In short: your spiritual assessment answers, programs, journal and progress stay on your device. We use
              anonymous analytics to understand how the App is used. We do not sell your data, show ads, or track you
              across other apps or websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">1. Information stored on your device</h2>
            <p className="mb-4">The following is created by you and stored only on your device:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your answers to the spiritual assessment and your personal summary</li>
              <li>Your saved treatment programs, session history and progress</li>
              <li>Journal entries, notes and wellness reflections</li>
              <li>Your preferences, such as language, reminders and theme</li>
            </ul>
            <p className="mt-4">
              This information is not sent to us. Sensitive items are protected with on-device encryption and the iOS
              Keychain. If you delete the App, this information is removed from your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">2. Optional account (Sign in with Apple or Google)</h2>
            <p className="mb-4">
              You can use Ruqyah360 without an account. If you choose to sign in with Apple or Google, the App receives
              your name and email address from that provider. They are used only to show your profile in the App and
              are stored on your device. We do not use them for marketing.
            </p>
            <p>
              Sign-in is handled by Apple or Google under their own privacy policies:{' '}
              <a className="text-navy-900 underline" href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">Apple</a>,{' '}
              <a className="text-navy-900 underline" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">3. Analytics (Google Firebase)</h2>
            <p className="mb-4">
              We use Google Firebase Analytics to understand how the App is used and to improve it. Firebase collects
              usage events, such as screens and features opened (including which treatment track is viewed), onboarding
              steps, and paywall and purchase events, together with a random app-instance identifier and basic device
              information (device model, iOS version, approximate country).
            </p>
            <p className="mb-4">
              This data is not linked to your name, email or account, and it is not used for advertising or tracking.
              We do not send your assessment answers, journal entries or other personal content to Firebase.
            </p>
            <p>
              Google processes this data under the{' '}
              <a className="text-navy-900 underline" href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer">Firebase privacy terms</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">4. Purchases and subscriptions</h2>
            <p>
              Subscriptions are processed entirely by Apple through the App Store. We never receive your payment
              details. The App checks your subscription status with Apple's StoreKit to unlock Premium features.
              You can manage or cancel subscriptions in your App Store account settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">5. Device permissions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Notifications</strong> — optional reminders for Al-Mathurat and your daily program. Scheduled on your device.</li>
              <li><strong>Face ID / Touch ID</strong> — optional lock for the App. Biometric data never leaves your device and is never accessible to us.</li>
            </ul>
            <p className="mt-4">You can change these permissions at any time in iOS Settings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">6. Sharing and selling</h2>
            <p>
              We do not sell or rent your information. We share data only with the service providers described above
              (Apple and Google Firebase) to operate the App, or when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">7. Your choices and account deletion</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You can delete your account and its data in the App under Settings.</li>
              <li>Deleting the App removes all information stored on your device.</li>
              <li>You can request access to or deletion of any data we hold by emailing us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">8. Children</h2>
            <p>
              Ruqyah360 is not directed at children under 13, and we do not knowingly collect personal information
              from them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">9. Changes to this policy</h2>
            <p>
              We may update this policy when the App changes. The "Last updated" date above shows the latest version.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">10. Contact</h2>
            <p>
              Questions about this policy or your data: <a className="text-navy-900 underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
              See also our <Link className="text-navy-900 underline" to="/terms">Terms of Service</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
