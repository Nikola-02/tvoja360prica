"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

const eventTypes = [
  "Venčanje",
  "Rođendan",
  "Matura",
  "Korporativni događaj",
  "Proslava",
  "Drugo",
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  social: "",
  date: "",
  eventType: "",
  startTime: "",
  hours: "",
};

export default function Booking() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm(initialForm);
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
    <section id="booking" className="section-padding bg-warm">
      <div className="max-w-2xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title="Rezervišite vaš termin"
            description="Popunite formu ispod i javićemo vam se u najkraćem roku sa potvrdom i detaljima."
          />
        </ScrollReveal>

        <ScrollReveal>
          <form
            onSubmit={handleSubmit}
            className="border border-[#D4AF37]/20 bg-white p-8 md:p-10 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label className="block text-[0.9375rem] font-semibold text-[#111111]/80 mb-1.5">
                  Ime i prezime *
                </label>
                <input
                  required
                  value={form.name}
                  onChange={update("name")}
                  className="input-premium"
                  placeholder="Vaše ime i prezime"
                />
              </div>

              <div>
                <label className="block text-[0.9375rem] font-semibold text-[#111111]/80 mb-1.5">
                  Broj telefona *
                </label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
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
                  value={form.email}
                  onChange={update("email")}
                  className="input-premium"
                  placeholder="vas@email.com"
                />
              </div>

              <div>
                <label className="block text-[0.9375rem] font-semibold text-[#111111]/80 mb-1.5">
                  Instagram ili Facebook
                </label>
                <input
                  value={form.social}
                  onChange={update("social")}
                  className="input-premium"
                  placeholder="@korisnicko_ime (opciono)"
                />
              </div>

              <div>
                <label className="block text-[0.9375rem] font-semibold text-[#111111]/80 mb-1.5">
                  Datum događaja *
                </label>
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={update("date")}
                  className="input-premium"
                />
              </div>

              <div>
                <label className="block text-[0.9375rem] font-semibold text-[#111111]/80 mb-1.5">
                  Tip događaja *
                </label>
                <select
                  required
                  value={form.eventType}
                  onChange={update("eventType")}
                  className="input-premium"
                >
                  <option value="">Izaberite tip</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[0.9375rem] font-semibold text-[#111111]/80 mb-1.5">
                  Početak događaja *
                </label>
                <input
                  required
                  type="time"
                  value={form.startTime}
                  onChange={update("startTime")}
                  className="input-premium"
                />
              </div>

              <div>
                <label className="block text-[0.9375rem] font-semibold text-[#111111]/80 mb-1.5">
                  Broj sati angažovanja *
                </label>
                <input
                  required
                  type="number"
                  min="1"
                  max="24"
                  value={form.hours}
                  onChange={update("hours")}
                  className="input-premium"
                  placeholder="npr. 4"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full !py-4 !text-base mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Slanje..." : "Pošalji Upit"}
            </button>

            {status === "success" && (
              <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-center text-green-800 text-sm">
                Hvala! Vaš upit je uspešno poslat. Proverite e-mail — poslali
                smo vam potvrdu sa svim detaljima. Neko iz tima će vas
                kontaktirati u najkraćem roku.
              </div>
            )}
            {status === "error" && (
              <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-center text-red-800 text-sm">
                Došlo je do greške. Molimo pokušajte ponovo ili nas kontaktirajte
                direktno.
              </div>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
