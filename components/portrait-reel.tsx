"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { PortraitReelImage } from "@/lib/data";

/** Rotate the camera roll, with explicit pause and static motion fallbacks. */
export default function PortraitReel({
  images,
}: {
  images: readonly PortraitReelImage[];
}) {
  const root = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState({ current: 0, previous: -1 });
  const [requested, setRequested] = useState<number | null>(null);
  const requestedRef = useRef<number | null>(null);
  const [notice, setNotice] = useState("");
  const [playing, setPlaying] = useState(false);
  const [enhanced, setEnhanced] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState<Set<number>>(() => new Set());
  const next = images.length ? (frame.current + 1) % images.length : 0;
  const move = useCallback(
    (direction: number) => {
      const target =
        ((requestedRef.current ?? frame.current) + direction + images.length) %
        images.length;
      setNotice("");
      if (loaded.has(target)) {
        requestedRef.current = null;
        setRequested(null);
        setFrame(({ current }) => ({ previous: current, current: target }));
      } else {
        requestedRef.current = target;
        setRequested(target);
      }
    },
    [images.length, frame, loaded],
  );

  useEffect(() => {
    setEnhanced(true);
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(motion.matches);
    setPlaying(!motion.matches);
    const updateMotion = () => {
      setReduced(motion.matches);
      if (motion.matches) setPlaying(false);
    };
    const updatePage = () => setPageVisible(!document.hidden);
    updatePage();
    motion.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updatePage);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    if (root.current) observer.observe(root.current);
    return () => {
      motion.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updatePage);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (
      !playing ||
      reduced ||
      !visible ||
      !pageVisible ||
      hovered ||
      requested !== null ||
      images.length < 2 ||
      !loaded.has(next)
    )
      return;
    const timer = window.setTimeout(() => move(1), 4500);
    return () => window.clearTimeout(timer);
  }, [
    playing,
    reduced,
    visible,
    pageVisible,
    hovered,
    requested,
    images.length,
    loaded,
    next,
    move,
  ]);

  if (!images.length) return null;
  const shown = Array.from(
    new Set([frame.current, frame.previous, next, requested]),
  ).filter((index): index is number => index !== null && index >= 0);
  return (
    <div
      className="photo-stack"
      ref={root}
      role="region"
      aria-roledescription="carousel"
      aria-label="A few moments from my camera roll"
      aria-busy={requested !== null}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={(event) => {
        const target = event.target as HTMLElement;
        if (
          !target.closest(".photo-stack__play") ||
          target.matches(":focus-visible")
        )
          setPlaying(false);
      }}
    >
      <div className="photo-stack__back" aria-hidden="true" />
      <figure className="portrait-frame">
        <div className="portrait-frame__image">
          {shown.map((index) => (
            <Image
              key={images[index].image.src}
              src={images[index].image}
              alt={index === frame.current ? images[index].alt : ""}
              aria-hidden={index !== frame.current}
              className={
                index === frame.current
                  ? "portrait-photo portrait-photo--active"
                  : "portrait-photo"
              }
              fill
              priority={index === 0}
              sizes="(max-width: 760px) 82vw, 430px"
              onLoad={() => {
                setLoaded((current) =>
                  current.has(index) ? current : new Set(current).add(index),
                );
                if (requestedRef.current === index) {
                  requestedRef.current = null;
                  setRequested(null);
                  setFrame(({ current }) => ({
                    previous: current,
                    current: index,
                  }));
                }
              }}
              onError={() => {
                setPlaying(false);
                if (requestedRef.current === index) {
                  requestedRef.current = null;
                  setRequested(null);
                  setNotice("Couldn’t load that photo.");
                }
              }}
            />
          ))}
        </div>
        <figcaption>
          <span>
            {notice ||
              (requested !== null
                ? "One moment…"
                : "A few moments, in between.")}
          </span>
          <span aria-live={playing ? "off" : "polite"} aria-atomic="true">
            {String(frame.current + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>
        </figcaption>
      </figure>
      <span className="sr-only" role="status">
        {notice
          ? `${notice} The current photo is still here; try an arrow to browse again.`
          : ""}
      </span>
      <div
        className="photo-stack__controls"
        aria-label="Personal photographs"
        hidden={!enhanced || images.length < 2}
      >
        <button
          type="button"
          onClick={() => {
            setPlaying(false);
            move(-1);
          }}
          aria-label="Previous photograph"
        >
          ←
        </button>
        <button
          className="photo-stack__play"
          type="button"
          disabled={reduced}
          onClick={() => setPlaying((current) => !current)}
          aria-label={
            reduced
              ? "Automatic photos paused for reduced motion"
              : playing
                ? "Pause rotating photos"
                : "Resume rotating photos"
          }
          title={
            reduced
              ? "Your reduced-motion setting keeps photos still. Use the arrows to browse."
              : undefined
          }
        >
          <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
          <span>{playing ? "Pause" : "Play"}</span>
        </button>
        <button
          type="button"
          onClick={() => {
            setPlaying(false);
            move(1);
          }}
          aria-label="Next photograph"
        >
          →
        </button>
      </div>
    </div>
  );
}
