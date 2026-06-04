import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import PromoPopup from "../../components/PromoPopup";
import { SITE_URL } from "../../lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

const siteUrl = SITE_URL;

const metaTitle =
  "360 Video Booth Beograd, Pančevo i Srbija | 3h za 169€ | Tvoja 360 Priča";
const metaDescription =
  "Iznajmljivanje 360 video booth platforme u Beogradu, Pančevu i širom Srbije za samo 169€ za 3 sata! Snimanje sa najnovijom GoPro Hero 13 Black kamerom u 6K rezoluciji. Velika platforma za 4 osobe i unikatni rekviziti. Besplatna dostava u Beogradu i Pančevu.";

export const metadata = {
  title: {
    default: metaTitle,
    template: "%s | Tvoja 360 Priča",
  },
  description: metaDescription,
  keywords: [
    "360 video booth Beograd",
    "360 video booth Pančevo",
    "360 video booth Srbija",
    "iznajmljivanje 360 video booth",
    "360 platforma za venčanja",
    "GoPro Hero 13 Black 360 booth",
    "360 video za svadbe",
    "video booth za rođendane",
    "360 kamera za događaje",
    "360 video platforma",
    "video booth Srbija",
    "360 snimanje događaja",
    "najpovoljniji 360 video booth",
  ],
  authors: [{ name: "Tvoja 360 Priča" }],
  creator: "Tvoja 360 Priča",
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: siteUrl,
    siteName: "Tvoja 360 Priča",
    title: metaTitle,
    description: metaDescription,
    images: [
      {
        url: `${siteUrl}/setup/booth-setup.jpg`,
        width: 1200,
        height: 630,
        alt: "Tvoja 360 Priča — 360 video booth u Beogradu, Pančevu i širom Srbije, GoPro Hero 13 Black, platforma za 4 osobe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: [`${siteUrl}/setup/booth-setup.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: "Tvoja 360 Priča",
      alternateName: "Tvoja 360 Priča — 360 Video Booth",
      description:
        "Iznajmljivanje 360 video booth platforme u Beogradu, Pančevu i širom Srbije. GoPro Hero 13 Black kamera, platforma prečnika 100 cm za 4 osobe, unikatni rekviziti i besplatna dostava u Beogradu i Pančevu.",
      url: siteUrl,
      image: `${siteUrl}/setup/booth-setup.jpg`,
      email: "tvoja360prica.studio@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Beograd",
        addressRegion: "Beograd",
        addressCountry: "RS",
      },
      areaServed: [
        { "@type": "City", name: "Beograd" },
        { "@type": "City", name: "Pančevo" },
        { "@type": "Country", name: "Srbija" },
      ],
      priceRange: "€€",
      serviceType: [
        "360 video booth",
        "360 video booth Beograd",
        "360 video booth Pančevo",
        "iznajmljivanje 360 video booth",
      ],
      sameAs: [
        "https://www.instagram.com/tvoja360prica/",
        "https://www.facebook.com/tvoja360prica",
      ],
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "360 Video Booth — iznajmljivanje",
      serviceType: "360 video booth rental",
      provider: { "@id": `${siteUrl}/#business` },
      areaServed: [
        { "@type": "City", name: "Beograd" },
        { "@type": "City", name: "Pančevo" },
        { "@type": "Country", name: "Srbija" },
      ],
      description:
        "360 video booth sa GoPro Hero 13 Black kamerom (skoro 6K), platformom od 100 cm za do 4 osobe, unikatnim rekvizitima i instant preuzimanjem snimaka putem QR koda.",
      offers: {
        "@type": "Offer",
        name: "3 sata — glavni paket",
        price: 169,
        priceCurrency: "EUR",
        description:
          "169€ za 3 sata angazovanja. Uključuje GoPro Hero 13 Black, veliku platformu, rekvizite i besplatnu dostavu u Beogradu i Pančevu. Dostupno i širom Srbije.",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/#pricing`,
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${jakarta.variable} ${fraunces.variable} antialiased bg-white text-[#111111]`}
      >
        <Header />
        <PromoPopup />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
