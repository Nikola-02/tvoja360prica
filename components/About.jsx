import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import Icon from "./Icon";

const pillars = [
  { icon: "clock",     label: "Pouzdanost",   desc: "Uvek na vreme, uvek spremni" },
  { icon: "sparkles",  label: "Kvalitet",      desc: "Profesionalna oprema i obrada" },
  { icon: "heart",     label: "Bezbrižnost",   desc: "Vi slavite, mi radimo" },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader title="Vaš partner za nezaboravne trenutke" />
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-5 text-center text-[1.0625rem] leading-[1.8] text-[#0f0f0f]/65">
            <p>
              <span className="font-semibold text-[#0f0f0f]">Tvoja 360 Priča</span>{" "}
              je specijalizovana 360 video booth usluga sa sedištem u Beogradu,
              dostupna u Pančevu i na venčanjima, rođendanima, maturama i
              korporativnim događajima širom Srbije. Ne prodajemo samo opremu. Stvaramo
              iskustvo koje gosti pamte i dele.
            </p>
            <p>
              Svaki događaj vodimo sa punom pažnjom: dolazimo na vreme,
              postavljamo setup diskretno i profesionalno, a operater vodi goste
              kroz snimanje tako da se osećaju opušteno i zabavno. Vi slavite,
              mi radimo od prve do poslednje minute.
            </p>
            <p>
              Snimci su oštri, dinamični i spremni za deljenje za nekoliko
              sekundi. QR, WhatsApp i e-mail deljenje znači da gosti odlaze sa
              uspomenom u džepu, a vi sa sadržajem koji prirodno širi vašu
              proslavu dalje od sale.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pillars.map((item) => (
              <div
                key={item.label}
                className="bg-white border border-[#c9a84c]/20 py-8 px-6 text-center hover:border-[#c9a84c]/50 transition-colors duration-300"
              >
                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full mb-4 mx-auto"
                  style={{ background: "rgba(201,168,76,0.10)" }}
                >
                  <Icon name={item.icon} size={20} color="#c9a84c" strokeWidth={1.5} />
                </div>
                <div className="text-[1.0625rem] font-semibold text-[#0f0f0f]">
                  {item.label}
                </div>
                <p className="mt-2 text-[0.9375rem] text-[#0f0f0f]/55">{item.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <a href="#booking" className="btn-primary whitespace-nowrap">
              Proveri slobodan termin →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
