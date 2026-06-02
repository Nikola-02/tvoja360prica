"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#platforma", label: "Platforma" },
  { href: "#gallery", label: "Snimci" },
  { href: "#pricing", label: "Cenovnik" },
  { href: "#about", label: "O nama" },
  { href: "#contact", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "bg-[#0f0f0f]/92 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
            : "bg-transparent px-2 py-2"
        }`}
      >
        <a href="#" className="heading-serif text-[1.2rem] text-white tracking-tight">
          Tvoja <span style={{ color: "#c9a84c" }}>360</span> Priča
        </a>

        <div className="flex items-center gap-6 md:gap-8">
          <nav className="hidden md:flex items-center gap-7">
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

          <a href="#booking" className="btn-primary !py-2.5 !px-5 !text-sm">
            Rezerviši Termin
          </a>
        </div>
      </div>
    </header>
  );
}
