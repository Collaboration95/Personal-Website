"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { eras, type EraTheme } from "@/lib/eras";

type Pose = "idle" | "wave" | "happy" | "sleep";
const reactions: readonly Pose[] = ["wave", "happy", "sleep", "idle"];
const messages: Record<Pose, string> = {
  idle: "Ready for another little adventure.",
  wave: "A little hello from Pip.",
  happy: "One tiny snack. One happy otter.",
  sleep: "Pip is napping. Tap to wake.",
};

/** Original artwork at rest; generated poses respond to ordinary buttons. */
export default function Companion({
  theme,
  size = 192,
  compact = false,
}: {
  theme: EraTheme;
  size?: number;
  compact?: boolean;
}) {
  const [enhanced, setEnhanced] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [pose, setPose] = useState<Pose>("idle");
  const [message, setMessage] = useState("");
  const [reaction, setReaction] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const turn = useRef(0);
  const era = eras.find((item) => item.theme === theme)!;
  useEffect(() => {
    setEnhanced(true);
    return () => clearTimeout(timer.current);
  }, []);

  function respond(next: Pose) {
    clearTimeout(timer.current);
    setPose(next);
    setMessage(messages[next]);
    setReaction((value) => value + 1);
    if (next === "wave" || next === "happy") {
      timer.current = setTimeout(() => setPose("idle"), 1800);
    }
  }
  function play() {
    if (pose === "sleep") {
      turn.current = 0;
      respond("idle");
    } else {
      respond(reactions[turn.current++ % reactions.length]);
    }
  }
  const disabled = !enhanced || (!ready && !failed);
  return (
    <div
      className={`companion${compact ? " companion--compact" : ""}`}
      data-theme={theme}
      data-pose={pose}
    >
      <button
        type="button"
        className="companion__pet"
        disabled={disabled}
        aria-label={`${pose === "sleep" ? "Wake" : "Play with"} Pip, ${era.label.toLowerCase()} companion`}
        title="Tap Pip to wave, share a snack, or take a nap"
        onClick={play}
      >
        <span className="companion__motion" data-reaction={pose} key={reaction}>
          <span className="companion__window">
            <Image
              src={`/companions/pip-${theme}.webp`}
              alt=""
              width={512}
              height={512}
              sizes={`${size}px`}
              className="companion__still"
              style={{ opacity: ready ? 0 : 1 }}
            />
          </span>
        </span>
        <span
          className="companion__sprite-motion"
          data-reaction={pose}
          key={`sprite-${reaction}`}
          aria-hidden="true"
        >
          <span
            className="companion__window"
            style={{ opacity: ready ? 1 : 0 }}
          >
            <Image
              src={`/companions/sprites/pip-${theme}.webp`}
              alt=""
              width={512}
              height={512}
              unoptimized
              className="companion__sheet"
              onLoad={() => setReady(true)}
              onError={() => setFailed(true)}
            />
          </span>
        </span>
      </button>
      {!compact && (
        <div
          className="companion__controls"
          aria-label={`Play with ${era.label.toLowerCase()} Pip`}
          hidden={!enhanced}
        >
          <button
            type="button"
            disabled={disabled}
            onClick={() => respond("wave")}
          >
            Wave
          </button>
          <button
            type="button"
            disabled={disabled}
            onClick={() => respond("happy")}
          >
            Snack
          </button>
          <button
            type="button"
            disabled={disabled}
            aria-pressed={pose === "sleep"}
            onClick={() => respond(pose === "sleep" ? "idle" : "sleep")}
          >
            {pose === "sleep" ? "Wake" : "Nap"}
          </button>
        </div>
      )}
      <span
        className={compact ? "sr-only" : "companion__status"}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {message || (enhanced && !compact ? "Tap to say hello." : "")}
      </span>
    </div>
  );
}
