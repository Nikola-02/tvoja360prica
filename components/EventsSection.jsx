import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import Icon from "./Icon";

const events = [
  {
    icon: "heart",
    title: "Venčanja i svadbe",
    description:
      "Gosti snimaju spektakularne 360 videe tokom proslave — savršen dodatak svadbene zabave.",
  },
  {
    icon: "sparkles",
    title: "Punoletstva i mature",
    description:
      "Mladi obožavaju deljive videe. 360 booth je hit na svakom punoletstvu i maturi.",
  },
  {
    icon: "camera",
    title: "Rođendani i jubileji",
    description:
      "Od prvog rođendana do velikih jubileja — zabavna uspomena za celu porodicu.",
  },
  {
    icon: "user",
    title: "Korporativni eventi",
    description:
      "Team building, proslave firme i konferencije — brendirani sadržaj koji zaposleni dele.",
  },
];

export default function EventsSection() {
  return (
    <section className="section-padding bg-warm" aria-labelledby="events-heading">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title="Za koje događaje je idealan 360 Video Booth"
            description="360 video booth unosi energiju i interaktivnost na svaku proslavu — od intimnih venčanja do velikih korporativnih događaja."
          />
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {events.map((event) => (
              <article
                key={event.title}
                className="bg-white border border-[#c9a84c]/20 p-8 hover:border-[#c9a84c]/50 transition-colors duration-300"
              >
                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full mb-5"
                  style={{ background: "rgba(201,168,76,0.10)" }}
                >
                  <Icon name={event.icon} size={20} color="#c9a84c" strokeWidth={1.5} />
                </div>
                <h3 className="text-[1.0625rem] font-bold text-[#0f0f0f]">{event.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-[#0f0f0f]/60">
                  {event.description}
                </p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
