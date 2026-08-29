import { FAQ_ITEMS } from "./faq";
import { HERO_VIDEO, HERO_VIDEO_ABSOLUTE } from "./heroMedia";
import { SITE_URL } from "./site";

export function localBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Tvoja 360 Priča",
    alternateName: [
      "Tvoja 360 Priča, 360 Video Booth",
      "360 Photo Booth Beograd",
      "360 Photobooth Srbija",
    ],
    description:
      "Premium 360 video booth i 360 photo booth usluga u Beogradu i širom Srbije. Iznajmljivanje rotacione platforme sa GoPro Hero 12 kamerom, instant montažom i QR deljenjem snimaka.",
    url: SITE_URL,
    image: `${SITE_URL}/setup/booth-setup-3.jpg`,
    email: "tvoja360prica.studio@gmail.com",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beograd",
      addressRegion: "Beograd",
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.8176,
      longitude: 20.4633,
    },
    areaServed: [
      { "@type": "City", name: "Beograd" },
      { "@type": "City", name: "Pančevo" },
      { "@type": "Country", name: "Srbija" },
    ],
    serviceType: [
      "360 video booth",
      "360 video booth Beograd",
      "360 video booth Srbija",
      "360 photo booth",
      "360 photo booth Beograd",
      "360 photobooth",
      "360 photo",
      "iznajmljivanje 360 video booth",
      "iznajmljivanje 360 photo booth",
    ],
    sameAs: [
      "https://www.instagram.com/tvoja360prica/",
      "https://www.facebook.com/tvoja360prica",
    ],
  };
}

export function serviceSchema() {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}/#service`,
    name: "360 Video Booth / 360 Photo Booth, iznajmljivanje",
    serviceType: [
      "360 video booth rental",
      "360 photo booth rental",
      "360 photobooth",
    ],
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: [
      { "@type": "City", name: "Beograd" },
      { "@type": "City", name: "Pančevo" },
      { "@type": "Country", name: "Srbija" },
    ],
    description:
      "Iznajmljivanje premium 360 video booth i 360 photo booth platforme sa GoPro Hero 12 kamerom (5.3K), platformom za 4 osobe, rekvizitima i instant QR deljenjem.",
    offers: {
      "@type": "Offer",
      name: "2 sata, osnovni paket",
      price: 179,
      priceCurrency: "EUR",
      description:
        "Od 179€ za 2 sata. Svaki naredni sat +50€. Uključuje GoPro Hero 12, platformu, rekvizite i besplatnu dostavu u Beogradu i Pančevu.",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/#pricing`,
    },
  };
}

export function faqSchema() {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function webPageSchema({ url, name, description }) {
  return {
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#service` },
    inLanguage: "sr-RS",
  };
}

export function heroVideoSchema() {
  return {
    "@type": "VideoObject",
    "@id": `${SITE_URL}/#hero-video`,
    name: HERO_VIDEO.title,
    description: HERO_VIDEO.description,
    thumbnailUrl: HERO_VIDEO_ABSOLUTE.posterUrl,
    contentUrl: HERO_VIDEO_ABSOLUTE.contentUrl,
    embedUrl: `${SITE_URL}/#hero`,
    uploadDate: "2025-06-01",
    inLanguage: "sr-RS",
    publisher: { "@id": `${SITE_URL}/#business` },
  };
}

export function buildGraph(items) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Tvoja 360 Priča",
        inLanguage: "sr-RS",
      },
      ...items,
    ],
  };
}
