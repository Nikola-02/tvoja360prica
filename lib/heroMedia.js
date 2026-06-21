import { SITE_URL } from "./site";

export const HERO_VIDEO = {
  src: "/videos/360-video-booth-on-the-party-hero.mp4",
  poster: "/images/360-video-booth-poster.avif",
  title: "360 video booth na proslavi, Beograd i Srbija",
  ariaLabel:
    "360 video booth Beograd, gosti snimaju 360 video na rotacionoj platformi",
  description:
    "Primer 360 video booth snimka sa proslave u Beogradu. Rotaciona platforma, slow-motion efekat i instant deljenje putem QR koda.",
};

export const GALLERY_DEFAULT_VOLUME = 0.2;

export const GALLERY_VIDEOS = [
  {
    src: "/videos/360-video-booth-on-the-birthday-party-gallery.mp4",
    poster: "/images/people-on-360-video-booth-poster-1.avif",
    label: "360 video booth Beograd rođendan, snimanje na proslavi",
  },
  {
    src: "/videos/people-on-360-video-booth-birthday-party.mp4",
    poster: "/images/people-on-360-video-booth-poster-2.avif",
    label: "360 video booth Srbija, gosti na platformi",
  },
  {
    src: "/videos/people-dancing-on-360-video-booth-birthday-party.mp4",
    poster: "/images/people-on-360-video-booth-poster-3.avif",
    label: "360 video booth Beograd, zabava na rođendanu",
  },
];

export const HERO_VIDEO_ABSOLUTE = {
  contentUrl: `${SITE_URL}${HERO_VIDEO.src}`,
  posterUrl: `${SITE_URL}${HERO_VIDEO.poster}`,
};
