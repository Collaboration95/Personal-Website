"use client";
import Image from "next/image";
import { useState } from "react";
import type { EraTheme } from "@/lib/eras";

/** Decorative artwork never supplies navigation or content. */
export default function Companion({
  theme,
  size = 192,
}: {
  theme: EraTheme;
  size?: number;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <span className="companion" aria-hidden="true" data-theme={theme}>
      {!failed && (
        <Image
          src={`/companions/pip-${theme}.webp`}
          alt=""
          width={512}
          height={512}
          sizes={`${size}px`}
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}
