"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-2xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title="Kontakt — imate pitanje?"
            description="Tu smo da odgovorimo na sva vaša pitanja o 360 video booth usluzi. Pogledajte i naš cenovnik ili galeriju snimaka."
          />
        </ScrollReveal>

        <ScrollReveal>
          <form
            onSubmit={handleSubmit}
            className="border border-[#D4AF37]/20 bg-white p-8 md:p-10 space-y-5"
          >
            <div>
              <label className="block text-[0.9375rem] font-semibold text-[#111111]/80 mb-1.5">
                Ime *
              </label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-premium"
                placeholder="Vaše ime"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[0.9375rem] font-semibold text-[#111111]/80 mb-1.5">
                  Telefon *
                </label>
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-premium"
                  placeholder="+381 6X XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-[0.9375rem] font-semibold text-[#111111]/80 mb-1.5">
                  E-mail *
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-premium"
                  placeholder="vas@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-[0.9375rem] font-semibold text-[#111111]/80 mb-1.5">
                Poruka *
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="input-premium resize-none"
                placeholder="Vaša poruka..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full !py-4 !text-base disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Slanje..." : "Pošalji Poruku"}
            </button>

            {status === "success" && (
              <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-center text-green-800 text-sm">
                Hvala na poruci! Odgovorićemo vam u najkraćem roku.
              </div>
            )}
            {status === "error" && (
              <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-center text-red-800 text-sm">
                Došlo je do greške. Molimo pokušajte ponovo.
              </div>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
