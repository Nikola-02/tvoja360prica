// app/page.tsx
import Hero from "../../components/Hero";
import About from "../../components/About";
import WhatYouNeed from "../../components/WhatYouNeed";
import Gallery from "../../components/Gallery";
import Booking from "../../components/Booking";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";

export default function Page() {
  return (
    <>
      <Hero />
      <section className="py-16">
        <About />
      </section>

      <section className="py-16">
        <Gallery />
      </section>

      <section className="py-16">
        <WhatYouNeed />
      </section>

      <section className="py-16">
        <Booking />
      </section>

      <section className="py-16">
        <ContactForm/>
      </section>

      <Footer />
    </>
  );
}
