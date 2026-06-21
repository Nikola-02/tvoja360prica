import ScrollReveal from "./ScrollReveal";
import Icon from "./Icon";

const BASE_PRICE = 159;
const EXTRA_HOUR = 40;
const OLD_PRICE_MARKUP = 1.35;

function oldPriceFrom(price) {
  return Math.round((price * OLD_PRICE_MARKUP) / 10) * 10;
}

function formatDuration(h) {
  if (h === 1) return "1 sat";
  if (h >= 2 && h <= 4) return `${h} sata`;
  return `${h} sati`;
}

const hours = [2, 3, 4].map((h) => {
  const price = BASE_PRICE + (h - 2) * EXTRA_HOUR;
  return {
    h,
    label: formatDuration(h),
    price,
    oldPrice: oldPriceFrom(price),
    popular: h === 3,
  };
});

const included = [
  "Najnovija GoPro Hero 12 Black kamera (skoro 6K, stabilizovan video)",
  "Velika platforma od 100 cm prečnika (za do 4 osobe istovremeno)",
  "Unikatni i jedinstveni rekviziti uključeni u cenu",
  "Besplatna dostava i montaža u Beogradu i Pančevu · dostupno širom Srbije",
  "Instant preuzimanje snimaka putem QR koda",
  "Naš tim vodi ceo događaj. Vi se opuštate, mi radimo",
];

