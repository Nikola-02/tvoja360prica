import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import setupImages from "../lib/setupImages";

export default function SetupGallery() {
  return (
    <section id="platforma" className="section-padding bg-warm">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title="Kako funkcioniše 360 Video Booth"
            description="Profesionalna platforma, pažljivo osvetljenje i setup koji se uklapa u svaki događaj, od intimnih venčanja do grandioznih proslava."
          />
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="setup-collage relative mx-auto max-w-5xl">
            <div
              className="pointer-events-none absolute inset-0 hidden lg:block"
              aria-hidden="true"
            >
              <div className="absolute left-1/2 top-1/2 h-[72%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-[#c9a84c]/12 bg-[#c9a84c]/[0.04]" />
            </div>

            <div className="relative flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-6 px-6 lg:mx-0 lg:px-4 lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:pb-0 lg:items-end [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {setupImages.map((img, index) => (
                <figure
                  key={img.src}
                  className={`group relative aspect-[9/16] w-[min(68vw,240px)] shrink-0 snap-center overflow-hidden rounded-sm border border-[#c9a84c]/20 bg-[#111111] shadow-[0_18px_50px_rgba(17,17,17,0.14)] transition-transform duration-500 ease-out hover:-translate-y-1 lg:w-full ${img.offset}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 22vw, 260px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    style={{ objectPosition: img.objectPosition ?? "center center" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-90" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-xs sm:text-[0.8125rem] font-medium tracking-wide">
                      {img.title}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-14 text-center">
            <a href="#booking" className="btn-primary whitespace-nowrap">
              Proveri slobodan termin
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
