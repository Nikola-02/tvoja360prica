"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "tvoja360-promo-dismissed";

export default function PromoPopup() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);

  const dismiss = useCallback(() => {
    setActive(false);
    setTimeout(() => {
      setMounted(false);
      localStorage.setItem(STORAGE_KEY, "1");
    }, 320);
  }, []);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;

    const showTimer = setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setActive(true));
      });
    }, 700);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") dismiss();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mounted, dismiss]);

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="promo-title"
      className={`fixed z-[70] bottom-4 right-4 left-4 sm:left-auto sm:max-w-[19rem] transition-all duration-300 ${
        active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <div className="relative overflow-hidden rounded-xl border border-[#c9a84c]/35 bg-[#0f0f0f]/96 backdrop-blur-md shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
        <div className="h-0.5 bg-gradient-to-r from-[#c9a84c] via-[#e8c96a] to-[#c9a84c]" />

        <button
          type="button"
          onClick={dismiss}
          aria-label="Zatvori"
          className="absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-md text-white/55 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="px-5 pt-5 pb-5 text-center">
          <p className="text-[0.625rem] font-bold uppercase tracking-[0.16em] text-[#c9a84c]">
            Specijalna ponuda
          </p>
          <h2 id="promo-title" className="heading-serif mt-1.5 text-[1.125rem] leading-snug text-white">
            Gratis <span className="text-[#c9a84c]">+1 sat</span> uz svaki paket
          </h2>
          <p className="mt-2 text-[0.8125rem] leading-relaxed text-white/60">
            Rezervišite bilo koji paket i dobijate još 1 sat snimanja besplatno.
          </p>

          <div className="mt-4 flex flex-col items-center gap-2">
            <a
              href="#booking"
              onClick={dismiss}
              className="btn-primary w-full justify-center !py-2.5 !px-4 !text-xs sm:!text-sm whitespace-nowrap"
            >
              Proveri slobodan termin
            </a>
            <button
              type="button"
              onClick={dismiss}
              className="text-xs text-white/40 hover:text-white/65 transition-colors"
            >
              Ne sada
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
