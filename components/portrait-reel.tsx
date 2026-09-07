"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { PortraitReelImage } from "@/lib/data";

const HOLD_MS = 5000;
const FADE_MS = 900;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

type PortraitReelProps = {
  images: readonly PortraitReelImage[];
};

export default function PortraitReel({ images }: PortraitReelProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [frameHeight, setFrameHeight] = useState<number>();
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia(REDUCED_MOTION_QUERY).matches,
  );

  const nextIndex = images.length > 1 ? (activeIndex + 1) % images.length : activeIndex;
  const frameIndex = isTransitioning ? nextIndex : activeIndex;
  const frameImage = images[frameIndex] ?? images[0];
  const frameRatio = frameImage ? frameImage.image.width / frameImage.image.height : 1;

  useEffect(() => {
    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const updateVisibility = () => setIsDocumentVisible(document.visibilityState === "visible");

    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const updateFrameHeight = () => {
      const width = frame.offsetWidth;
      if (width > 0) setFrameHeight(width / frameRatio);
    };

    updateFrameHeight();

    const observer = new ResizeObserver(updateFrameHeight);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [frameRatio]);

  useEffect(() => {
    if (images.length < 2 || reducedMotion || isPaused || !isDocumentVisible || isTransitioning) {
      return;
    }

    const timeout = window.setTimeout(() => setIsTransitioning(true), HOLD_MS);
    return () => window.clearTimeout(timeout);
  }, [activeIndex, images.length, isDocumentVisible, isPaused, isTransitioning, reducedMotion]);

  useEffect(() => {
    if (!isTransitioning) return;

    const timeout = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
      setIsTransitioning(false);
    }, FADE_MS);

    return () => window.clearTimeout(timeout);
  }, [images.length, isTransitioning]);

  if (images.length === 0) return null;

  return (
    <div
      className={`portrait-frame portrait-reel${isTransitioning ? " portrait-reel--transitioning" : ""}`}
      ref={frameRef}
      style={{
        aspectRatio: frameHeight ? undefined : frameRatio,
        height: frameHeight ? `${frameHeight}px` : undefined,
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Image
        key={`active-${activeIndex}`}
        className="portrait-reel__image portrait-reel__image--active"
        src={images[activeIndex].image}
        alt={images[activeIndex].alt}
        fill
        priority
        sizes="(max-width: 720px) 62vw, (max-width: 1100px) 35vw, 29rem"
      />
      {images.length > 1 && (
        <Image
          key={`incoming-${nextIndex}`}
          className={`portrait-reel__image portrait-reel__image--incoming${isTransitioning ? " portrait-reel__image--incoming-visible" : ""}`}
          src={images[nextIndex].image}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="(max-width: 720px) 62vw, (max-width: 1100px) 35vw, 29rem"
        />
      )}
      <span className="sr-only">Images rotate automatically every few seconds.</span>
    </div>
  );
}
