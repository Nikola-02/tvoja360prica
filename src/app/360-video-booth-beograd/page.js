import SeoLandingPage from "../../../components/SeoLandingPage";
import { BEOGRAD_CONTENT } from "../../../lib/content/beograd";
import { buildPageMetadata } from "../../../lib/seo";
import {
  buildGraph,
  localBusinessSchema,
  serviceSchema,
  webPageSchema,
} from "../../../lib/structuredData";
import { SITE_URL } from "../../../lib/site";

const path = "/360-video-booth-beograd";
const title = "360 Video Booth Beograd | 360 Photo Booth";
const description =
  "360 video booth i 360 photo booth u Beogradu za svadbe, punoletstva i evente. Od 179€ / 2h, svaki naredni sat +50€. GoPro Hero 12, instant QR, besplatna dostava.";

export const metadata = buildPageMetadata({
  title,
  description,
  path,
  keywords: [
    "360 video booth Beograd",
    "360 photo booth Beograd",
    "360 photobooth Beograd",
    "360 photo Beograd",
    "iznajmljivanje 360 video booth Beograd",
    "iznajmljivanje 360 photo booth Beograd",
    "360 platforma Beograd",
    "360 video svadba Beograd",
    "360 booth punoletstvo Beograd",
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

export default function BeogradPage() {
  return (
    <SeoLandingPage
      h1={BEOGRAD_CONTENT.h1}
      intro={BEOGRAD_CONTENT.intro}
      sections={BEOGRAD_CONTENT.sections}
      schema={schema}
    />
  );
}
