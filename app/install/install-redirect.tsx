"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { APP_NAME, APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";
import { Smartphone, Loader2 } from "lucide-react";

type Platform = "ios" | "android" | "unknown";

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "unknown";
  
  const userAgent = navigator.userAgent.toLowerCase();
  
  // iOS detection
  if (/iphone|ipad|ipod/.test(userAgent)) {
    return "ios";
  }
  
  // Android detection
  if (/android/.test(userAgent)) {
    return "android";
  }
  
  return "unknown";
}

export function InstallRedirect() {
  const [platform, setPlatform] = useState<Platform | null>(null);

  useEffect(() => {
    const detected = detectPlatform();
    setPlatform(detected);

    // Auto-redirect for mobile platforms
    if (detected === "ios") {
      window.location.replace(APP_STORE_URL);
    } else if (detected === "android") {
      window.location.replace(PLAY_STORE_URL);
    }
  }, []);

  // Show loading state while detecting
  if (platform === null) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen px-4">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <p className="mt-4 text-muted-foreground">Detecting your device...</p>
      </main>
    );
  }

  // Show redirecting state for mobile platforms
  if (platform === "ios" || platform === "android") {
    const storeName = platform === "ios" ? "App Store" : "Google Play";
    return (
      <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <p className="mt-4 text-lg">Redirecting to {storeName}...</p>
        <p className="mt-2 text-sm text-muted-foreground">
          If you&apos;re not redirected,{" "}
          <a
            href={platform === "ios" ? APP_STORE_URL : PLAY_STORE_URL}
            className="text-primary underline"
          >
            click here
          </a>
        </p>
      </main>
    );
  }

  // Desktop/unknown platform - show both badges
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="max-w-md mx-auto space-y-8">
        <div className="space-y-4">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
            <Smartphone className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Get {APP_NAME}</h1>
          <p className="text-muted-foreground">
            Download {APP_NAME} on your mobile device to start discovering amazing products.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            <Image
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              width={200}
              height={67}
              className="h-16 w-auto hover:opacity-80 transition-opacity"
            />
          </a>
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
            <Image
              src="/google-play-badge.svg"
              alt="Get it on Google Play"
              width={200}
              height={67}
              className="h-16 w-auto hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          Available for iOS and Android
        </p>
      </div>
    </main>
  );
}
