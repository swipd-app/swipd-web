import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { APP_NAME, APP_STORE_URL, COMPANY } from "@/lib/constants";
import { Heart, Sparkles, Bell, TrendingUp } from "lucide-react";

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

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg" disabled>
              Coming Soon
            </Button>
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

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to start shopping?
          </h2>
          <p className="text-xl text-muted-foreground">
            {APP_NAME} will be available soon on the App Store
          </p>
          <Button size="lg" className="text-lg" disabled>
            Coming Soon
          </Button>
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
