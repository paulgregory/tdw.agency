import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import { SiteHeader } from '../../components/SiteHeader/SiteHeader'
import { Hero } from '../../components/Hero/Hero'
import { Underline } from '../../components/Embelishments/Underline/Underline'
import { Burst } from '../../components/Embelishments/Burst/Burst'
import { TeamProfiles } from '../../components/TeamProfiles/TeamProfiles'
import { DoubleUnderline } from '../../components/Embelishments/DoubleUnderline/DoubleUnderline'
import { ProofPoints } from '../../components/ProofPoints/ProofPoints'
import { TwoColumn } from '../../components/TwoColumn/TwoColumn'

export const metadata = {
  title: 'Privacy policy \\\\ Two Degrees West',
  description:
    'Learn more about Two Degrees West and how we help teams deliver clear, scalable digital products.',
}

export default function PrivacyPolicyPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <Hero
          title={
              <Underline colour='mint'>Privacy Policy</Underline>
          }
          subtitle='Last updated: April 2026'
        />
        <TwoColumn
          body={
            <>
              <h2>1. Introduction</h2>
              <p>Two Degrees West Agency Ltd (“we”, “us”, or “our”) is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal data when you visit our website.</p>
              <p>We comply with applicable UK data protection laws, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>

              <h2>2. Information we collect</h2>
              <p>We may collect and process the following data:</p>

              <h3>a) Information you provide directly</h3>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Company name (if provided)</li>
                <li>Any other information you submit via our contact form</li>
              </ul>
              <h3>b) Automatically collected information</h3>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on the site</li>
                <li>Referring website</li>
              </ul>
              <p>This information is collected via cookies and analytics tools (see Section 6).</p>

              <h2>3. How we use your information</h2>
              <p>We use your data to:</p>
              <ul>
                <li>Respond to enquiries submitted via our contact form</li>
                <li>Communicate with you about potential services</li>
                <li>Improve our website and user experience</li>
                <li>Monitor website performance and usage trends</li>
              </ul>
              <p>We do not sell or rent your personal data to third parties.</p>

              <h2>4. Legal basis for processing</h2>
              <p>We process your personal data under the following lawful bases:</p>
              <ul>
                <li>Legitimate interests - to respond to enquiries and operate our business</li>
                <li>Consent - where required (e.g. for analytics cookies)</li>
              </ul>

              <h2>5. Data retention</h2>
              <p>We retain personal data only for as long as necessary:</p>
              <ul>
                <li>Contact form enquiries: retained for up to 12 months unless a business relationship develops</li>
                <li>Analytics data: retained in accordance with Google Analytics settings</li>
              </ul>

              <h2>6. Cookies and analytics</h2>
              <p>We use cookies to enhance your experience and understand how our website is used.</p>

              <h3>Google Analytics</h3>
              <p>We may use Google Analytics to collect anonymised information about website usage. This helps us improve the performance and usability of our site.</p>
              <ul>
                <li>Google Analytics cookies are only set after you provide consent via our cookie banner</li>
                <li>You can withdraw your consent at any time</li>
              </ul>

              <h2>7. Sharing your data</h2>
              <p>We may share your data with:</p>
              <ul>
                <li>Service providers who support our website (e.g. hosting providers)</li>
                <li>Analytics providers (e.g. Google Analytics), where consent has been given</li>
              </ul>
              <p>We ensure appropriate safeguards are in place for any third-party processing.</p>

              <h2>8. Data security</h2>
              <p>We take reasonable technical and organisational measures to protect your personal data from unauthorised access, loss, or misuse.</p>

              <h2>9. Your rights</h2>
              <p>Under UK data protection law, you have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing</li>
                <li>Withdraw consent at any time (where applicable)</li>
              </ul>
              <p>To exercise your rights, please contact us using the details below.</p>

              <h2>10. Contact</h2>
              <p>If you have any questions about this Privacy Policy or how we handle your data, please contact:</p>
              <p><strong>Two Degrees West Agency Ltd</strong><br />Email: <a href='mailto:hello@tdw.agency'>hello@tdw.agency</a></p>

              <h2>11. Changes to this policy</h2>
              <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
            </>
          }
        />
      </main>
      <SiteFooter contactBanner={true} />
    </div>
  )
}
