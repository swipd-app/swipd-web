import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Footer } from "@/components/footer";
import { APP_NAME, COMPANY, SOCIAL_LINKS } from "@/lib/constants";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: `Support & FAQ - ${APP_NAME}`,
  description: `Get help and support for ${APP_NAME}. Find answers to frequently asked questions.`,
};

export default function SupportPage() {
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
          <h1 className="text-4xl font-bold mb-2">Support & Frequently Asked Questions</h1>
          <p className="text-muted-foreground mb-8">Last Updated: January 18, 2026</p>

          <p className="text-lg text-muted-foreground mb-8">
            Welcome to {APP_NAME} Support! Find answers to common questions and learn how to get the most out of your shopping experience.
          </p>

          {/* Table of Contents */}
          <nav className="mb-12 p-6 bg-muted/50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
              <li><a href="#getting-started" className="hover:text-primary transition-colors">Getting Started</a></li>
              <li><a href="#account-sign-in" className="hover:text-primary transition-colors">Account & Sign-In</a></li>
              <li><a href="#product-discovery" className="hover:text-primary transition-colors">Product Discovery</a></li>
              <li><a href="#wishlist" className="hover:text-primary transition-colors">Wishlist</a></li>
              <li><a href="#notifications" className="hover:text-primary transition-colors">Notifications</a></li>
              <li><a href="#privacy-security" className="hover:text-primary transition-colors">Privacy & Security</a></li>
              <li><a href="#affiliate-program" className="hover:text-primary transition-colors">Affiliate Program</a></li>
              <li><a href="#technical-issues" className="hover:text-primary transition-colors">Technical Issues</a></li>
              <li><a href="#contact-support" className="hover:text-primary transition-colors">Contact Support</a></li>
            </ul>
          </nav>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12">
            {/* Getting Started */}
            <section id="getting-started">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">Getting Started</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">What is {APP_NAME}?</h3>
                  <p className="text-muted-foreground">
                    {APP_NAME} is a Tinder-style shopping app that helps you discover products through an intuitive swipe interface. Swipe right on products you love, save them to your wishlist, and get notified about price drops.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">How does {APP_NAME} work?</h3>
                  <ol className="list-decimal list-inside text-muted-foreground ml-4 space-y-1">
                    <li><strong>Swipe:</strong> Browse products by swiping right (like) or left (skip)</li>
                    <li><strong>Save:</strong> Products you like are automatically saved to your wishlist</li>
                    <li><strong>Shop:</strong> Click on products to view details and make purchases</li>
                    <li><strong>Track:</strong> Get notified when prices drop on your wishlist items</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Is {APP_NAME} free to use?</h3>
                  <p className="text-muted-foreground">
                    Yes! {APP_NAME} is completely free to download and use. We earn a small commission when you purchase products through our affiliate links, at no extra cost to you.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Which platforms is {APP_NAME} available on?</h3>
                  <p className="text-muted-foreground mb-2">Currently, {APP_NAME} is available on:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>iOS (iPhone and iPad) - iOS 17.0 or later</li>
                    <li>Android version coming soon!</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Account & Sign-In */}
            <section id="account-sign-in">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">Account & Sign-In</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Do I need an account to use {APP_NAME}?</h3>
                  <p className="text-muted-foreground mb-2">
                    No! You can use {APP_NAME} as a guest without creating an account. However, signing in with Apple ID offers benefits:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Sync your wishlist across devices</li>
                    <li>Receive price drop notifications</li>
                    <li>Personalized recommendations</li>
                    <li>Secure data backup</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">How do I sign in with Apple?</h3>
                  <ol className="list-decimal list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Open {APP_NAME} and navigate to the <strong>Settings</strong> tab</li>
                    <li>Tap <strong>&quot;Sign in with Apple&quot;</strong></li>
                    <li>Follow the Apple authentication prompts</li>
                    <li>Your guest data can be merged with your new account</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">What happens to my guest data when I sign in?</h3>
                  <p className="text-muted-foreground mb-2">
                    When you sign in, you&apos;ll be asked if you want to keep or discard your guest data:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li><strong>Keep Data:</strong> Your wishlist and preferences will be preserved</li>
                    <li><strong>Start Fresh:</strong> Begin with a clean slate</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Can I use {APP_NAME} without an Apple ID?</h3>
                  <p className="text-muted-foreground">
                    Yes! You can continue using {APP_NAME} as a guest indefinitely. Guest sessions are tied to your device and remain active for 90 days of inactivity.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">How do I sign out?</h3>
                  <ol className="list-decimal list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Go to <strong>Settings</strong> tab</li>
                    <li>Scroll down and tap <strong>&quot;Sign Out&quot;</strong></li>
                    <li>Confirm your choice</li>
                    <li>You&apos;ll be switched to a new guest session</li>
                  </ol>
                  <p className="text-muted-foreground mt-2">
                    <strong>Note:</strong> Your data is safe on our servers. Sign in again anytime to restore your account.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">How do I delete my account?</h3>
                  <p className="text-muted-foreground mb-2">To permanently delete your account:</p>
                  <ol className="list-decimal list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Go to <strong>Settings</strong> tab</li>
                    <li>Scroll to the bottom and tap <strong>&quot;Delete Account&quot;</strong></li>
                    <li>Read the warning carefully</li>
                    <li>Confirm deletion</li>
                  </ol>
                  <p className="text-muted-foreground mt-2">
                    <strong>Important:</strong> This action is permanent and cannot be undone. All your data will be permanently deleted within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* Product Discovery */}
            <section id="product-discovery">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">Product Discovery</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">How are products selected for me?</h3>
                  <p className="text-muted-foreground mb-2">Our recommendation algorithm considers:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Your swipe history and preferences</li>
                    <li>Selected country/region</li>
                    <li>Product categories you&apos;ve shown interest in</li>
                    <li>Popular and trending products</li>
                    <li>Product availability and quality</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Can I filter products by category?</h3>
                  <p className="text-muted-foreground mb-2">Yes! Use the filter icon on the Feed tab to:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Select specific product categories</li>
                    <li>Choose preferred stores (e.g., Amazon)</li>
                    <li>Refine your product feed</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">How do I change my country/region?</h3>
                  <ol className="list-decimal list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Go to <strong>Settings</strong> &gt; <strong>Preferences</strong></li>
                    <li>Select your preferred country</li>
                    <li>Product feed will update to show products from that region</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Why am I seeing products I&apos;ve already seen?</h3>
                  <p className="text-muted-foreground">
                    Once you&apos;ve swiped through available products matching your preferences, the feed will reset. Adjust your category filters to discover new products.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">How do I skip products I&apos;m not interested in?</h3>
                  <p className="text-muted-foreground">
                    Simply swipe left or tap the ✕ button to skip a product. This helps us learn your preferences and show better recommendations.
                  </p>
                </div>
              </div>
            </section>

            {/* Wishlist */}
            <section id="wishlist">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">Wishlist</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">How do I add products to my wishlist?</h3>
                  <p className="text-muted-foreground">
                    Swipe right or tap the ♥ button on any product to add it to your wishlist. The product will be instantly saved.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Where can I view my wishlist?</h3>
                  <p className="text-muted-foreground">
                    Tap the <strong>Wishlist</strong> tab at the bottom of the screen to view all your saved products.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">How do I remove items from my wishlist?</h3>
                  <p className="text-muted-foreground mb-2">On the Wishlist screen:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Swipe left on an item and tap <strong>&quot;Remove&quot;</strong></li>
                    <li>Or tap the item and use the remove option</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Can I organize my wishlist?</h3>
                  <p className="text-muted-foreground mb-2">Currently, wishlist items are sorted by:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Recently added (newest first)</li>
                    <li>Price drops (items with recent price changes appear at the top)</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">Custom categories and folders are coming in a future update!</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Do wishlist items expire?</h3>
                  <p className="text-muted-foreground mb-2">No, wishlist items remain saved indefinitely unless:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>You manually remove them</li>
                    <li>The product is discontinued by the retailer</li>
                    <li>You delete your account</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Notifications */}
            <section id="notifications">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">Notifications</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">What types of notifications can I receive?</h3>
                  <p className="text-muted-foreground mb-2">{APP_NAME} offers the following notification types:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li><strong>Price Drops:</strong> When products in your wishlist decrease in price</li>
                    <li><strong>Back in Stock:</strong> When out-of-stock items become available (coming soon)</li>
                    <li><strong>Special Offers:</strong> Exclusive deals and promotions (coming soon)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">How do I enable price drop notifications?</h3>
                  <p className="text-muted-foreground mb-2">
                    Price drop notifications are currently in development and will be available in an upcoming update. To prepare:
                  </p>
                  <ol className="list-decimal list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Go to device <strong>Settings</strong> &gt; <strong>Notifications</strong> &gt; <strong>{APP_NAME}</strong></li>
                    <li>Enable &quot;Allow Notifications&quot;</li>
                    <li>Choose your preferred notification style</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">How often will I receive notifications?</h3>
                  <p className="text-muted-foreground mb-2">We respect your time and avoid notification spam:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Price drops: Only for significant discounts (typically 10% or more)</li>
                    <li>Maximum 1-2 notifications per day</li>
                    <li>You can customize frequency in Settings (coming soon)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Can I disable notifications?</h3>
                  <p className="text-muted-foreground mb-2">Yes! You can disable notifications at any time:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li><strong>iOS:</strong> Settings &gt; Notifications &gt; {APP_NAME} &gt; Turn off</li>
                    <li><strong>In-app:</strong> Settings &gt; Notifications (coming soon)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Privacy & Security */}
            <section id="privacy-security">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">Privacy & Security</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Is my personal information safe?</h3>
                  <p className="text-muted-foreground mb-2">Yes! We take privacy seriously:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Data is encrypted in transit and at rest</li>
                    <li>We never sell your personal information</li>
                    <li>Minimal data collection (only what&apos;s necessary)</li>
                    <li>Full compliance with GDPR and CCPA</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">
                    See our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> for complete details.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">What data does {APP_NAME} collect?</h3>
                  <p className="text-muted-foreground mb-2">We collect:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Account information (Apple ID, email if provided)</li>
                    <li>Product interactions (swipes, likes)</li>
                    <li>Wishlist items</li>
                    <li>Device and usage analytics</li>
                  </ul>
                  <p className="text-muted-foreground mt-4 mb-2">We do NOT collect:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Credit card information</li>
                    <li>Purchase history outside our app</li>
                    <li>Location data</li>
                    <li>Browsing history</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Can other users see my wishlist?</h3>
                  <p className="text-muted-foreground">
                    No. Your wishlist is completely private and only visible to you.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">How long is my data stored?</h3>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Active accounts: Indefinitely, while you use {APP_NAME}</li>
                    <li>Deleted accounts: 30 days (for recovery), then permanently deleted</li>
                    <li>Guest sessions: 90 days of inactivity</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Is my Apple ID shared with third parties?</h3>
                  <p className="text-muted-foreground">
                    No. We only receive an anonymized identifier from Apple. Your actual Apple ID is never exposed to us or shared with third parties.
                  </p>
                </div>
              </div>
            </section>

            {/* Affiliate Program */}
            <section id="affiliate-program">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">Affiliate Program</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">What are affiliate links?</h3>
                  <p className="text-muted-foreground">
                    Affiliate links are special URLs that allow us to earn a small commission when you make a purchase, at no extra cost to you.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Do I pay more when using {APP_NAME}?</h3>
                  <p className="text-muted-foreground">
                    No! Prices are identical whether you purchase through {APP_NAME} or directly from the retailer. The commission comes from the retailer&apos;s marketing budget.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Which retailers do you partner with?</h3>
                  <p className="text-muted-foreground mb-2">We currently partner with:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Amazon (primary partner)</li>
                    <li>Additional retailers coming soon</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Does {APP_NAME} track my purchases?</h3>
                  <p className="text-muted-foreground">
                    We only track clicks to products. Once you&apos;re on the retailer&apos;s website, we have no visibility into your purchase activity. The retailer reports commissions to us without sharing your personal information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Can I trust product information on {APP_NAME}?</h3>
                  <p className="text-muted-foreground mb-2">
                    Product information (prices, images, descriptions) is sourced directly from retailers and updated regularly. However:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Prices may change between updates</li>
                    <li>Always verify details on the retailer&apos;s website before purchasing</li>
                    <li>We are not responsible for product quality or fulfillment</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Technical Issues */}
            <section id="technical-issues">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">Technical Issues</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">The app is crashing or freezing</h3>
                  <p className="text-muted-foreground mb-2">Try these steps:</p>
                  <ol className="list-decimal list-inside text-muted-foreground ml-4 space-y-1">
                    <li><strong>Force close and reopen</strong> the app</li>
                    <li><strong>Restart your device</strong></li>
                    <li><strong>Check for updates:</strong> App Store &gt; Updates &gt; {APP_NAME}</li>
                    <li><strong>Free up storage:</strong> Ensure at least 500MB free space</li>
                    <li><strong>Reinstall the app</strong> (your account data is safe on our servers)</li>
                  </ol>
                  <p className="text-muted-foreground mt-2">
                    If the issue persists, contact support with device model, iOS version, description of the problem, and steps to reproduce.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Products aren&apos;t loading</h3>
                  <p className="text-muted-foreground mb-2">Check the following:</p>
                  <ol className="list-decimal list-inside text-muted-foreground ml-4 space-y-1">
                    <li><strong>Internet connection:</strong> Ensure you have a stable connection (Wi-Fi or cellular)</li>
                    <li><strong>App permissions:</strong> Settings &gt; {APP_NAME} &gt; ensure network access is allowed</li>
                    <li><strong>Clear cache:</strong> Settings &gt; General &gt; Delete and reinstall</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Images not displaying</h3>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li><strong>Slow connection:</strong> Images may take time to load on slower networks</li>
                    <li><strong>Clear cache:</strong> Reinstalling the app will clear image cache</li>
                    <li><strong>VPN/Firewall:</strong> Some VPNs may block image CDNs</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Wishlist not syncing across devices</h3>
                  <p className="text-muted-foreground mb-2">Syncing requires an active account:</p>
                  <ol className="list-decimal list-inside text-muted-foreground ml-4 space-y-1">
                    <li><strong>Verify you&apos;re signed in:</strong> Settings &gt; Account section</li>
                    <li><strong>Same Apple ID:</strong> Ensure you&apos;re using the same Apple ID on both devices</li>
                    <li><strong>Internet connection:</strong> Sync requires an active internet connection</li>
                    <li><strong>Pull to refresh:</strong> Drag down on the Wishlist tab to force sync</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">I can&apos;t sign in with Apple</h3>
                  <p className="text-muted-foreground mb-2">Common solutions:</p>
                  <ol className="list-decimal list-inside text-muted-foreground ml-4 space-y-1">
                    <li><strong>Check Apple ID settings:</strong> Settings &gt; [Your Name] &gt; Password & Security</li>
                    <li><strong>Enable Two-Factor Authentication</strong> for your Apple ID</li>
                    <li><strong>Sign out and back in</strong> to iCloud on your device</li>
                    <li><strong>Update iOS:</strong> Ensure you&apos;re running iOS 17.0 or later</li>
                  </ol>
                  <p className="text-muted-foreground mt-2">
                    If you see &quot;Sign In with Apple Unavailable&quot;, your Apple ID may have restrictions enabled.
                  </p>
                </div>
              </div>
            </section>

            {/* Account Recovery */}
            <section id="account-recovery">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">Account Recovery</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">I forgot my Apple ID password</h3>
                  <p className="text-muted-foreground mb-2">
                    {APP_NAME} uses Apple Sign-In, so password recovery is handled by Apple:
                  </p>
                  <ol className="list-decimal list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Go to <a href="https://iforgot.apple.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">iforgot.apple.com</a></li>
                    <li>Follow Apple&apos;s account recovery process</li>
                    <li>Once recovered, sign back in to {APP_NAME}</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">I accidentally deleted my account</h3>
                  <p className="text-muted-foreground mb-2">Deleted accounts can be recovered within 30 days:</p>
                  <ol className="list-decimal list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Contact support at <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a></li>
                    <li>Provide your email address or Apple ID</li>
                    <li>Our team will verify your identity and restore your account</li>
                  </ol>
                  <p className="text-muted-foreground mt-2">
                    After 30 days, account data is permanently deleted and cannot be recovered.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">I changed my Apple ID email</h3>
                  <p className="text-muted-foreground">
                    No problem! {APP_NAME} uses your Apple ID identifier, not your email. Sign in with your updated Apple ID and you&apos;ll have full access to your account.
                  </p>
                </div>
              </div>
            </section>

            {/* Billing & Purchases */}
            <section id="billing-purchases">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">Billing & Purchases</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Does {APP_NAME} charge subscription fees?</h3>
                  <p className="text-muted-foreground">
                    No, {APP_NAME} is completely free with no subscription or hidden fees.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Do I make purchases through {APP_NAME}?</h3>
                  <p className="text-muted-foreground">
                    No. When you click a product, you&apos;re redirected to the retailer&apos;s website (e.g., Amazon) where you complete your purchase. {APP_NAME} does not handle payments or transactions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">I have an issue with a purchase</h3>
                  <p className="text-muted-foreground mb-2">Since purchases are made directly with retailers:</p>
                  <ol className="list-decimal list-inside text-muted-foreground ml-4 space-y-1">
                    <li><strong>Contact the retailer&apos;s support</strong> (e.g., Amazon Customer Service)</li>
                    <li><strong>Manage returns/refunds</strong> through the retailer&apos;s system</li>
                    <li>{APP_NAME} cannot process returns or refunds as we don&apos;t handle transactions</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Can I use promo codes or coupons?</h3>
                  <p className="text-muted-foreground">
                    Yes! Apply any promo codes during checkout on the retailer&apos;s website. They work normally with affiliate links.
                  </p>
                </div>
              </div>
            </section>

            {/* Feature Requests & Feedback */}
            <section id="feature-requests">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">Feature Requests & Feedback</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">How can I suggest new features?</h3>
                  <p className="text-muted-foreground mb-2">We love hearing from our users! Share your ideas:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li><strong>Email:</strong> <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a></li>
                    <li><strong>In-app:</strong> Settings &gt; Send Feedback (coming soon)</li>
                    {SOCIAL_LINKS.instagram && (
                      <li><strong>Instagram:</strong> <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@swipd.app</a></li>
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">What features are coming next?</h3>
                  <p className="text-muted-foreground mb-2">Our roadmap includes:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>✅ Apple Sign-In (live)</li>
                    <li>✅ Wishlist management (live)</li>
                    <li>🚧 Price drop notifications (in development)</li>
                    <li>🚧 Back in stock alerts (in development)</li>
                    <li>📅 Android app (Q2 2026)</li>
                    <li>📅 Custom wishlist categories</li>
                    <li>📅 Social features (share wishlists)</li>
                    <li>📅 More retailers and categories</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">How can I report a bug?</h3>
                  <p className="text-muted-foreground mb-2">Help us improve {APP_NAME} by reporting bugs:</p>
                  <ol className="list-decimal list-inside text-muted-foreground ml-4 space-y-1">
                    <li><strong>Email:</strong> <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a></li>
                    <li><strong>Include:</strong> Device model and iOS version, App version (Settings &gt; About), Screenshots or screen recordings, Steps to reproduce the issue</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Contact Support */}
            <section id="contact-support">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">Contact Support</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">How do I get help?</h3>
                  <p className="text-muted-foreground mb-4">Choose your preferred support channel:</p>

                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Email Support (Primary)</p>
                      <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                        <li>Email: <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a></li>
                        <li>Response time: Within 24-48 hours (weekdays)</li>
                        <li>For: Account issues, technical problems, general inquiries</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-medium">Privacy Inquiries</p>
                      <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                        <li>Email: <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a></li>
                        <li>For: Data requests, privacy concerns, GDPR/CCPA requests</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-medium">Business Inquiries</p>
                      <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                        <li>Email: <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a></li>
                        <li>For: Partnerships, press, business development</li>
                      </ul>
                    </div>

                    {SOCIAL_LINKS.instagram && (
                      <div>
                        <p className="font-medium">Social Media</p>
                        <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                          <li>Instagram: <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@swipd.app</a></li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">What information should I include in my support request?</h3>
                  <p className="text-muted-foreground mb-2">To help us assist you quickly, please include:</p>
                  <ol className="list-decimal list-inside text-muted-foreground ml-4 space-y-1">
                    <li><strong>Account information:</strong> Email or Apple ID (if applicable)</li>
                    <li><strong>Device details:</strong> Model and iOS version (Settings &gt; General &gt; About)</li>
                    <li><strong>App version:</strong> Found in Settings &gt; About</li>
                    <li><strong>Issue description:</strong> Clear explanation of the problem</li>
                    <li><strong>Screenshots:</strong> Visual evidence helps tremendously</li>
                    <li><strong>Steps to reproduce:</strong> How we can replicate the issue</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">What are your support hours?</h3>
                  <p className="text-muted-foreground mb-2">Our support team is available:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM EST</li>
                    <li><strong>Saturday - Sunday:</strong> Limited support (urgent issues only)</li>
                    <li><strong>Holidays:</strong> Emergency support only</li>
                  </ul>
                  <p className="text-muted-foreground mt-4 mb-2">Average response times:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Urgent issues (account access, data loss): 2-4 hours</li>
                    <li>General inquiries: 24-48 hours</li>
                    <li>Feature requests/feedback: 3-5 days</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Additional Resources */}
            <section id="additional-resources">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">Additional Resources</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Useful Links</h3>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li><Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="text-primary hover:underline">Terms of Service</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Community Guidelines</h3>
                  <p className="text-muted-foreground mb-2">When using {APP_NAME} and interacting with our support team:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                    <li>Be respectful and courteous</li>
                    <li>Provide accurate information</li>
                    <li>Respect privacy and security policies</li>
                    <li>Follow applicable laws and regulations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Still Need Help */}
            <section className="mt-12 p-8 bg-muted/50 rounded-lg text-center">
              <h2 className="text-2xl font-semibold mb-4">Still Need Help?</h2>
              <p className="text-muted-foreground mb-4">
                If you didn&apos;t find an answer to your question, we&apos;re here to help!
              </p>
              <p className="text-muted-foreground">
                <strong>Contact Support:</strong>{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a>
              </p>
              <p className="text-muted-foreground mt-2">
                Our team is committed to providing excellent customer service and will respond to your inquiry as quickly as possible.
              </p>
            </section>

            <hr className="border-border my-8" />
            <p className="text-muted-foreground text-sm italic">
              This Support page is effective as of January 18, 2026
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
