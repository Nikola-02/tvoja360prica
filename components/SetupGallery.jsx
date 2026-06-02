import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

const setupImages = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "360 video platforma za venčanja — premium setup sa osvetljenjem",
    title: "Premium platforma",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
    alt: "Profesionalno osvetljenje za 360 video booth na proslavi",
    title: "Profesionalno osvetljenje",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    alt: "Gosti uživaju u 360 video iskustvu na rođendanu u Beogradu",
    title: "Gosti u akciji",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    alt: "Kompletan 360 video booth setup za događaje u Srbiji",
    title: "Kompletan setup",
    span: "md:col-span-2",
  },
];

export default function SetupGallery() {
  return (
    <section id="platforma" className="section-padding bg-warm">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title="Kako izgleda 360 booth iskustvo"
            description="Profesionalna platforma, pažljivo osvetljenje i setup koji se uklapa u svaki događaj — od intimnih venčanja do grandioznih proslava."
          />
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-1 bg-[#D4AF37]/20">
            {setupImages.map((img) => (
              <div
                key={img.title}
                className={`group relative overflow-hidden ${img.span} min-h-[220px]`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/75 via-[#111111]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <p className="text-white text-sm md:text-[0.9375rem] font-light tracking-wide">
                    {img.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-14 text-center">
            <a href="#booking" className="btn-primary">
              Rezerviši Termin
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