const cardStyle = {
  borderColor: "rgba(201,168,76,0.15)",
  background: "rgba(255,255,255,0.03)",
};

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding" style={{ background: "#0f0f0f" }}>
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="gold-line mb-6" />
            <h2 className="heading text-[2rem] md:text-[2.75rem] text-white">
              Cenovnik | 360 Video Booth
            </h2>
            <p
              className="mt-5 text-base md:text-lg max-w-2xl mx-auto"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Transparentne cene za Beograd, Pančevo i širom Srbije, bez skrivenih
              troškova. Pogledajte{" "}
              <a
                href="#gallery"
                className="font-semibold underline underline-offset-4"
                style={{ color: "#c9a84c" }}
              >
                galeriju
              </a>{" "}
              ili nas{" "}
              <a
                href="#contact"
                className="font-semibold underline underline-offset-4"
                style={{ color: "#c9a84c" }}
              >
                kontaktirajte
              </a>{" "}
              za ponudu.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Leva kolona — cenovnik */}
          <ScrollReveal className="h-full">
            <div
              className="border p-8 md:p-10 h-full flex flex-col"
              style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(255,255,255,0.03)" }}
            >
              <p
                className="text-xs font-semibold tracking-[0.18em] uppercase mb-6"
                style={{ color: "#c9a84c" }}
              >
                Cena po trajanju
              </p>

              <div className="space-y-3 flex-1">
                {hours.map(({ h, label, price, oldPrice, popular }) => (
                  <div
                    key={h}
                    className="py-4 px-5"
                    style={{
                      background: popular ? "rgba(201,168,76,0.10)" : "transparent",
                      border: popular
                        ? "1px solid rgba(201,168,76,0.3)"
                        : "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "3px",
                    }}
                  >
                    <div className="flex items-start sm:items-center justify-between gap-3 w-full">
                      <div
                        className={
                          popular
                            ? "flex flex-col items-start gap-1.5 min-w-0 sm:flex-row sm:items-center sm:gap-3"
                            : "flex items-center gap-2 min-w-0"
                        }
                      >
                        <div className="flex items-center gap-2 shrink-0">
                          <Icon
                            name="clock"
                            size={18}
                            color={popular ? "#c9a84c" : "rgba(255,255,255,0.4)"}
                            strokeWidth={1.5}
                          />
                          <span
                            className="font-semibold text-[1.0625rem] whitespace-nowrap"
                            style={{ color: popular ? "#c9a84c" : "rgba(255,255,255,0.75)" }}
                          >
                            {label}
                          </span>
                        </div>
                        {popular && (
                          <span
                            className="text-[0.65rem] sm:text-[0.7rem] font-bold tracking-wider uppercase px-2 py-0.5 whitespace-nowrap shrink-0"
                            style={{ background: "#c9a84c", color: "#0f0f0f", borderRadius: "2px" }}
                          >
                            Popularno
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col items-end gap-0.5 shrink-0">
                        <span
                          className="text-sm line-through decoration-white/25"
                          style={{ color: "rgba(255,255,255,0.35)" }}
                        >
                          {oldPrice} €
                        </span>
                        <span
                          className="heading-serif text-2xl leading-none"
                          style={{ color: popular ? "#c9a84c" : "rgba(255,255,255,0.9)" }}
                        >
                          {price} €
                        </span>
                      </div>
                    </div>
                    {popular && (
                      <p
                        className="mt-3 pt-3 text-xs leading-relaxed border-t"
                        style={{
                          color: "rgba(255,255,255,0.5)",
                          borderColor: "rgba(201,168,76,0.2)",
                        }}
                      >
                        Najpovolniji paket na tržištu. Više od{" "}
                        <span className="font-semibold" style={{ color: "#c9a84c" }}>
                          50+ klijenata
                        </span>{" "}
                        već je izabralo ovaj paket. Najčešći izbor za venčanja,
                        punoletstva i proslave.
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                Svaki sledeći sat angažovanja{" "}
                <span className="text-white/70 font-medium">+{EXTRA_HOUR} €</span>
              </p>

              <p
                className="mt-4 text-sm leading-relaxed px-4 py-3 border-l-2"
                style={{
                  color: "rgba(255,255,255,0.72)",
                  borderColor: "#c9a84c",
                  background: "rgba(201,168,76,0.08)",
                  borderRadius: "0 3px 3px 0",
                }}
              >
                Za{" "}
                <span className="font-semibold text-white">Beograd, Pančevo i okolinu</span>{" "}
                put i transport do događaja su{" "}
                <span className="font-bold" style={{ color: "#c9a84c" }}>
                  besplatni
                </span>
                . Iznajmljivanje dostupno i na događajima{" "}
                <span className="font-semibold text-white">širom Srbije</span>.
              </p>

              <a
                href="#booking"
                className="btn-primary w-full justify-center mt-8 !py-4 !text-base whitespace-nowrap"
              >
                Proveri slobodan termin →
              </a>
            </div>
          </ScrollReveal>

          {/* Desna kolona */}
          <div className="flex flex-col gap-6">
            <ScrollReveal>
              <div className="border p-8" style={cardStyle}>
                <p
                  className="text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                  style={{ color: "#c9a84c" }}
                >
                  Prednosti paketa
                </p>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0">
                        <Icon name="check" size={18} color="#c9a84c" strokeWidth={2} />
                      </span>
                      <span className="text-[0.9375rem]" style={{ color: "rgba(255,255,255,0.7)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div
                className="border p-8"
                style={{
                  borderColor: "rgba(201,168,76,0.35)",
                  background:
                    "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full"
                    style={{ background: "rgba(201,168,76,0.15)" }}
                  >
                    <Icon name="share" size={20} color="#c9a84c" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold tracking-[0.18em] uppercase mb-2"
                      style={{ color: "#c9a84c" }}
                    >
                      Preporuči prijatelju
                    </p>
                    <p className="text-[1.0625rem] font-semibold text-white leading-snug mb-3">
                      Preporučite nas, oboje štedite
                    </p>
                    <p
                      className="text-[0.9375rem] leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      Preporučite nas nekome ko zakaže i realizuje događaj, i vi i vaš
                      prijatelj dobijate{" "}
                      <span className="font-bold" style={{ color: "#c9a84c" }}>
                        10% popusta
                      </span>{" "}
                      na ukupnu cenu. Nagrada za poverenje, s obe strane.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Urgency — ispod obe kolone */}
        <ScrollReveal delay={120}>
          <div
            className="border p-6 flex items-center gap-4 mt-8"
            style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
          >
            <Icon name="star" size={22} color="#c9a84c" strokeWidth={1.5} />
            <p className="text-[0.9375rem]" style={{ color: "rgba(255,255,255,0.6)" }}>
              Termini za letnju sezonu se popunjavaju brzo.{" "}
              <a
                href="#booking"
                className="font-semibold underline underline-offset-4"
                style={{ color: "#c9a84c" }}
              >
                osigurajte vaš datum odmah
              </a>
              .
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
