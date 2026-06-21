import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";
import JsonLd from "./JsonLd";

export default function SeoLandingPage({
  h1,
  intro,
  sections,
  schema,
  ctaHref = "/#booking",
}) {
  return (
    <>
      <JsonLd data={schema} />
      <article className="pt-32 pb-8">
        <header className="max-w-3xl mx-auto px-6 pb-12 border-b border-[#e8e2d4]">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-[#0f0f0f]/45">
              <li>
                <Link href="/" className="hover:text-[#c9a84c] transition-colors">
                  Početna
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#0f0f0f]/70">{h1}</li>
            </ol>
          </nav>
          <h1 className="display text-[2.25rem] md:text-[3.25rem] text-[#0f0f0f] leading-tight">
            {h1}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#0f0f0f]/65">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={ctaHref} className="btn-primary whitespace-nowrap">
              Proveri slobodan termin →
            </Link>
            <Link href="/#gallery" className="btn-secondary whitespace-nowrap">
              Galerija snimaka
            </Link>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-6 py-14 space-y-16">
          {sections.map((section) => (
            <section key={section.title} aria-labelledby={section.id}>
              <h2
                id={section.id}
                className="heading text-[1.625rem] md:text-[2rem] text-[#0f0f0f] mb-5"
              >
                {section.title}
              </h2>
              {section.image && (
                <figure className="relative mx-auto mb-8 max-w-[280px] sm:max-w-xs aspect-[9/16] overflow-hidden border border-[#c9a84c]/20">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </figure>
              )}
              <div className="space-y-4 text-[1.0625rem] leading-[1.8] text-[#0f0f0f]/65">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <aside
            className="border border-[#c9a84c]/25 bg-warm p-8 md:p-10"
            aria-label="Brzi linkovi"
          >
            <h2 className="heading text-xl text-[#0f0f0f] mb-4">Korisni linkovi</h2>
            <ul className="space-y-2 text-[0.9375rem]">
              <li>
                <Link href="/#pricing" className="text-[#c9a84c] font-semibold hover:underline">
                  Cenovnik 360 video booth
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="text-[#c9a84c] font-semibold hover:underline">
                  Galerija snimaka
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-[#c9a84c] font-semibold hover:underline">
                  Kontakt i upit
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-[#c9a84c] font-semibold hover:underline">
                  Česta pitanja
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </article>
      <Footer />
    </>
  );
}
