import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { APP_NAME, COMPANY } from "@/lib/constants";

export const metadata = {
  title: `Terms of Service - ${APP_NAME}`,
  description: `End User License Agreement (EULA) and Terms of Use for ${APP_NAME}`,
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Content */}
      <main className="flex-1 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">End User License Agreement (EULA) and Terms of Use</h1>
          <p className="text-muted-foreground mb-8">Last Updated: January 18, 2026</p>

          {/* Agreement to Terms */}
          <div className="prose prose-neutral dark:prose-invert max-w-none mb-8">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By downloading, installing, or using the {APP_NAME} mobile application (&quot;App&quot;), you agree to be bound by these Terms of Use (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.
            </p>
            <p className="text-muted-foreground mt-2">
              This is a legal agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and {APP_NAME} (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            </p>
          </div>

          {/* Table of Contents */}
          <nav className="mb-12 p-6 bg-muted/50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ol className="grid md:grid-cols-2 gap-2 text-muted-foreground list-decimal list-inside">
              <li><a href="#license-grant" className="hover:text-primary transition-colors">License Grant</a></li>
              <li><a href="#acceptable-use" className="hover:text-primary transition-colors">Acceptable Use</a></li>
              <li><a href="#user-accounts" className="hover:text-primary transition-colors">User Accounts</a></li>
              <li><a href="#user-content" className="hover:text-primary transition-colors">User Content</a></li>
              <li><a href="#affiliate-disclosures" className="hover:text-primary transition-colors">Affiliate Disclosures</a></li>
              <li><a href="#third-party-services" className="hover:text-primary transition-colors">Third-Party Services</a></li>
              <li><a href="#intellectual-property" className="hover:text-primary transition-colors">Intellectual Property</a></li>
              <li><a href="#disclaimers" className="hover:text-primary transition-colors">Disclaimers</a></li>
              <li><a href="#limitation-of-liability" className="hover:text-primary transition-colors">Limitation of Liability</a></li>
              <li><a href="#indemnification" className="hover:text-primary transition-colors">Indemnification</a></li>
              <li><a href="#termination" className="hover:text-primary transition-colors">Termination</a></li>
              <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#changes-to-terms" className="hover:text-primary transition-colors">Changes to Terms</a></li>
              <li><a href="#dispute-resolution" className="hover:text-primary transition-colors">Dispute Resolution</a></li>
              <li><a href="#miscellaneous" className="hover:text-primary transition-colors">Miscellaneous</a></li>
              <li><a href="#contact-information" className="hover:text-primary transition-colors">Contact Information</a></li>
            </ol>
          </nav>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12">
            {/* 1. License Grant */}
            <section id="license-grant">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">1. License Grant</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">1.1 Limited License</h3>
                  <p className="text-muted-foreground mb-2">Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Download and install the App on devices you own or control</li>
                    <li>Access and use the App for personal, non-commercial purposes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">1.2 License Restrictions</h3>
                  <p className="text-muted-foreground mb-2">You may NOT:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li><strong>Copy or modify</strong> the App, except as expressly permitted</li>
                    <li><strong>Reverse engineer</strong>, decompile, or disassemble the App</li>
                    <li><strong>Remove or alter</strong> any proprietary notices or labels</li>
                    <li><strong>Rent, lease, lend, sell</strong>, or sublicense the App</li>
                    <li><strong>Use the App</strong> for any commercial purpose without our consent</li>
                    <li><strong>Transfer</strong> the App to any third party</li>
                    <li><strong>Create derivative works</strong> based on the App</li>
                    <li><strong>Use the App</strong> in any manner that violates applicable laws</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">1.3 Updates and Modifications</h3>
                  <p className="text-muted-foreground mb-2">We may:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Update the App to improve functionality, security, or compliance</li>
                    <li>Modify or discontinue features with or without notice</li>
                    <li>Require you to accept updates to continue using the App</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">Continued use of the App after updates constitutes acceptance of changes.</p>
                </div>
              </div>
            </section>

            {/* 2. Acceptable Use */}
            <section id="acceptable-use">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">2. Acceptable Use</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">2.1 Permitted Use</h3>
                  <p className="text-muted-foreground mb-2">You may use {APP_NAME} to:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Discover and browse products</li>
                    <li>Create and manage wishlists</li>
                    <li>Access product information and pricing</li>
                    <li>Navigate to retailer websites to make purchases</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">2.2 Prohibited Conduct</h3>
                  <p className="text-muted-foreground mb-4">You agree NOT to:</p>

                  <p className="text-muted-foreground font-medium mb-2">Illegal Activities</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1 mb-4">
                    <li>Violate any local, state, national, or international law</li>
                    <li>Engage in fraudulent activities or misrepresentation</li>
                    <li>Infringe upon intellectual property rights</li>
                  </ul>

                  <p className="text-muted-foreground font-medium mb-2">System Abuse</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1 mb-4">
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use automated tools (bots, scrapers) without permission</li>
                    <li>Overload or interfere with App infrastructure</li>
                    <li>Introduce viruses, malware, or harmful code</li>
                  </ul>

                  <p className="text-muted-foreground font-medium mb-2">Data Misuse</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1 mb-4">
                    <li>Collect or harvest user information without consent</li>
                    <li>Use the App to spam or send unsolicited communications</li>
                    <li>Impersonate others or create fake accounts</li>
                  </ul>

                  <p className="text-muted-foreground font-medium mb-2">Commercial Misuse</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Use affiliate links for commercial gain without authorization</li>
                    <li>Manipulate prices or product information</li>
                    <li>Resell or redistribute App content</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">2.3 Monitoring and Enforcement</h3>
                  <p className="text-muted-foreground mb-2">We reserve the right to:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Monitor usage for compliance with these Terms</li>
                    <li>Investigate suspected violations</li>
                    <li>Take appropriate action, including account suspension or termination</li>
                    <li>Cooperate with law enforcement authorities</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. User Accounts */}
            <section id="user-accounts">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">3. User Accounts</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">3.1 Account Types</h3>

                  <p className="text-muted-foreground font-medium mb-2">Guest Accounts</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1 mb-4">
                    <li>No registration required</li>
                    <li>Limited to device-specific data</li>
                    <li>Data retained for 90 days of inactivity</li>
                  </ul>

                  <p className="text-muted-foreground font-medium mb-2">Registered Accounts (Apple Sign-In)</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Requires Apple ID authentication</li>
                    <li>Cross-device data synchronization</li>
                    <li>Enhanced features and personalization</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">3.2 Account Responsibility</h3>
                  <p className="text-muted-foreground mb-2">You are responsible for:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Maintaining the security of your Apple ID</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us of unauthorized access</li>
                    <li>Ensuring your account information is accurate</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">3.3 Account Termination</h3>

                  <p className="text-muted-foreground font-medium mb-2">By You:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1 mb-4">
                    <li>Sign out: Settings &gt; Sign Out</li>
                    <li>Delete account: Settings &gt; Delete Account (permanent)</li>
                  </ul>

                  <p className="text-muted-foreground font-medium mb-2">By Us:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Violation of these Terms</li>
                    <li>Fraudulent or illegal activity</li>
                    <li>Request by law enforcement</li>
                    <li>Extended inactivity (guest accounts)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">3.4 Effect of Termination</h3>
                  <p className="text-muted-foreground mb-2">Upon termination:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Your license to use the App terminates immediately</li>
                    <li>We may delete your data (subject to legal retention requirements)</li>
                    <li>Outstanding obligations survive termination</li>
                    <li>You must cease all use of the App</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. User Content */}
            <section id="user-content">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">4. User Content</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">4.1 Your Data</h3>
                  <p className="text-muted-foreground mb-2">You retain ownership of data you provide, including:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Wishlist items and preferences</li>
                    <li>Account information</li>
                    <li>Interaction history</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">4.2 Limited License to Us</h3>
                  <p className="text-muted-foreground mb-2">By using {APP_NAME}, you grant us a worldwide, non-exclusive, royalty-free license to:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Store and process your data to provide services</li>
                    <li>Use anonymized/aggregated data for analytics and improvements</li>
                    <li>Display your preferences to personalize recommendations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">4.3 Data Accuracy</h3>
                  <p className="text-muted-foreground mb-2">You represent and warrant that:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Information you provide is accurate and current</li>
                    <li>You have the right to share any data you provide</li>
                    <li>Your use does not violate third-party rights</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">4.4 Prohibited Content</h3>
                  <p className="text-muted-foreground mb-2">Do not submit content that:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Is illegal, harmful, or offensive</li>
                    <li>Violates intellectual property rights</li>
                    <li>Contains viruses or malicious code</li>
                    <li>Includes personal information of others without consent</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. Affiliate Disclosures */}
            <section id="affiliate-disclosures">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">5. Affiliate Disclosures</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">5.1 Affiliate Relationship</h3>
                  <p className="text-muted-foreground p-4 bg-muted/50 rounded-lg">
                    <strong>Important Disclosure:</strong> {APP_NAME} participates in affiliate marketing programs. When you click on product links and make purchases, we may earn a commission at no additional cost to you.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">5.2 Affiliate Partners</h3>
                  <p className="text-muted-foreground mb-2">Current partners include:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li><strong>Amazon Associates Program</strong></li>
                    <li>Additional retailers (updated periodically)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">5.3 Commission Structure</h3>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Commissions are paid by retailers, not users</li>
                    <li>Prices are identical whether purchasing through {APP_NAME} or directly</li>
                    <li>Commission rates vary by product category (typically 1-10%)</li>
                    <li>We do not have visibility into your purchase details</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">5.4 Product Recommendations</h3>
                  <p className="text-muted-foreground mb-2">Our recommendations are based on:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>User preferences and behavior</li>
                    <li>Product popularity and ratings</li>
                    <li>Affiliate commission potential (disclosed)</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">We strive for unbiased recommendations but acknowledge that affiliate relationships may influence product selection.</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">5.5 Price Accuracy</h3>
                  <p className="text-muted-foreground mb-2">While we update pricing regularly:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Prices may change without notice</li>
                    <li>Always verify pricing on retailer&apos;s website</li>
                    <li>We are not responsible for pricing errors</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 6. Third-Party Services */}
            <section id="third-party-services">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">6. Third-Party Services</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">6.1 Retailer Websites</h3>
                  <p className="text-muted-foreground mb-2">
                    When you click product links, you are redirected to third-party retailer websites (e.g., Amazon). These websites are governed by their own terms and privacy policies.
                  </p>
                  <p className="text-muted-foreground mb-2"><strong>We are NOT responsible for:</strong></p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Product quality, availability, or fulfillment</li>
                    <li>Retailer terms, policies, or practices</li>
                    <li>Transactions between you and retailers</li>
                    <li>Returns, refunds, or customer service issues</li>
                  </ul>
                  <p className="text-muted-foreground mt-2 font-medium">All purchases are contracts between you and the retailer.</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">6.2 Apple Services</h3>
                  <p className="text-muted-foreground mb-2">{APP_NAME} uses Apple Sign-In, subject to Apple&apos;s terms:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li><a href="https://www.apple.com/legal/internet-services/terms/site.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apple Terms of Service</a></li>
                    <li><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apple Privacy Policy</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">6.3 Third-Party Links</h3>
                  <p className="text-muted-foreground">
                    Our App may contain links to third-party websites or services. We do not endorse or control these third parties and are not responsible for their content, policies, or practices.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. Intellectual Property */}
            <section id="intellectual-property">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">7. Intellectual Property</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">7.1 Our Ownership</h3>
                  <p className="text-muted-foreground mb-2">{APP_NAME} and all related content are protected by copyright, trademark, and other intellectual property laws. We (or our licensors) own all rights to:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>App source code and design</li>
                    <li>{APP_NAME} name, logo, and branding</li>
                    <li>App interface and user experience</li>
                    <li>Original content and documentation</li>
                    <li>Recommendation algorithms and technology</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">7.2 Trademarks</h3>
                  <p className="text-muted-foreground">
                    &quot;{APP_NAME}&quot; and associated logos are trademarks of {APP_NAME}. You may not use our trademarks without prior written permission.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">7.3 Third-Party Content</h3>
                  <p className="text-muted-foreground">
                    Product images, descriptions, and other content are owned by retailers and manufacturers. We display this content under license or fair use principles for informational purposes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">7.4 Feedback</h3>
                  <p className="text-muted-foreground mb-2">If you provide feedback, suggestions, or ideas:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>You grant us unlimited rights to use, modify, and commercialize them</li>
                    <li>No compensation is owed to you</li>
                    <li>We have no obligation to implement or credit your feedback</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 8. Disclaimers */}
            <section id="disclaimers">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">8. Disclaimers</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">8.1 &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;</h3>
                  <p className="text-muted-foreground mb-2 uppercase font-medium">
                    THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li><strong>Merchantability:</strong> Fitness for a particular purpose</li>
                    <li><strong>Non-infringement:</strong> Respect for third-party rights</li>
                    <li><strong>Accuracy:</strong> Of product information, prices, or availability</li>
                    <li><strong>Reliability:</strong> Uninterrupted or error-free operation</li>
                    <li><strong>Security:</strong> Absolute protection against unauthorized access</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">8.2 No Guarantee of Results</h3>
                  <p className="text-muted-foreground mb-2">We do not guarantee:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Specific savings or benefits from using {APP_NAME}</li>
                    <li>Availability of products or prices shown</li>
                    <li>Affiliate commissions will be tracked or paid correctly</li>
                    <li>Compatibility with all devices or operating systems</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">8.3 Product Information</h3>
                  <p className="text-muted-foreground mb-2">Product information is provided for convenience only:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Sourced from third-party retailers</li>
                    <li>May be outdated or inaccurate</li>
                    <li>Not independently verified by us</li>
                    <li>Subject to change without notice</li>
                  </ul>
                  <p className="text-muted-foreground mt-2 font-medium">
                    Always verify product details, prices, and availability on the retailer&apos;s website before purchasing.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">8.4 No Professional Advice</h3>
                  <p className="text-muted-foreground mb-2">{APP_NAME} does not provide:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Financial, legal, or professional advice</li>
                    <li>Product recommendations constituting endorsements</li>
                    <li>Guarantees of product quality or suitability</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 9. Limitation of Liability */}
            <section id="limitation-of-liability">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">9. Limitation of Liability</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">9.1 Limitation of Damages</h3>
                  <p className="text-muted-foreground mb-2 uppercase font-medium">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, {APP_NAME} AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR:
                  </p>

                  <p className="text-muted-foreground font-medium mb-2">Indirect Damages</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1 mb-4">
                    <li>Loss of profits, revenue, or business opportunities</li>
                    <li>Loss of data or information</li>
                    <li>Cost of substitute goods or services</li>
                    <li>Emotional distress or reputational harm</li>
                  </ul>

                  <p className="text-muted-foreground font-medium mb-2">Direct Damages</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Arising from use or inability to use the App</li>
                    <li>Unauthorized access to your account or data</li>
                    <li>Errors, bugs, or App malfunctions</li>
                    <li>Third-party conduct (including retailers)</li>
                  </ul>

                  <p className="text-muted-foreground mt-2 font-medium">Even if we have been advised of the possibility of such damages.</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">9.2 Cap on Liability</h3>
                  <p className="text-muted-foreground mb-2">Our total liability for any claims arising from your use of {APP_NAME} shall not exceed:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li><strong>$100 USD</strong>, or</li>
                    <li>The amount you paid to us in the past 12 months (currently $0 as the App is free)</li>
                  </ul>
                  <p className="text-muted-foreground mt-2 font-medium">Whichever is greater.</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">9.3 Jurisdictional Limitations</h3>
                  <p className="text-muted-foreground">
                    Some jurisdictions do not allow limitations on implied warranties or exclusions of certain damages. In such cases, the above limitations may not apply, and our liability shall be limited to the fullest extent permitted by applicable law.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">9.4 Basis of the Bargain</h3>
                  <p className="text-muted-foreground mb-2">You acknowledge that:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>The App is provided free of charge</li>
                    <li>These limitations are a fundamental element of our agreement</li>
                    <li>We would not provide the App without these limitations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 10. Indemnification */}
            <section id="indemnification">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">10. Indemnification</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">10.1 Your Indemnification Obligation</h3>
                  <p className="text-muted-foreground mb-2">
                    You agree to indemnify, defend, and hold harmless {APP_NAME} and its affiliates, officers, directors, employees, agents, and licensors from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys&apos; fees) arising from:
                  </p>
                  <ol className="list-decimal list-inside text-muted-foreground ml-4 space-y-1">
                    <li><strong>Your Use of the App:</strong> Including violations of these Terms</li>
                    <li><strong>Your Content:</strong> Information or data you provide</li>
                    <li><strong>Your Conduct:</strong> Actions taken while using {APP_NAME}</li>
                    <li><strong>Third-Party Rights:</strong> Infringement of intellectual property or other rights</li>
                    <li><strong>Legal Violations:</strong> Breach of applicable laws or regulations</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">10.2 Defense and Settlement</h3>
                  <p className="text-muted-foreground mb-2">We reserve the right to:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Assume exclusive defense and control of any matter subject to indemnification</li>
                    <li>Require your cooperation in defending such claims</li>
                    <li>Approve any settlement that affects our rights or obligations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 11. Termination */}
            <section id="termination">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">11. Termination</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">11.1 Termination by You</h3>
                  <p className="text-muted-foreground mb-2">You may stop using {APP_NAME} at any time by:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Uninstalling the App from your device</li>
                    <li>Signing out of your account</li>
                    <li>Requesting account deletion (Settings &gt; Delete Account)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">11.2 Termination by Us</h3>
                  <p className="text-muted-foreground mb-2">We may suspend or terminate your access immediately, without notice, for:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Violation of these Terms</li>
                    <li>Illegal or fraudulent activity</li>
                    <li>Threat to App security or integrity</li>
                    <li>Extended inactivity (guest accounts: 90 days)</li>
                    <li>Court order or legal requirement</li>
                    <li>Business decision to discontinue the App</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">11.3 Effect of Termination</h3>
                  <p className="text-muted-foreground mb-2">Upon termination:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Your license terminates immediately</li>
                    <li>You must cease using the App and delete all copies</li>
                    <li>We may delete your data (subject to legal obligations)</li>
                    <li>Provisions that by nature should survive (e.g., indemnification, disclaimers) remain in effect</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">11.4 No Refunds</h3>
                  <p className="text-muted-foreground">
                    Since {APP_NAME} is free, no refunds are applicable. If we introduce paid features in the future, refund terms will be specified separately.
                  </p>
                </div>
              </div>
            </section>

            {/* 12. Privacy */}
            <section id="privacy">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">12. Privacy</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">12.1 Privacy Policy</h3>
                  <p className="text-muted-foreground mb-2">
                    Your privacy is important to us. Our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> explains:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>What data we collect</li>
                    <li>How we use, share, and protect your data</li>
                    <li>Your privacy rights and choices</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">By using {APP_NAME}, you consent to our data practices as described in the Privacy Policy.</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">12.2 Data Collection</h3>
                  <p className="text-muted-foreground mb-2">We collect:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Account information (Apple ID, email)</li>
                    <li>Usage data (swipes, clicks, wishlists)</li>
                    <li>Device information (model, OS version)</li>
                    <li>Analytics and performance data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">12.3 Your Rights</h3>
                  <p className="text-muted-foreground mb-2">You have rights to:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Access your personal data</li>
                    <li>Request corrections or deletions</li>
                    <li>Opt-out of certain data uses</li>
                    <li>Export your data (data portability)</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">See our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> for details on exercising these rights.</p>
                </div>
              </div>
            </section>

            {/* 13. Changes to Terms */}
            <section id="changes-to-terms">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">13. Changes to Terms</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">13.1 Right to Modify</h3>
                  <p className="text-muted-foreground mb-2">We reserve the right to modify these Terms at any time. Changes may be made to:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Reflect legal or regulatory requirements</li>
                    <li>Improve clarity or user experience</li>
                    <li>Address new features or services</li>
                    <li>Respond to user feedback</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">13.2 Notification of Changes</h3>
                  <p className="text-muted-foreground mb-2">For material changes, we will notify you by:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Displaying an in-app notification</li>
                    <li>Sending an email (for registered users)</li>
                    <li>Posting updated Terms with a new &quot;Last Updated&quot; date</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">13.3 Acceptance of Changes</h3>
                  <p className="text-muted-foreground">
                    By continuing to use {APP_NAME} after changes take effect, you accept the revised Terms. If you do not agree, you must stop using the App and may delete your account.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">13.4 Version History</h3>
                  <p className="text-muted-foreground">
                    Previous versions of these Terms are available upon request at{" "}
                    <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a>.
                  </p>
                </div>
              </div>
            </section>

            {/* 14. Dispute Resolution */}
            <section id="dispute-resolution">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">14. Dispute Resolution</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">14.1 Informal Resolution</h3>
                  <p className="text-muted-foreground">
                    Before filing a legal claim, you agree to contact us at{" "}
                    <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a>{" "}
                    to attempt to resolve the dispute informally. We will work in good faith to reach an amicable resolution.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">14.2 Binding Arbitration</h3>
                  <p className="text-muted-foreground mb-2">
                    If informal resolution fails, any dispute arising from these Terms or your use of {APP_NAME} shall be resolved through <strong>binding arbitration</strong> rather than in court, except:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1 mb-4">
                    <li>Small claims court actions (if eligible)</li>
                    <li>Intellectual property disputes</li>
                    <li>Injunctive or equitable relief</li>
                  </ul>

                  <p className="text-muted-foreground font-medium mb-2">Arbitration Terms:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Governed by the American Arbitration Association (AAA) rules</li>
                    <li>One arbitrator mutually agreed upon</li>
                    <li>Language: English</li>
                    <li>Costs: Each party bears its own costs unless otherwise required by law</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">14.3 Class Action Waiver</h3>
                  <p className="text-muted-foreground mb-2 uppercase font-medium">
                    YOU AGREE TO RESOLVE DISPUTES INDIVIDUALLY, NOT AS PART OF A CLASS ACTION, CONSOLIDATED ACTION, OR REPRESENTATIVE ACTION.
                  </p>
                  <p className="text-muted-foreground mb-2">You waive the right to:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Participate in class actions</li>
                    <li>Bring claims on behalf of others</li>
                    <li>Consolidate your claim with others&apos; claims</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">This waiver is governed by the Federal Arbitration Act and survives termination of these Terms.</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">14.4 Exceptions</h3>
                  <p className="text-muted-foreground mb-2">Notwithstanding the above, either party may:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Seek injunctive or equitable relief in court</li>
                    <li>Bring claims in small claims court (if eligible)</li>
                    <li>Report violations to law enforcement</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">14.5 Governing Law</h3>
                  <p className="text-muted-foreground">
                    These Terms are governed by applicable laws, without regard to conflict of law principles.
                  </p>
                </div>
              </div>
            </section>

            {/* 15. Miscellaneous */}
            <section id="miscellaneous">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">15. Miscellaneous</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">15.1 Entire Agreement</h3>
                  <p className="text-muted-foreground">
                    These Terms, together with our Privacy Policy, constitute the entire agreement between you and {APP_NAME} regarding the App, superseding any prior agreements or understandings.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">15.2 Severability</h3>
                  <p className="text-muted-foreground">
                    If any provision of these Terms is found invalid or unenforceable, the remaining provisions remain in full force and effect. Invalid provisions will be modified to reflect the parties&apos; intent to the fullest extent permitted by law.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">15.3 Waiver</h3>
                  <p className="text-muted-foreground">
                    Our failure to enforce any provision does not constitute a waiver of that provision or any other. Waivers must be in writing and signed by an authorized representative.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">15.4 Assignment</h3>
                  <p className="text-muted-foreground">
                    You may not assign or transfer these Terms or your rights under them without our prior written consent. We may assign these Terms at any time without restriction, including in connection with a merger, acquisition, or sale of assets.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">15.5 Force Majeure</h3>
                  <p className="text-muted-foreground mb-2">We are not liable for delays or failures in performance due to causes beyond our reasonable control, including:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Natural disasters or acts of God</li>
                    <li>War, terrorism, or civil unrest</li>
                    <li>Government actions or legal restrictions</li>
                    <li>Network or infrastructure failures</li>
                    <li>Pandemics or public health emergencies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">15.6 Export Compliance</h3>
                  <p className="text-muted-foreground">
                    You agree to comply with all export and import laws and regulations applicable to your use of the App. You represent that you are not located in a country subject to U.S. embargo or listed as a &quot;terrorist supporting&quot; country.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">15.7 Language</h3>
                  <p className="text-muted-foreground">
                    These Terms are written in English. Any translations are provided for convenience only. In case of conflict, the English version prevails.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">15.8 No Third-Party Beneficiaries</h3>
                  <p className="text-muted-foreground">
                    These Terms are for the benefit of you and {APP_NAME} only. No third party has the right to enforce any provision.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">15.9 Survival</h3>
                  <p className="text-muted-foreground">
                    Provisions that by their nature should survive termination (including indemnification, disclaimers, limitations of liability, and dispute resolution) remain in effect after termination.
                  </p>
                </div>
              </div>
            </section>

            {/* 16. Contact Information */}
            <section id="contact-information">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">16. Contact Information</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Questions or Concerns?</h3>
                  <p className="text-muted-foreground mb-4">If you have questions about these Terms, please contact us:</p>

                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">General Inquiries</p>
                      <p className="text-muted-foreground">
                        Email: <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a>
                      </p>
                    </div>

                    <div>
                      <p className="font-medium">Privacy Matters</p>
                      <p className="text-muted-foreground">
                        Email: <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a>
                      </p>
                      <p className="text-muted-foreground">
                        See our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                      </p>
                    </div>

                    <div>
                      <p className="font-medium">Support</p>
                      <p className="text-muted-foreground">
                        Email: <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a>
                      </p>
                      <p className="text-muted-foreground">
                        See our <Link href="/support" className="text-primary hover:underline">Support & FAQ</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="mt-12 p-8 bg-muted/50 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Acknowledgment</h2>
              <p className="text-muted-foreground uppercase font-medium mb-4">
                BY DOWNLOADING, INSTALLING, OR USING {APP_NAME}, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF USE.
              </p>
              <p className="text-muted-foreground uppercase font-medium">
                IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THE APP.
              </p>
            </section>

            {/* Apple App Store Specific Terms */}
            <section id="apple-terms">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">Apple App Store Specific Terms</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Acknowledgment</h3>
                  <p className="text-muted-foreground mb-2">You acknowledge that:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>These Terms are between you and {APP_NAME}, not Apple</li>
                    <li>Apple has no obligation to provide support for the App</li>
                    <li>Apple is not responsible for addressing claims related to the App</li>
                    <li>Apple is a third-party beneficiary of these Terms and may enforce them</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Scope of License</h3>
                  <p className="text-muted-foreground">
                    The license granted is limited to a non-transferable right to use {APP_NAME} on Apple-branded devices you own or control, as permitted by Apple&apos;s App Store Terms of Service.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Maintenance and Support</h3>
                  <p className="text-muted-foreground">
                    {APP_NAME} (not Apple) is responsible for maintenance and support services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Product Claims</h3>
                  <p className="text-muted-foreground mb-2">{APP_NAME} (not Apple) is responsible for addressing any claims regarding the App, including:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Product liability claims</li>
                    <li>Failure to conform to legal or regulatory requirements</li>
                    <li>Consumer protection or similar claims</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Intellectual Property</h3>
                  <p className="text-muted-foreground">
                    In the event of third-party claims that the App infringes intellectual property rights, {APP_NAME} (not Apple) is responsible for investigation, defense, settlement, and discharge.
                  </p>
                </div>
              </div>
            </section>

            {/* Google Play Store Specific Terms */}
            <section id="google-play-terms">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">Google Play Store Specific Terms</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Acknowledgment</h3>
                  <p className="text-muted-foreground mb-2">You acknowledge that:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>These Terms are between you and {APP_NAME}, not Google</li>
                    <li>Google has no obligation to provide support for the App</li>
                    <li>Google is not responsible for addressing claims related to the App</li>
                    <li>You must comply with Google Play&apos;s Terms of Service when using the App</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Scope of License</h3>
                  <p className="text-muted-foreground">
                    The license granted is limited to a non-transferable right to use {APP_NAME} on Android devices you own or control, as permitted by Google Play&apos;s Terms of Service.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Maintenance and Support</h3>
                  <p className="text-muted-foreground">
                    {APP_NAME} (not Google) is responsible for maintenance and support services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Product Claims</h3>
                  <p className="text-muted-foreground mb-2">{APP_NAME} (not Google) is responsible for addressing any claims regarding the App, including:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Product liability claims</li>
                    <li>Failure to conform to legal or regulatory requirements</li>
                    <li>Consumer protection or similar claims</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Intellectual Property</h3>
                  <p className="text-muted-foreground">
                    In the event of third-party claims that the App infringes intellectual property rights, {APP_NAME} (not Google) is responsible for investigation, defense, settlement, and discharge.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-border my-8" />
            <p className="text-muted-foreground text-sm italic text-center">
              © 2026 {APP_NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
