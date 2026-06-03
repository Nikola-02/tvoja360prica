import ScrollReveal from "./ScrollReveal";
import Icon from "./Icon";

const stats = [
  { icon: "camera",   value: "1000+",   label: "Snimljenih videa" },
  { icon: "sparkles", value: "70+",     label: "Uspešnih događaja" },
  { icon: "phone",    value: "Instant", label: "Deljenje snimaka" },
  { icon: "map",      value: "Srbija",  label: "Dostupno svuda" },
];

const occasions = [
  "Venčanja",
  "Rođendani",
  "Mature",
  "Korporativni eventi",
  "Jubileji",
];

export default function Hero() {
  return (
    <>
      {/* ── Dark hero ── */}
      <section
        className="relative min-h-[94vh] flex flex-col justify-center overflow-hidden"
        style={{ background: "linear-gradient(155deg, #0f0f0f 60%, #1c1408 100%)" }}
      >
        {/* Zlatni sjaj */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 62% 30%, rgba(201,168,76,0.11) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 pt-36 pb-20 text-center">

          {/* Prigode */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {occasions.map((o) => (
                <span
                  key={o}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(201,168,76,0.10)",
                    border: "1px solid rgba(201,168,76,0.22)",
                    color: "rgba(201,168,76,0.9)",
                  }}
                >
                  <Icon name="check" size={12} color="#c9a84c" strokeWidth={2} />
                  {o}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Gornji natpis */}
          <ScrollReveal delay={60}>
            <p
              className="text-sm font-semibold tracking-[0.2em] uppercase mb-6"
              style={{ color: "rgba(201,168,76,0.75)" }}
            >
              360° Video Booth · Beograd i cela Srbija
            </p>
          </ScrollReveal>

          {/* Glavni naslov */}
          <ScrollReveal delay={120}>
            <h1
              className="display text-[2.6rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] text-white max-w-4xl mx-auto"
              style={{ lineHeight: 1.06 }}
            >
              Učinite vašu proslavu{" "}
              <span className="display-italic" style={{ color: "#c9a84c" }}>
                nezaboravnom
              </span>
            </h1>
          </ScrollReveal>

          {/* Podnaslov */}
          <ScrollReveal delay={200}>
            <p
              className="mt-7 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Svaki trenutak pretvaramo u spektakularni 360° video — spreman
              za deljenje odmah nakon snimanja.
            </p>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={280}>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a href="#booking" className="btn-primary text-base !px-8 !py-4">
                Rezerviši Termin →
              </a>
              <a href="#gallery" className="btn-ghost text-base !px-8 !py-4">
                Pogledaj Snimke
              </a>
            </div>
          </ScrollReveal>

          {/* Video */}
          <ScrollReveal delay={360}>
            <div
              className="mt-16 mx-auto max-w-3xl overflow-hidden"
              style={{
                border: "1px solid rgba(201,168,76,0.25)",
                borderRadius: "4px",
                boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
              }}
            >
              <video
                src="/videos/sample1.mp4"
                className="w-full aspect-video object-cover"
                autoPlay
                muted
                loop
                playsInline
                aria-label="360 video booth primer snimka sa događaja u Srbiji"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Statistike ── */}
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
