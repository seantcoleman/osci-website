import { Link } from "react-router-dom";

const LAST_UPDATED = "June 24, 2026";
const CONTACT_EMAIL = "support@osci.app"; // update when domain is chosen

export default function Terms() {
  return (
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
        <h1 className="text-4xl font-black mb-3">Terms of Use</h1>
        <p className="text-pulse-text-secondary text-sm">Last updated: {LAST_UPDATED}</p>
      </header>

      <div>
        <Section title="1. Acceptance of Terms">
          <p>
            By downloading, installing, or using the Osci app or this website
            (collectively, the {'"Service"'}), you agree to be bound by these Terms of
            Use. If you do not agree, do not use the Service.
          </p>
        </Section>

        <Section title="2. License to use Osci">
          <p>
            We grant you a personal, non-exclusive, non-transferable, revocable
            license to use the Osci app for your personal, non-commercial purposes
            on Apple-branded devices you own or control, subject to these Terms and
            Apple's{" "}
            <a
              href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Standard End User License Agreement
            </a>
            .
          </p>
        </Section>

        <Section title="3. Subscriptions (Osci Pro)">
          <p>
            Osci offers optional in-app subscriptions under the name{" "}
            <strong>Osci Pro</strong>:
          </p>
          <ul>
            <li>
              Subscriptions are available on a monthly or yearly basis at the
              price displayed in the App Store for your region.
            </li>
            <li>
              Payment is charged to your Apple ID at confirmation of purchase.
            </li>
            <li>
              Subscriptions auto-renew unless cancelled at least 24 hours before
              the end of the current period.
            </li>
            <li>
              You can manage or cancel your subscription at any time via{" "}
              <strong>Settings → [your name] → Subscriptions</strong> on your
              device, or at{" "}
              <a
                href="https://apps.apple.com/account/subscriptions"
                target="_blank"
                rel="noopener noreferrer"
              >
                apps.apple.com/account/subscriptions
              </a>
              .
            </li>
            <li>
              No refunds are issued for unused portions of a subscription period,
              except as required by applicable law or Apple's refund policies.
            </li>
          </ul>
        </Section>

        <Section title="4. Your content">
          <p>
            You retain full ownership of any media you import into Osci. We do not
            claim any rights over your content.
          </p>
          <p>
            You are responsible for ensuring you have the rights to use any audio
            or video you import — including compliance with copyright law when
            sharing exported videos publicly.
          </p>
        </Section>

        <Section title="5. Prohibited uses">
          <p>You agree not to:</p>
          <ul>
            <li>Reverse engineer, decompile, or disassemble the app.</li>
            <li>Use the Service for any unlawful purpose.</li>
            <li>
              Attempt to circumvent subscription or export restrictions through
              technical means.
            </li>
            <li>
              Distribute, sublicense, or resell any part of the Service.
            </li>
          </ul>
        </Section>

        <Section title="6. Disclaimer of warranties">
          <p>
            The Service is provided {'"as is"'} and {'"as available"'} without warranties of
            any kind, express or implied. We do not warrant that the Service will
            be uninterrupted, error-free, or free of harmful components.
          </p>
        </Section>

        <Section title="7. Limitation of liability">
          <p>
            To the maximum extent permitted by applicable law, we are not liable
            for any indirect, incidental, special, consequential, or punitive
            damages arising from your use of the Service, even if we have been
            advised of the possibility of such damages.
          </p>
        </Section>

        <Section title="8. Governing law">
          <p>
            These Terms are governed by the laws of the jurisdiction in which the
            developer is based, without regard to conflict of law principles.
          </p>
        </Section>

        <Section title="9. Changes to Terms">
          <p>
            We may update these Terms at any time. Material changes will be
            reflected with an updated date at the top of this page. Continued use
            of the Service after changes constitutes acceptance of the revised
            Terms.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            Questions about these Terms? Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </Section>
      </div>
    </article>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
      <div className="text-pulse-text-secondary leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-pulse-cyan [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-white">
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
