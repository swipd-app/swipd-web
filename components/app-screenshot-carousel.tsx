"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const screenshots = [
  { src: "/app-ss/1.png", alt: "Swipd app - Discover products" },
  { src: "/app-ss/2.png", alt: "Swipd app - Swipe to like" },
  { src: "/app-ss/3.png", alt: "Swipd app - Build your wishlist" },
  { src: "/app-ss/4.png", alt: "Swipd app - Get price drop alerts" },
  { src: "/app-ss/5.png", alt: "Swipd app - Filter by categories" },
  { src: "/app-ss/6.png", alt: "Swipd app - Browse by stores" },
  { src: "/app-ss/7.png", alt: "Swipd app - View product details" },
  { src: "/app-ss/8.png", alt: "Swipd app - Shop quickly" },
];

export function AppScreenshotCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? screenshots.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === screenshots.length - 1 ? 0 : c + 1));

  return (
    <div className="relative">
      <div className="aspect-[9/19] max-w-[280px] mx-auto relative overflow-hidden rounded-[2.5rem] border-8 border-foreground/10 shadow-2xl bg-background">
        {screenshots.map((screenshot, index) => (
          <div
            key={screenshot.src}
            className={`absolute inset-0 transition-opacity duration-300 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="rounded-full"
          aria-label="Previous screenshot"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div className="flex gap-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? "bg-primary" : "bg-primary/30"
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="rounded-full"
          aria-label="Next screenshot"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
