import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
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

export const metadata = {
  title: {
    default: "360 Priča | 360 Video Booth",
    template: "%s | 360 Priča",
  },
  description:
    "Premium 360 video booth za venčanja, rođendane i proslave u Srbiji. Profesionalna 360 platforma, instant deljenje snimaka, operater i kompletan setup. Rezervišite termin u Beogradu i širom Srbije.",
  keywords: [
    "360 video booth Srbija",
    "360 video booth Beograd",
    "360 platforma za venčanja",
    "360 video za svadbe",
    "video booth za rođendane",
    "360 kamera za događaje",
    "360 video platforma",
    "video booth Srbija",
    "360 snimanje događaja",
    "360 video iskustvo",
  ],
  authors: [{ name: "360 Priča" }],
  creator: "360 Priča",
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: siteUrl,
    siteName: "360 Priča",
    title: "360 Priča | 360 Video Booth",
    description:
      "Premium 360 video booth za venčanja, rođendane i proslave. Instant deljenje snimaka, profesionalna oprema i operater. Dostupno u Beogradu i širom Srbije.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "360 Priča, premium 360 video booth za događaje u Srbiji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "360 Priča | 360 Video Booth",
    description:
      "Premium 360° video booth za venčanja, rođendane i proslave u Srbiji.",
    images: [`${siteUrl}/og-image.jpg`],
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
  "@type": "LocalBusiness",
  name: "360 Priča — 360 Video Booth",
  description:
    "Premium 360 video booth usluga za venčanja, rođendane, mature i korporativne događaje u Srbiji.",
  url: siteUrl,
  email: "tvoja360prica.studio@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beograd",
    addressCountry: "RS",
  },
  areaServed: {
    "@type": "Country",
    name: "Srbija",
  },
  priceRange: "$$",
  serviceType: [
    "360 video booth",
    "360 video snimanje događaja",
    "360 platforma za venčanja",
    "video booth za rođendane",
  ],
  sameAs: [],
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
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
