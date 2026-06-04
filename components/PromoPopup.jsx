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
    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        className={`promo-popup-backdrop absolute inset-0 bg-black/55 backdrop-blur-sm transition-opacity duration-300 ${
          active ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Zatvori ponudu"
        onClick={dismiss}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        className={`promo-popup-panel relative w-full max-w-[22rem] sm:max-w-md overflow-hidden rounded-xl border border-[#c9a84c]/30 bg-[#0f0f0f] shadow-[0_24px_80px_rgba(0,0,0,0.45)] transition-all duration-300 ${
          active ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-[0.97]"
        }`}
      >
        <div className="h-1 bg-gradient-to-r from-[#c9a84c] via-[#e8c96a] to-[#c9a84c]" />

        <button
          type="button"
          onClick={dismiss}
          aria-label="Zatvori"
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="px-6 pt-6 pb-6">
          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-[#c9a84c]">
            Specijalna ponuda
          </p>
          <h2 id="promo-title" className="heading-serif mt-2 text-[1.35rem] leading-snug text-white">
            Gratis <span className="text-[#c9a84c]">+1 sat</span> uz svaki paket
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            Rezervišite bilo koji paket i dobijate još jedan sat 360° snimanja potpuno besplatno.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-[#c9a84c]">✓</span>
              Važi za sve pakete u cenovniku
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-[#c9a84c]">✓</span>
              Više snimaka i više zabave za goste
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-[#c9a84c]">✓</span>
              Bez skrivenih troškova
            </li>
          </ul>

          <div className="mt-6 flex flex-col gap-2.5">
            <a
              href="#booking"
              onClick={dismiss}
              className="btn-primary w-full justify-center !py-3.5 !text-sm"
            >
              Rezerviši Termin
            </a>
            <button
              type="button"
              onClick={dismiss}
              className="text-sm text-white/45 hover:text-white/70 transition-colors"
            >
              Ne sada
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
