"use client"
// components/Booking.tsx
import { useEffect } from "react";

export default function Booking() {
  useEffect(() => {
    // Dynamically load Calendly widget script
    const id = "calendly-script";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div id="booking" className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-bold">Rezervišite Termin</h2>
      <p className="mt-2 text-slate-600">Izaberite datum i vreme. Potvrdu i detalje šaljemo posle rezervacije.</p>

      <div className="mt-6">
        {/* Replace with your Calendly link */}
        <div
          className="calendly-inline-widget mx-auto"
          data-url="https://calendly.com/tvoja360prica-studio/30min"
          style={{ minWidth: 320, height: 630 }}
        />
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Ili nas kontaktirajte direktno putem formulara ispod.
      </p>
    </div>
  );
}
