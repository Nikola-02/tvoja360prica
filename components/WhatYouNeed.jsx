import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import Icon from "./Icon";

const clientNeeds = [
  {
    icon: "map",
    title: "Prostor od najmanje 3×3 metra",
    description:
      "Dovoljno mesta za platformu, osvetljenje i slobodan prostor za goste.",
  },
  {
    icon: "bolt",
    title: "Jedna standardna strujna utičnica",
    description: "Sve ostalo dolazi sa našom opremom — bez dodatnih zahteva.",
  },
];

const ourServices = [
  {
    icon: "camera",
    title: "Profesionalna 360° platforma",
    description: "Rotaciona platforma za spektakularne slow-motion snimke.",
  },
  {
    icon: "lightbulb",
    title: "Profesionalno osvetljenje",
    description: "Studijsko osvetljenje koje ističe svaki detalj i lice.",
  },
  {
    icon: "user",
    title: "Naš tim vodi ceo događaj",
    description: "Iskusan tim brine o svemu, vi se opuštate, mi radimo.",
  },
  {
    icon: "sparkles",
    title: "Instant obrada snimaka",
    description: "Video spreman za deljenje za nekoliko sekundi nakon snimanja.",
  },
  {
    icon: "share",
    title: "Instant nakon snimanja QR, WhatsApp i e-mail deljenje i preuzimanje",
    description: "Gosti odmah dele snimke na društvenim mrežama.",
  },
  {
    icon: "wrench",
    title: "Montaža i demontaža opreme",
    description: "Dolazimo ranije, postavljamo sve i po završetku pakujemo.",
  },
];

export default function WhatYouNeed() {
  return (
    <section className="section-padding bg-warm">
      <div className="max-w-6xl mx-auto px-6 space-y-24">

        {/* Šta treba da obezbedite */}
        <div>
          <ScrollReveal>
            <SectionHeader
              title="Sve što je potrebno od vas"
              description="Minimalni zahtevi — maksimalno iskustvo."
            />
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {clientNeeds.map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-[#c9a84c]/20 p-8 text-center group hover:border-[#c9a84c]/50 transition-colors duration-300"
                >
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-5 mx-auto transition-colors duration-300"
                    style={{ background: "rgba(201,168,76,0.10)" }}
                  >
                    <Icon name={item.icon} size={22} color="#c9a84c" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[1.0625rem] font-bold text-[#0f0f0f] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-[#0f0f0f]/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="mt-10 text-center text-xl md:text-2xl heading-serif italic text-[#0f0f0f]/50">
              Ostalo prepustite nama.
            </p>
          </ScrollReveal>
        </div>

        {/* Divider */}
        <div className="gold-line" />

        {/* Šta mi obezbeđujemo */}
        <div>
          <ScrollReveal>
            <SectionHeader
              title="Kompletna usluga"
              description="Sve što vam treba za nezaboravno 360 video iskustvo na jednom mestu."
            />
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ourServices.map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-[#c9a84c]/20 p-8 group hover:border-[#c9a84c]/50 hover:shadow-[0_8px_32px_rgba(201,168,76,0.08)] transition-all duration-300"
                >
                  <div
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full mb-5"
                    style={{ background: "rgba(201,168,76,0.10)" }}
                  >
                    <Icon name={item.icon} size={20} color="#c9a84c" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[1.0625rem] font-bold text-[#0f0f0f] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-[#0f0f0f]/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-14 text-center">
              <a href="#booking" className="btn-primary">
                Pošalji upit →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
