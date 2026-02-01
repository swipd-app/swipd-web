import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Footer } from "@/components/footer";
import { AppScreenshotCarousel } from "@/components/app-screenshot-carousel";
import { APP_NAME, APP_STORE_URL, PLAY_STORE_URL, SOCIAL_LINKS } from "@/lib/constants";
import {
  Heart,
  Sparkles,
  Bell,
  TrendingUp,
  ShoppingBag,
  Wallet,
  Clock,
  Gift,
  ArrowRight,
  CheckCircle2,
  Star,
  Zap,
  Shield,
} from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Zap className="w-4 h-4" />
            The next-gen shopping experience
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Swipe, Discover, <br />
            <span className="text-primary">Shop!</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Discover thousands of products with intuitive swipe gestures, save
            your favorites, and get notified instantly when prices drop.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
            <div className="flex flex-row gap-3 items-center">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                />
              </a>
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/google-play-badge.svg"
                  alt="Get it on Google Play"
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                />
              </a>
            </div>
            <Button asChild size="lg" variant="outline" className="text-lg">
              <Link href="#how-it-works">
                How It Works
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Safe Shopping</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>No Ads</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-4 py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Start smart shopping in 3 simple steps
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold">Swipe</h3>
              <p className="text-muted-foreground">
                Swipe right on products you love, left on ones you don&apos;t.
                Simple and fun!
              </p>
            </div>

            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold">Save</h3>
              <p className="text-muted-foreground">
                Products you like are automatically added to your wishlist.
                Organize them by category.
              </p>
            </div>

            <div className="relative text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold">Buy</h3>
              <p className="text-muted-foreground">
                Get notified when prices drop and purchase directly from the
                store.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                We Made Shopping Fun
              </h2>
              <p className="text-xl text-muted-foreground">
                Forget boring product lists. With {APP_NAME}, enjoy shopping
                while discovering products tailored just for you.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-0.5" />
                  <div>
                    <span className="font-semibold">
                      Personalized Recommendations
                    </span>
                    <p className="text-muted-foreground">
                      Smart algorithm that learns from your preferences
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-0.5" />
                  <div>
                    <span className="font-semibold">Real-time Price Tracking</span>
                    <p className="text-muted-foreground">
                      Automatically track prices on products you save
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-0.5" />
                  <div>
                    <span className="font-semibold">Category Filters</span>
                    <p className="text-muted-foreground">
                      Filter products based on your interests
                    </p>
                  </div>
                </li>
              </ul>

              <div className="flex flex-row gap-3 items-center mt-4">
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={180}
                    height={60}
                    className="h-14 w-auto"
                  />
                </a>
                <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/google-play-badge.svg"
                    alt="Get it on Google Play"
                    width={180}
                    height={60}
                    className="h-14 w-auto"
                  />
                </a>
              </div>
            </div>

            <AppScreenshotCarousel />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why {APP_NAME}?
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Features that make shopping easier
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 space-y-4">
              <Sparkles className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-semibold">Swipe to Discover</h3>
              <p className="text-muted-foreground">
                Quickly discover products with intuitive swipe gestures
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <Heart className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-semibold">Save Favorites</h3>
              <p className="text-muted-foreground">
                Build your wishlist and track products you love
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <Bell className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-semibold">Price Alerts</h3>
              <p className="text-muted-foreground">
                Get notified when your saved items go on sale
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <TrendingUp className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-semibold">Trending Products</h3>
              <p className="text-muted-foreground">
                Never miss the most popular and trending items
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section id="target-users" className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Who is {APP_NAME} for?
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Designed for everyone who shops smart
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ShoppingBag className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Deal Hunters</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Always looking for the best prices and exclusive offers?{" "}
                {APP_NAME} helps you discover trending deals and get notified
                when prices drop.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Price drop notifications
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Track products across retailers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Never miss a sale again
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Busy Professionals</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Short on time but still want to stay updated on the latest
                products? Swipe through curated selections during your commute
                or coffee break.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Quick swipe-based browsing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Personalized recommendations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Save items for later purchase
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Gift className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Gift Shoppers</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Finding the perfect gift can be overwhelming. {APP_NAME} makes
                discovery fun and helps you build wishlists for every occasion.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Discover unique products
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Organize wishlists by category
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Get inspired by trending items
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Wallet className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Budget-Conscious Shoppers</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Want to make informed purchase decisions? Track price history
                and wait for the right moment to buy with {APP_NAME}&apos;s smart
                price tracking.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Price history tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Set custom price alerts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Compare across stores
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-muted-foreground">
            {APP_NAME} is available for free on iOS and Android
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </a>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Image
                src="/google-play-badge.svg"
                alt="Get it on Google Play"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </a>
          </div>

          {/* Social Links */}
          {(SOCIAL_LINKS.twitter || SOCIAL_LINKS.instagram || SOCIAL_LINKS.github) && (
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">
                Follow us on social media
              </p>
              <div className="flex items-center justify-center gap-4">
                {SOCIAL_LINKS.twitter && (
                  <a
                    href={SOCIAL_LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on X (Twitter)"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                )}
                {SOCIAL_LINKS.instagram && (
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
                {SOCIAL_LINKS.github && (
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View our GitHub"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
