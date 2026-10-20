"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { PortraitReelImage } from "@/lib/data";

/** An explicit photo stack: no autoplay, layout shifts, or motion to pause. */
export default function PortraitReel({
  images,
}: {
  images: readonly PortraitReelImage[];
}) {
  const [index, setIndex] = useState(0);
  const [enhanced, setEnhanced] = useState(false);
  useEffect(() => setEnhanced(true), []);
  if (!images.length) return null;
  return (
    <div className="photo-stack">
      <div className="photo-stack__back" aria-hidden="true" />
      <figure className="portrait-frame">
        <div className="portrait-frame__image">
          <Image
            src={images[index].image}
            alt={images[index].alt}
            fill
            priority={index === 0}
            sizes="(max-width: 760px) 82vw, 430px"
          />
        </div>
        <figcaption>
          <span>A few moments, in between.</span>
          <span>
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>
        </figcaption>
      </figure>
      <div
        className="photo-stack__controls"
        aria-label="Personal photographs"
        hidden={!enhanced}
      >
        <button
          type="button"
          onClick={() => setIndex((index + images.length - 1) % images.length)}
          aria-label="Previous photograph"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => setIndex((index + 1) % images.length)}
          aria-label="Next photograph"
        >
          →
        </button>
      </div>
    </div>
  );
}
