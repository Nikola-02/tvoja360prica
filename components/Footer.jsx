export default function Footer() {
  return (
    <footer className="py-14 mt-8" style={{ background: "#0f0f0f" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div>
          <div className="heading-serif text-xl text-white">
            <span style={{ color: "#c9a84c" }}>360</span> Priča
          </div>
          <p className="mt-2 text-[0.9375rem] text-white/45">
            360° video booth · Beograd i cela Srbija
          </p>
          <a
            href="mailto:tvoja360prica.studio@gmail.com"
            className="mt-2 inline-block text-[0.9375rem] text-white/55 hover:text-[#c9a84c] transition-colors"
          >
            tvoja360prica.studio@gmail.com
          </a>
        </div>

        <nav className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <a href="#gallery" className="text-sm text-white/45 hover:text-white transition-colors">Snimci</a>
          <a href="#booking" className="text-sm text-white/45 hover:text-white transition-colors">Rezervacija</a>
          <a href="#contact" className="text-sm text-white/45 hover:text-white transition-colors">Kontakt</a>
        </nav>

        <div className="text-sm text-white/25">
          © {new Date().getFullYear()} 360 Priča
        </div>
      </div>
    </footer>
  );
}
