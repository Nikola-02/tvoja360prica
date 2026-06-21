import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

const videos = [
  {
    src: "/videos/sample1.mp4",
    label: "360 video booth Beograd svadba — venčanje",
  },
  {
    src: "/videos/sample2.mp4",
    label: "360 video booth Srbija punoletstvo — rođendan",
  },
  {
    src: "/videos/sample3.mp4",
    label: "360 video booth korporativni događaj — 360 snimanje",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title="Galerija — 360 video snimci"
            description={
              <>
                Pravi snimci sa venčanja, rođendana i proslava širom Srbije. Gosti
                odlaze sa video uspomenom u ruci odmah nakon snimanja. Pogledajte{" "}
                <a href="#pricing" className="font-semibold text-[#c9a84c] hover:underline">
                  cenovnik
                </a>{" "}
                ili nas{" "}
                <a href="#contact" className="font-semibold text-[#c9a84c] hover:underline">
                  kontaktirajte
                </a>{" "}
                za ponudu.
              </>
            }
          />
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {videos.map((video) => (
              <div key={video.src} className="group">
                <div className="overflow-hidden border border-[#D4AF37]/20">
                  <video
                    src={video.src}
                    className="w-full aspect-[9/16] md:aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={video.label}
                  />
                </div>
                <p className="mt-3 text-muted text-center">
                  {video.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-14 text-center">
            <a href="#booking" className="btn-primary">
              Želim ovo na mom događaju
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
