import { SITE_URL } from "./site";

export const SITE_NAME = "Tvoja 360 Priča";

export const HOME_TITLE =
  "360 Video Booth Beograd | 360 Photo Booth Srbija";

export const HOME_DESCRIPTION =
  "360 video booth i 360 photo booth za svadbe, rođendane i evente. Od 179€ / 2h, svaki naredni sat +50€. Uz 5 sati, besplatna dostava širom Srbije.";

export const OG_IMAGE = `${SITE_URL}/setup/booth-setup-3.jpg`;

export const PRIMARY_KEYWORDS = [
  "360 video booth Beograd",
  "360 video booth Srbija",
  "360 photo booth Beograd",
  "360 photo booth Srbija",
  "360 photobooth",
  "360 photo booth",
  "360 photo",
  "iznajmljivanje 360 video booth",
  "iznajmljivanje 360 photo booth",
  "360 video booth za venčanja",
  "360 platforma Beograd",
  "GoPro Hero 12 360 booth",
];

export function buildPageMetadata({
  title,
  description,
  path = "",
  keywords = PRIMARY_KEYWORDS,
  absoluteTitle = false,
}) {
  const url = `${SITE_URL}${path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "sr_RS",
      url,
      siteName: SITE_NAME,
      title,
      description,
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
      title,
      description,
      images: [OG_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}
