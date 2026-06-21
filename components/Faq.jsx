"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import { FAQ_ITEMS } from "../lib/faq";

function FaqItem({ item, index, openIndex, onToggle }) {
  const isOpen = openIndex === index;
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div
      className="border border-[#c9a84c]/20 bg-white overflow-hidden transition-colors duration-300 hover:border-[#c9a84c]/40"
    >
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => onToggle(index)}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[1rem] md:text-[1.0625rem] font-semibold text-[#0f0f0f] transition-colors"
        >
          <span>{item.question}</span>
          <span
            className="shrink-0 text-xl leading-none transition-transform duration-300"
            style={{
              color: "#c9a84c",
              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            }}
            aria-hidden="true"
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-[0.9375rem] leading-relaxed text-[#0f0f0f]/65 border-t border-[#c9a84c]/10 pt-4">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding bg-warm" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title="Česta pitanja o 360 video booth-u"
            description="Odgovori na najčešća pitanja o platformi, snimanju, cenama i dostavi."
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <FaqItem
                key={item.question}
                item={item}
                index={index}
                openIndex={openIndex}
                onToggle={(i) => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="mt-10 text-center text-[0.9375rem] text-[#0f0f0f]/55">
            Niste našli odgovor?{" "}
            <a href="#contact" className="font-semibold text-[#c9a84c] hover:underline">
              Kontaktirajte nas
            </a>{" "}
            ili pogledajte{" "}
            <a href="#pricing" className="font-semibold text-[#c9a84c] hover:underline">
              cenovnik
            </a>
            .
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
