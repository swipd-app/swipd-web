import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@/components/google-analytics";
import { APP_NAME, SITE_URL, GA_MEASUREMENT_ID } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${APP_NAME} - Discover Products You'll Love`,
    template: `%s | ${APP_NAME}`,
  },
  description: "Swipe through curated products, save your favorites, and get the best deals. The swipe-based shopping app for iOS.",
  keywords: ["shopping app", "deals", "products", "iOS", "wishlist", "affiliate shopping"],
  authors: [{ name: `${APP_NAME} Team` }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: APP_NAME,
    title: `${APP_NAME} - Discover Products You'll Love`,
    description: "Swipe through curated products and save your favorites",
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} - Discover Products You'll Love`,
    description: "Swipe through curated products and save your favorites",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
