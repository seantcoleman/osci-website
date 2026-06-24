import { Link } from "react-router-dom";
import ContactEmail from "../components/ContactEmail";
import PageMeta from "../components/PageMeta";
import { siteName } from "../lib/site";

const LAST_UPDATED = "June 24, 2026";

export default function Privacy() {
  return (
    <>
      <PageMeta
        title={`Privacy Policy — ${siteName}`}
        description={`Privacy Policy for ${siteName}, the audio waveform video maker for iOS.`}
        path="/privacy"
      />
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-pulse-text-secondary hover:text-white transition-colors mb-10"
        >
          <ArrowLeft /> Back to Home
        </Link>

        <header className="mb-12">
          <p className="text-xs font-semibold tracking-[3px] uppercase text-pulse-text-secondary mb-3">
            Legal
          </p>
          <h1 className="text-4xl font-black mb-3">Privacy Policy</h1>
          <p className="text-pulse-text-secondary text-sm">Last updated: {LAST_UPDATED}</p>
        </header>

        <div className="prose-osci">
          <Section title="1. Who we are">
            <p>
              Osci is an iOS application developed and operated by its developer ({'"we,"'}
              {' "us,"'} or {'"our"'}). This Privacy Policy explains how we handle information
              when you use the Osci app and this website.
            </p>
            <p>
              Questions? Email us at <ContactEmail />.
            </p>
          </Section>

          <Section title="2. Information we collect">
            <h3>2.1 Information you provide</h3>
            <p>
              Osci does not require you to create an account. We do not collect
              your name, email address, or any other personal information directly.
            </p>

            <h3>2.2 Media you import</h3>
            <p>
              When you import a video or audio clip, that media is processed
              entirely <strong>on your device</strong>. We never upload, store, or
              transmit your media files to any server.
            </p>

            <h3>2.3 Purchase and subscription data</h3>
            <p>
              Osci Pro subscriptions are handled by Apple through the App Store.
              We use <strong>RevenueCat</strong> to manage subscription status. RevenueCat
              may receive an anonymized device identifier and purchase receipt data
              to validate your subscription. No payment card details are ever shared
              with us. See{" "}
              <a
                href="https://www.revenuecat.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                RevenueCat's Privacy Policy
              </a>{" "}
              for details.
            </p>

            <h3>2.4 Crash and diagnostic reports</h3>
            <p>
              If you have opted in to share analytics with developers in iOS
              Settings, Apple may share anonymized crash reports with us to help
              improve app stability. These reports do not contain personal
              information or your media.
            </p>
          </Section>

          <Section title="3. How we use information">
            <p>We use the limited data described above solely to:</p>
            <ul>
              <li>Deliver and improve the Osci app experience.</li>
              <li>Verify your Osci Pro subscription status.</li>
              <li>Diagnose and fix crashes.</li>
            </ul>
            <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </Section>

          <Section title="4. Third-party services">
            <p>Osci uses the following third-party services:</p>
            <ul>
              <li>
                <strong>Apple App Store</strong> — subscription billing and app
                distribution. Subject to Apple's{" "}
                <a
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>RevenueCat</strong> — subscription management. Subject to
                RevenueCat's{" "}
                <a
                  href="https://www.revenuecat.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                .
              </li>
            </ul>
            <p>
              This website is hosted on <strong>Vercel</strong>. Vercel may log
              standard web server access data (IP addresses, browser type,
              timestamps) for security and performance purposes. See{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel's Privacy Policy
              </a>
              .
            </p>
          </Section>

          <Section title="5. Data retention">
            <p>
              Because we do not collect personal information, there is no personal
              data retained on our servers. Subscription status data held by
              RevenueCat is subject to RevenueCat's retention policies.
            </p>
          </Section>

          <Section title="6. Children's privacy">
            <p>
              Osci is not directed at children under the age of 13. We do not
              knowingly collect personal information from children.
            </p>
          </Section>

          <Section title="7. Your rights">
            <p>
              Depending on your location, you may have rights regarding your
              personal data under applicable privacy laws (such as GDPR or CCPA).
              Since we collect minimal data, most requests can be handled simply by
              contacting us at <ContactEmail />.
            </p>
          </Section>

          <Section title="8. Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. Material changes
              will be noted at the top of this page with an updated date. Continued
              use of Osci after changes constitutes your acceptance of the revised
              policy.
            </p>
          </Section>

          <Section title="9. Contact">
            <p>
              For privacy questions or requests, email <ContactEmail />.
            </p>
          </Section>
        </div>
      </article>
    </>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
      <div className="text-pulse-text-secondary leading-relaxed space-y-4 [&_h3]:text-white [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-pulse-cyan [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-white">
        {children}
      </div>
    </section>
  );
}

function ArrowLeft() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
