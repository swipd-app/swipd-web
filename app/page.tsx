import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { APP_NAME, APP_STORE_URL, COMPANY } from "@/lib/constants";
import { Heart, Sparkles, Bell, TrendingUp, ShoppingBag, Wallet, Clock, Gift } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Discover Products <br />
            You&apos;ll Love
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Swipe through curated products, save your favorites, and never miss a deal.
            The Tinder-style shopping experience for iOS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </a>
            <Button asChild size="lg" variant="outline" className="text-lg">
              <Link href="#features">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why {APP_NAME}?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 space-y-4">
              <Sparkles className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-semibold">Swipe to Discover</h3>
              <p className="text-muted-foreground">
                Browse curated products with intuitive swipe gestures
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
              <h3 className="text-xl font-semibold">Best Deals</h3>
              <p className="text-muted-foreground">
                Discover trending products and exclusive offers
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
            {APP_NAME} is designed for savvy shoppers who want a smarter, more engaging way to discover products
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
                Always looking for the best prices and exclusive offers? {APP_NAME} helps you discover trending deals and get notified when prices drop on your favorite products.
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
                Short on time but still want to stay updated on the latest products? Swipe through curated selections during your commute or coffee break.
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
                Finding the perfect gift can be overwhelming. {APP_NAME} makes discovery fun and helps you build wishlists for every occasion.
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
                Want to make informed purchase decisions? Track price history and wait for the right moment to buy with {APP_NAME}&apos;s smart price tracking.
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
            Ready to start shopping?
          </h2>
          <p className="text-xl text-muted-foreground">
            {APP_NAME} is now available on the App Store
          </p>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            <Image
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              width={180}
              height={60}
              className="h-14 w-auto mx-auto"
            />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <a href={`mailto:${COMPANY.email}`} className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
