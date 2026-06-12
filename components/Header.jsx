"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const MENU_MS = 320;

const links = [
  { href: "#platforma", label: "Platforma" },
  { href: "#gallery", label: "Snimci" },
  { href: "#pricing", label: "Cenovnik" },
  { href: "#about", label: "O nama" },
  { href: "#contact", label: "Kontakt" },
];

function HamburgerIcon() {
  return (
    <span className="relative flex h-6 w-6 items-center justify-center" aria-hidden="true">
      <span className="absolute left-1/2 top-[5px] h-[2px] w-6 -translate-x-1/2 rounded-full bg-current" />
      <span className="absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
      <span className="absolute left-1/2 bottom-[5px] h-[2px] w-6 -translate-x-1/2 rounded-full bg-current" />
    </span>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPresent, setMenuPresent] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const panelRef = useRef(null);
  const closeTimerRef = useRef(null);
  const openRaf1Ref = useRef(null);
  const openRaf2Ref = useRef(null);
  const isClosingRef = useRef(false);

  const clearOpenFrames = useCallback(() => {
    if (openRaf1Ref.current != null) {
      cancelAnimationFrame(openRaf1Ref.current);
      openRaf1Ref.current = null;
    }
    if (openRaf2Ref.current != null) {
      cancelAnimationFrame(openRaf2Ref.current);
      openRaf2Ref.current = null;
    }
  }, []);

  const finishClose = useCallback(() => {
    if (!isClosingRef.current) return;
    isClosingRef.current = false;
    if (closeTimerRef.current != null) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setMenuPresent(false);
  }, []);

  const scheduleActivate = useCallback(() => {
    clearOpenFrames();
    setMenuActive(false);

    openRaf1Ref.current = requestAnimationFrame(() => {
      openRaf1Ref.current = null;
      void panelRef.current?.offsetHeight;

      openRaf2Ref.current = requestAnimationFrame(() => {
        openRaf2Ref.current = null;
        setMenuActive(true);
      });
    });
  }, [clearOpenFrames]);

  const openMenu = useCallback(() => {
    if (closeTimerRef.current != null) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    isClosingRef.current = false;

    setMenuOpen(true);
    setMenuPresent(true);
    scheduleActivate();
  }, [scheduleActivate]);

  const closeMenu = useCallback(() => {
    clearOpenFrames();
    setMenuOpen(false);
    setMenuActive(false);
    isClosingRef.current = true;

    if (closeTimerRef.current != null) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(finishClose, MENU_MS + 80);
  }, [clearOpenFrames, finishClose]);

  const handlePanelTransitionEnd = useCallback(
    (e) => {
      if (e.target !== panelRef.current) return;
      if (menuOpen || menuActive) return;
      if (e.propertyName !== "opacity" && e.propertyName !== "transform") return;
      finishClose();
    },
    [menuOpen, menuActive, finishClose]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    return () => {
      clearOpenFrames();
      if (closeTimerRef.current != null) clearTimeout(closeTimerRef.current);
    };
  }, [clearOpenFrames]);

  const menuItems = [
    ...links,
    { href: "#booking", label: "Proveri slobodan termin", accent: true },
  ];

  const panelOpenClass = menuActive
    ? "opacity-100 translate-y-0 scale-100"
    : "opacity-0 -translate-y-3 scale-[0.98] pointer-events-none";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between gap-3 transition-all duration-500 ${
          scrolled
            ? "bg-[#0f0f0f]/92 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2.5 lg:px-5 lg:py-3 shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
            : "bg-transparent px-2 py-2"
        }`}
      >
        <a
          href="#"
          className={`heading-serif text-white tracking-tight shrink-0 transition-all duration-500 ${
            scrolled ? "text-[1.05rem]" : "text-[1.2rem]"
          }`}
        >
          Tvoja <span style={{ color: "#c9a84c" }}>360</span> Priča
        </a>

        <div className="flex items-center gap-2 md:gap-4 lg:gap-6 shrink-0">
          <nav className="hidden md:flex items-center gap-4 lg:gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#booking"
            className="btn-primary hidden md:inline-flex shrink-0 whitespace-nowrap !py-2 !px-3 lg:!py-2.5 lg:!px-4 !text-[0.7rem] lg:!text-xs xl:!text-sm"
          >
            Proveri slobodan termin
          </a>

          <button
            type="button"
            className={`md:hidden relative flex items-center justify-center w-10 h-10 -mr-1 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 ${
              menuOpen ? "opacity-0 pointer-events-none scale-90" : "opacity-100 scale-100"
            }`}
            onClick={openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="Otvori meni"
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>

      {menuPresent && (
        <>
          <button
            type="button"
            className={`mobile-nav-backdrop md:hidden fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm ${
              menuActive ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Zatvori meni"
            onClick={closeMenu}
            tabIndex={menuActive ? 0 : -1}
          />
          <nav
            ref={panelRef}
            id="mobile-nav"
            onTransitionEnd={handlePanelTransitionEnd}
            className={`mobile-nav-panel md:hidden fixed top-[5.5rem] left-4 right-4 z-[60] rounded-xl border border-white/10 bg-[#0f0f0f]/96 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.45)] overflow-hidden origin-top will-change-[opacity,transform] ${panelOpenClass}`}
          >
            <div
              className={`mobile-nav-header flex items-center justify-between px-4 py-3 border-b border-white/10 ${
                menuActive ? "mobile-nav-header--open" : ""
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                Meni
              </span>
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Zatvori meni"
                className={`mobile-nav-close flex items-center justify-center w-9 h-9 rounded-lg text-white/80 hover:text-white bg-white/8 hover:bg-white/12 ring-1 ring-white/10 ${
                  menuActive ? "mobile-nav-close--open" : ""
                }`}
              >
                <CloseIcon />
              </button>
            </div>

            <div className="py-1">
              {menuItems.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`mobile-nav-link block px-5 py-3.5 text-base font-medium whitespace-nowrap ${
                    link.accent
                      ? "text-[#c9a84c] hover:bg-white/5 border-t border-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  } ${menuActive ? "mobile-nav-link--open" : ""}`}
                  style={{ "--nav-index": String(index) }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
