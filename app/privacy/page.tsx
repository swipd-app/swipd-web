import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Footer } from "@/components/footer";
import { APP_NAME, COMPANY, SITE_URL } from "@/lib/constants";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: `Privacy Policy - ${APP_NAME}`,
  description: `Privacy Policy for ${APP_NAME}`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Header */}
      <header className="border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: January 18, 2026</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to {APP_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>

              <h3 className="text-xl font-medium mt-6 mb-3">1. Information You Provide</h3>
              <p className="text-muted-foreground mb-2"><strong>Apple Sign-In Data (iOS):</strong> When you sign in with Apple ID, we collect:</p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Apple ID identifier (anonymized)</li>
                <li>Email address (if provided)</li>
                <li>Full name (if provided)</li>
              </ul>

              <p className="text-muted-foreground mb-2 mt-4"><strong>Google Sign-In Data (Android):</strong> When you sign in with Google, we collect:</p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Google account identifier</li>
                <li>Email address</li>
                <li>Display name (if provided)</li>
              </ul>

              <p className="text-muted-foreground mb-2 mt-4"><strong>User Preferences:</strong></p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Country/region selection</li>
                <li>Product category preferences</li>
                <li>Store preferences</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">2. Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-2"><strong>Device Information:</strong></p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Device ID (for guest sessions)</li>
                <li>Operating system version</li>
                <li>App version</li>
                <li>Device model</li>
              </ul>

              <p className="text-muted-foreground mb-2 mt-4"><strong>Usage Data:</strong></p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Product interactions (swipes, likes, saves)</li>
                <li>Wishlist items</li>
                <li>Product views and clicks</li>
                <li>Session duration and frequency</li>
              </ul>

              <p className="text-muted-foreground mb-2 mt-4"><strong>Performance Data:</strong></p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>App crashes and errors</li>
                <li>Feature usage statistics</li>
                <li>Performance metrics</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">3. Information from Third Parties</h3>
              <p className="text-muted-foreground mb-2"><strong>Product Information:</strong> We collect product data from affiliate partners including:</p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Amazon and other retail partners</li>
                <li>Product images, descriptions, and prices</li>
                <li>Availability and stock status</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the collected information for:</p>

              <h3 className="text-lg font-medium mt-4 mb-2">1. Service Delivery</h3>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Providing personalized product recommendations</li>
                <li>Maintaining your wishlist across devices</li>
                <li>Processing affiliate clicks and tracking commissions</li>
              </ul>

              <h3 className="text-lg font-medium mt-4 mb-2">2. Service Improvement</h3>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Analyzing user behavior and preferences</li>
                <li>Improving recommendation algorithms</li>
                <li>Enhancing app performance and stability</li>
              </ul>

              <h3 className="text-lg font-medium mt-4 mb-2">3. Communication</h3>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Sending price drop notifications (when enabled)</li>
                <li>Providing customer support</li>
                <li>Sending important service updates</li>
              </ul>

              <h3 className="text-lg font-medium mt-4 mb-2">4. Legal Compliance</h3>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Complying with legal obligations</li>
                <li>Protecting our rights and preventing fraud</li>
                <li>Enforcing our Terms of Service</li>
              </ul>
            </section>

            {/* Data Sharing and Disclosure */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>

              <h3 className="text-xl font-medium mt-4 mb-3">We Share Information With</h3>

              <p className="text-muted-foreground mb-2"><strong>1. Affiliate Partners</strong></p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>When you click on a product, we share anonymized click data with affiliate partners (e.g., Amazon) to track commissions</li>
                <li>No personally identifiable information is shared</li>
              </ul>

              <p className="text-muted-foreground mb-2 mt-4"><strong>2. Service Providers</strong></p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Cloud hosting providers (for data storage)</li>
                <li>Analytics services (for app performance)</li>
                <li>Push notification services</li>
              </ul>

              <p className="text-muted-foreground mb-2 mt-4"><strong>3. Legal Requirements</strong></p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>When required by law or legal process</li>
                <li>To protect our rights or the safety of users</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">We Do NOT</h3>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Sell your personal information to third parties</li>
                <li>Share your email or personal details with advertisers</li>
                <li>Use your data for purposes other than stated in this policy</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-muted-foreground mb-4">We implement appropriate technical and organizational measures to protect your data:</p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li><strong>Encryption:</strong> Data is encrypted in transit (HTTPS/TLS) and at rest</li>
                <li><strong>Access Controls:</strong> Limited access to personal data on a need-to-know basis</li>
                <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
                <li><strong>Secure Infrastructure:</strong> Cloud providers with SOC 2 compliance</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            {/* Your Rights and Choices */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>

              <h3 className="text-xl font-medium mt-4 mb-3">Account Management</h3>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li><strong>Access:</strong> View your account information in the Settings tab</li>
                <li><strong>Update:</strong> Modify your preferences anytime</li>
                <li><strong>Delete:</strong> Request account deletion through Settings &gt; Delete Account</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">Data Rights (GDPR/CCPA)</h3>
              <p className="text-muted-foreground mb-2">You have the right to:</p>
              <ol className="list-decimal list-inside text-muted-foreground ml-4 space-y-1">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate data</li>
                <li><strong>Erasure:</strong> Request deletion of your data</li>
                <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong>Object:</strong> Object to certain data processing activities</li>
                <li><strong>Withdraw Consent:</strong> Opt-out of optional data collection</li>
              </ol>
              <p className="text-muted-foreground mt-4">
                To exercise these rights, contact us at{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a>
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">Marketing Communications</h3>
              <p className="text-muted-foreground mb-2">You can opt-out of promotional communications:</p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Disable push notifications in device settings</li>
                <li>Unsubscribe from emails via the link provided</li>
                <li>Adjust preferences in-app</li>
              </ul>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
              <p className="text-muted-foreground mb-4">We retain your data for as long as necessary to:</p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations (e.g., tax records)</li>
                <li>Resolve disputes and enforce agreements</li>
              </ul>

              <p className="text-muted-foreground mt-4 mb-2"><strong>Retention Periods:</strong></p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Active accounts: Duration of account + 30 days</li>
                <li>Deleted accounts: 30 days (for recovery), then permanently deleted</li>
                <li>Usage analytics: Aggregated data retained indefinitely</li>
                <li>Guest sessions: 90 days of inactivity</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
              <p className="text-muted-foreground">
                {APP_NAME} is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13. If we discover we have collected data from a child under 13, we will delete it immediately.
              </p>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
              <p className="text-muted-foreground mb-4">
                Your data may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place:
              </p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Standard Contractual Clauses (EU)</li>
                <li>Privacy Shield principles (where applicable)</li>
                <li>Adequate data protection measures</li>
              </ul>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">We use the following technologies:</p>
              <ol className="list-decimal list-inside text-muted-foreground ml-4 space-y-1">
                <li><strong>Essential Cookies:</strong> Required for app functionality</li>
                <li><strong>Analytics:</strong> To understand how you use our app</li>
                <li><strong>Preferences:</strong> To remember your settings</li>
              </ol>
              <p className="text-muted-foreground mt-4">
                You can control tracking through your device settings and our app preferences.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground mb-4">We may update this Privacy Policy periodically. We will notify you of material changes by:</p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Posting the new policy in the app</li>
                <li>Sending an email notification (for registered users)</li>
                <li>Displaying an in-app notice</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Continued use of {APP_NAME} after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our app contains links to third-party websites and services (e.g., Amazon product pages). We are not responsible for the privacy practices of these third parties. Please review their privacy policies.
              </p>
            </section>

            {/* California Privacy Rights (CCPA) */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">California Privacy Rights (CCPA)</h2>
              <p className="text-muted-foreground mb-4">California residents have additional rights:</p>
              <ol className="list-decimal list-inside text-muted-foreground ml-4 space-y-1">
                <li><strong>Right to Know:</strong> Categories of personal information collected</li>
                <li><strong>Right to Delete:</strong> Request deletion of personal information</li>
                <li><strong>Right to Opt-Out:</strong> Opt-out of sale of personal information (Note: We do not sell personal information)</li>
                <li><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising your rights</li>
              </ol>
            </section>

            {/* EU Privacy Rights (GDPR) */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">EU Privacy Rights (GDPR)</h2>
              <p className="text-muted-foreground mb-4">EU residents have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Lodge a complaint with a supervisory authority</li>
                <li>Receive data in a structured, commonly used format</li>
                <li>Object to automated decision-making</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Our data protection officer can be reached at{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a>
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">If you have questions about this Privacy Policy or our data practices:</p>
              <p className="text-muted-foreground">
                <strong>Email:</strong>{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a>
              </p>
              <p className="text-muted-foreground">
                <strong>Website:</strong>{" "}
                <a href={SITE_URL} className="text-primary hover:underline">{SITE_URL}</a>
              </p>
              <p className="text-muted-foreground mt-4">
                For data protection inquiries (EU):{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a>
              </p>
            </section>

            {/* Consent */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Consent</h2>
              <p className="text-muted-foreground">
                By using {APP_NAME}, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
              </p>
            </section>

            <hr className="border-border my-8" />
            <p className="text-muted-foreground text-sm italic">
              This Privacy Policy is effective as of January 18, 2026
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
