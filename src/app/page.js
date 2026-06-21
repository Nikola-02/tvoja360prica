import {
  buildPageMetadata,
  HOME_DESCRIPTION,
  HOME_TITLE,
} from "../../lib/seo";
import {
  buildGraph,
  faqSchema,
  localBusinessSchema,
  serviceSchema,
  webPageSchema,
} from "../../lib/structuredData";
import { SITE_URL } from "../../lib/site";
import Hero from "../../components/Hero";
import SeoIntro from "../../components/SeoIntro";
import SetupGallery from "../../components/SetupGallery";
import EventsSection from "../../components/EventsSection";
import About from "../../components/About";
import Gallery from "../../components/Gallery";
import WhatYouNeed from "../../components/WhatYouNeed";
import Pricing from "../../components/Pricing";
import Faq from "../../components/Faq";
import Booking from "../../components/Booking";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";

export const metadata = buildPageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "",
  absoluteTitle: true,
});

const homeSchema = buildGraph([
  localBusinessSchema(),
  serviceSchema(),
  faqSchema(),
  webPageSchema({
    url: SITE_URL,
    name: HOME_TITLE,
    description: HOME_DESCRIPTION,
  }),
]);

export default function Page() {
  return (
    <>
      <JsonLd data={homeSchema} />
      <Hero />
      <SeoIntro />
      <SetupGallery />
      <EventsSection />
      <About />
      <Gallery />
      <WhatYouNeed />
      <Pricing />
      <Faq />
      <Booking />
      <ContactForm />
      <Footer />
    </>
  );
}
