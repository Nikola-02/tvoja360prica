import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

export default function SeoIntro() {
  return (
    <section className="section-padding" aria-labelledby="seo-srbija-heading">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title="360 Video Booth Srbija"
            description="Premium 360 video iskustvo dostupno u celoj Srbiji, od Beograda i Pančeva do Novog Sada, Niša, Kragujevca i svih manjih gradova."
          />
        </ScrollReveal>

        <ScrollReveal>
          <article className="space-y-5 text-[1.0625rem] leading-[1.8] text-[#0f0f0f]/65 text-center">
            <p>
              <strong className="text-[#0f0f0f]">Tvoja 360 Priča</strong> nudi
              iznajmljivanje profesionalne 360 video booth platforme za svadbe,
              rođendane, punoletstva i korporativne događaje. Naša rotaciona
              platforma, GoPro Hero 12 kamera i instant QR deljenje pretvaraju
              svaku proslavu u viralni doživljaj koji gosti pamte i dele.
            </p>
            <p>
              Pogledajte stvarne snimke u našoj{" "}
              <a href="#gallery" className="font-semibold text-[#c9a84c] hover:underline">
                galeriji
              </a>
              , proverite detaljan{" "}
              <a href="#pricing" className="font-semibold text-[#c9a84c] hover:underline">
                cenovnik
              </a>{" "}
              ili nas{" "}
              <a href="#contact" className="font-semibold text-[#c9a84c] hover:underline">
                kontaktirajte
              </a>{" "}
              za besplatnu ponudu. Više o usluzi u Beogradu pročitajte na stranici{" "}
              <Link
                href="/360-video-booth-beograd"
                className="font-semibold text-[#c9a84c] hover:underline"
              >
                360 video booth Beograd
              </Link>
              , a o pokrivanosti cele zemlje na{" "}
              <Link
                href="/360-video-booth-srbija"
                className="font-semibold text-[#c9a84c] hover:underline"
              >
                360 video booth Srbija
              </Link>
              .
            </p>
          </article>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-16 text-center">
            <div className="gold-line mb-6" />
            <h2 className="heading text-[1.75rem] md:text-[2.25rem] text-[#0f0f0f]">
              360 Photo Booth Beograd
            </h2>
            <p className="mt-5 body-lg text-base md:text-lg max-w-xl mx-auto">
              Tražite 360 photo booth, 360 photobooth ili 360 photo? To smo mi,
              moderna 360 video verzija platforme.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <article className="mt-6 space-y-5 text-[1.0625rem] leading-[1.8] text-[#0f0f0f]/65 text-center">
            <p>
              Mnogi gosti i organizatori događaja u Beogradu i Srbiji traže{" "}
              <strong className="text-[#0f0f0f]">360 photo booth</strong>,{" "}
              <strong className="text-[#0f0f0f]">360 photobooth</strong> ili{" "}
              <strong className="text-[#0f0f0f]">360 photo</strong>. U praksi je
              reč o istoj rotacionoj platformi koja snima spektakularne
              slow-motion videe, a ne samo klasične fotografije. Kod nas dobijate
              premium 360 video booth iskustvo: GoPro Hero 12, profesionalnu
              rasvetu, rekvizite i instant QR kod za deljenje snimaka.
            </p>
            <p>
              Ako ste googlovali 360 photo booth Beograd ili 360 photobooth za
              venčanje, punoletstvo ili korporativni event, na pravom ste mestu.
              Pogledajte{" "}
              <a href="#pricing" className="font-semibold text-[#c9a84c] hover:underline">
                cenovnik
              </a>{" "}
              i{" "}
              <a href="#booking" className="font-semibold text-[#c9a84c] hover:underline">
                proverite slobodan termin
              </a>
              .
            </p>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
