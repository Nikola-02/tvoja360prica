import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import PromoPopup from "../../components/PromoPopup";
import {
  HOME_DESCRIPTION,
  HOME_TITLE,
  OG_IMAGE,
  PRIMARY_KEYWORDS,
  SITE_NAME,
} from "../../lib/seo";
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

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_DESCRIPTION,
  keywords: PRIMARY_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "360 video booth Beograd, premium 360 video booth Srbija",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body
        className={`${jakarta.variable} ${fraunces.variable} antialiased bg-white text-[#111111]`}
      >
        <Header />
        <PromoPopup />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
