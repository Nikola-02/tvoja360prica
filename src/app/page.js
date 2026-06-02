import Hero from "../../components/Hero";
import SetupGallery from "../../components/SetupGallery";
import About from "../../components/About";
import WhatYouNeed from "../../components/WhatYouNeed";
import Gallery from "../../components/Gallery";
import Pricing from "../../components/Pricing";
import Booking from "../../components/Booking";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";

export default function Page() {
  return (
    <>
      <Hero />
      <SetupGallery />
      <About />
      <Gallery />
      <WhatYouNeed />
      <Pricing />
      <Booking />
      <ContactForm />
      <Footer />
    </>
  );
}
