import SeoLandingPage from "../../../components/SeoLandingPage";
import { SRBIJA_CONTENT } from "../../../lib/content/srbija";
import { buildPageMetadata } from "../../../lib/seo";
import {
  buildGraph,
  localBusinessSchema,
  serviceSchema,
  webPageSchema,
} from "../../../lib/structuredData";
import { SITE_URL } from "../../../lib/site";

const path = "/360-video-booth-srbija";
const title = "360 Video Booth Srbija | Iznajmljivanje";
const description =
  "Premium 360 video booth dostupan širom Srbije za svadbe, punoletstva i korporativne evente. GoPro Hero 12, rotaciona platforma, instant QR deljenje snimaka.";

export const metadata = buildPageMetadata({
  title,
  description,
  path,
  keywords: [
    "360 video booth Srbija",
    "iznajmljivanje 360 video booth Srbija",
    "360 platforma Srbija",
    "360 video svadba Srbija",
    "360 booth Novi Sad Niš",
  ],
});

const schema = buildGraph([
  localBusinessSchema(),
  serviceSchema(),
  webPageSchema({
    url: `${SITE_URL}${path}`,
    name: title,
    description,
  }),
]);

export default function SrbijaPage() {
  return (
    <SeoLandingPage
      h1={SRBIJA_CONTENT.h1}
      intro={SRBIJA_CONTENT.intro}
      sections={SRBIJA_CONTENT.sections}
      schema={schema}
    />
  );
}
