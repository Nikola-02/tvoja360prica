import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import Icon from "./Icon";

const stats = [
  { icon: "camera", value: "1000+", label: "Snimljenih videa" },
  { icon: "sparkles", value: "70+", label: "Uspešnih događaja" },
  { icon: "phone", value: "Instant", label: "Deljenje snimaka" },
  { icon: "map", value: "Srbija", label: "Dostupno svuda" },
];

export default function Hero() {
  return (
    <>
      <section
        className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden"
        style={{ background: "#0a0a0a" }}
      >
        <div className="relative w-full max-w-7xl mx-auto px-6 pt-32 pb-14 md:pb-20 lg:pt-36 lg:pb-24">
          <div className="grid lg:grid-cols-12 lg:gap-x-10 xl:gap-x-16 items-end">
            {/* Tekst — levo, editorial */}
            <div className="lg:col-span-7 text-left">
              <ScrollReveal>
                <div className="flex items-center gap-5 mb-10 md:mb-14">
                  <span
                    className="block h-px w-10 shrink-0"
                    style={{ background: "#c9a84c" }}
                  />
                  <p className="text-[0.6875rem] font-medium tracking-[0.24em] uppercase text-white/35">
                    Beograd · Pančevo · Srbija
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <h1
                  className="display text-[clamp(2.125rem,5.2vw,4.5rem)] text-white max-w-[13.5em]"
                  style={{ lineHeight: 1.04, letterSpacing: "-0.03em" }}
                >
                  360 Video Booth Beograd
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <p
                  className="mt-5 md:mt-6 display-italic text-[clamp(1.25rem,2.5vw,1.75rem)] text-white/90 max-w-[22rem]"
                  style={{ lineHeight: 1.25 }}
                >
                  Pretvorite proslavu u događaj o kome svi pričaju.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={180}>
                <p
                  className="mt-7 md:mt-9 text-[1rem] md:text-[1.0625rem] max-w-[28rem] leading-[1.75] font-normal"
                  style={{ color: "rgba(255,255,255,0.48)" }}
                >
                  Premium 360 video iskustvo za svadbe, punoletstva i korporativne
                  događaje. Gosti dobijaju svoje videe odmah, a uspomene ostaju zauvek.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={240}>
                <div className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
                  <a
                    href="#booking"
                    className="btn-primary text-[0.9375rem] !px-7 !py-3.5 whitespace-nowrap w-fit"
                  >
                    Proveri slobodan termin →
                  </a>
                  <a
                    href="#gallery"
                    className="hero-text-link group inline-flex items-center gap-3 text-[0.875rem] font-medium w-fit"
                  >
                    <span
                      className="block h-px w-6 transition-all duration-300 group-hover:w-10"
                      style={{ background: "rgba(255,255,255,0.25)" }}
                    />
                    <span className="text-white/45 transition-colors duration-300 group-hover:text-white/80">
                      Pogledaj snimke
                    </span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Slika — desno, okvir editorial stila */}
            <ScrollReveal delay={120} className="lg:col-span-5 mt-14 lg:mt-0">
              <div className="relative mx-auto lg:mx-0 lg:ml-auto w-full max-w-[min(72vw,340px)] lg:max-w-none">
                <div
                  className="absolute -inset-3 md:-inset-4 pointer-events-none hidden lg:block"
                  style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                  aria-hidden="true"
                />
                <div
                  className="relative aspect-[3/4] overflow-hidden"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Image
                    src="/setup/booth-setup.jpg"
                    alt="360 video booth Beograd svadba — premium rotaciona platforma"
                    fill
                    priority
                    sizes="(max-width: 1024px) 72vw, 42vw"
                    className="object-cover object-center"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,10,10,0.35) 0%, transparent 40%)",
                    }}
                    aria-hidden="true"
                  />
                </div>
                <p
                  className="mt-4 hidden lg:block text-[0.6875rem] tracking-[0.18em] uppercase text-white/25"
                >
                  360° · GoPro Hero 12 · Instant share
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Statistike */}
      <div className="border-b border-[#e8e2d4]">
        <ScrollReveal stagger>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#e8e2d4] max-w-5xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="py-8 px-6 text-center bg-warm">
                <div className="flex justify-center mb-3" style={{ color: "#c9a84c" }}>
                  <Icon name={stat.icon} size={24} color="#c9a84c" strokeWidth={1.5} />
                </div>
                <div className="heading-serif text-2xl md:text-3xl" style={{ color: "#c9a84c" }}>
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium text-[#0f0f0f]/55 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
