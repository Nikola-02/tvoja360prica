"use client";

import { useCallback, useRef } from "react";
import { GALLERY_DEFAULT_VOLUME } from "../lib/heroMedia";

export default function GalleryVideo({ src, poster, label }) {
  const ref = useRef(null);

  const applyVolume = useCallback(() => {
    if (ref.current) {
      ref.current.volume = GALLERY_DEFAULT_VOLUME;
    }
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      className="w-full aspect-[9/16] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
      controls
      playsInline
      preload="metadata"
      aria-label={label}
      onLoadedMetadata={applyVolume}
      onPlay={applyVolume}
    />
  );
}
