const socialLinks = [
  {
    label: "Instagram",
    handle: "@tvoja360prica",
    href: "https://www.instagram.com/tvoja360prica/",
  },
  {
    label: "Facebook",
    handle: "Tvoja 360 Priča",
    href: "https://www.facebook.com/tvoja360prica",
  },
];

export default function Footer() {
  return (
    <footer className="py-14 mt-8" style={{ background: "#0f0f0f" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div>
          <div className="heading-serif text-xl text-white">
            Tvoja <span style={{ color: "#c9a84c" }}>360</span> Priča
          </div>
          <p className="mt-2 text-[0.9375rem] text-white/45">
            360 video booth · Beograd, Pančevo i širom Srbije · od 159€ / 2h
          </p>
          <a
            href="mailto:tvoja360prica.studio@gmail.com"
            className="mt-2 inline-block text-[0.9375rem] text-white/55 hover:text-[#c9a84c] transition-colors"
          >
            tvoja360prica.studio@gmail.com
          </a>
          <div className="mt-4 flex flex-col gap-2">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.9375rem] text-white/55 hover:text-[#c9a84c] transition-colors"
              >
                {item.label}: <span className="text-white/70">{item.handle}</span>
              </a>
            ))}
          </div>
        </div>

        <nav className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <a href="/360-video-booth-beograd" className="text-sm text-white/45 hover:text-white transition-colors whitespace-nowrap">
            360 Booth Beograd
          </a>
          <a href="/360-video-booth-srbija" className="text-sm text-white/45 hover:text-white transition-colors whitespace-nowrap">
            360 Booth Srbija
          </a>
          <a href="/#gallery" className="text-sm text-white/45 hover:text-white transition-colors">
            Galerija
          </a>
          <a href="/#pricing" className="text-sm text-white/45 hover:text-white transition-colors whitespace-nowrap">
            Cenovnik
          </a>
          <a href="/#contact" className="text-sm text-white/45 hover:text-white transition-colors whitespace-nowrap">
            Kontakt
          </a>
        </nav>

        <div className="text-sm text-white/25">
          © {new Date().getFullYear()} Tvoja 360 Priča
        </div>
      </div>
    </footer>
  );
}
