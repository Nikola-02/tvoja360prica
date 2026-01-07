// components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-20 pb-16 text-center">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full bg-amber-600 text-white text-sm font-semibold">
          Premium 360 Video Booth
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight">
          Unapredite svoju proslavu — ne dozvolite da bude monotona
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Dignite atmosferu, snimite viralan sadržaj i obezbedite gostima video koji će deliti.
          Instant edit, QR sharing i profesionalna oprema.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#booking"
            className="inline-flex items-center justify-center rounded-md bg-amber-600 px-6 py-3 text-white font-semibold shadow hover:bg-amber-700"
          >
            Rezerviši Termin
          </a>

          <a
            href="#gallery"
            className="inline-flex items-center justify-center rounded-md border border-slate-200 px-6 py-3 text-white-700 font-medium hover:bg-slate-50 hover:text-black"
          >
            Pogledaj Primere
          </a>
        </div>

        <div className="mt-12 mx-auto max-w-md rounded-xl overflow-hidden shadow-lg">
          <video
            src="/videos/sample1.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
