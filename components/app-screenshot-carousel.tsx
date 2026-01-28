"use client";

import { useState, useRef, useCallback } from "react";
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

const SWIPE_THRESHOLD = 50;

export function AppScreenshotCarousel() {
  const [current, setCurrent] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? screenshots.length - 1 : c - 1)),
    []
  );
  const next = useCallback(
    () => setCurrent((c) => (c === screenshots.length - 1 ? 0 : c + 1)),
    []
  );

  const handleDragStart = useCallback((clientX: number) => {
    setIsDragging(true);
    startX.current = clientX;
    currentX.current = clientX;
  }, []);

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDragging) return;
    currentX.current = clientX;
    const delta = currentX.current - startX.current;
    setDragOffset(Math.max(-100, Math.min(100, delta)));
  }, [isDragging]);

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    const delta = currentX.current - startX.current;
    if (delta > SWIPE_THRESHOLD) {
      prev();
    } else if (delta < -SWIPE_THRESHOLD) {
      next();
    }
    setIsDragging(false);
    setDragOffset(0);
  }, [isDragging, prev, next]);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => handleDragStart(e.touches[0].clientX),
    [handleDragStart]
  );
  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => handleDragMove(e.touches[0].clientX),
    [handleDragMove]
  );
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => handleDragStart(e.clientX),
    [handleDragStart]
  );
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => handleDragMove(e.clientX),
    [handleDragMove]
  );

  return (
    <div className="relative">
      <div
        className="aspect-[9/19] max-w-[280px] mx-auto relative overflow-hidden rounded-[2.5rem] border-8 border-foreground/10 shadow-2xl bg-background cursor-grab active:cursor-grabbing touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {screenshots.map((screenshot, index) => {
          const offset = index - current;
          const translateX = offset * 100 + (isDragging ? (dragOffset / 280) * 100 : 0);
          const isVisible = Math.abs(offset) <= 1;

          return (
            <div
              key={screenshot.src}
              className={`absolute inset-0 ${isDragging ? "" : "transition-transform duration-300 ease-out"}`}
              style={{
                transform: `translateX(${translateX}%)`,
                visibility: isVisible ? "visible" : "hidden",
              }}
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                sizes="280px"
                className="object-cover select-none pointer-events-none"
                priority={index === 0}
                loading={index <= 1 ? "eager" : "lazy"}
                quality={75}
                draggable={false}
              />
            </div>
          );
        })}
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

        <div className="flex gap-1">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className="w-8 h-8 flex items-center justify-center"
              aria-label={`Go to screenshot ${index + 1}`}
            >
              <span
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === current ? "bg-primary" : "bg-primary/30"
                }`}
              />
            </button>
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
