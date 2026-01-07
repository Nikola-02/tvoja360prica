// components/WhatYouNeed.tsx
export default function WhatYouNeed({ contacts }) {
    return (
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center">Šta Vam je potrebno — i šta dobijaš</h2>
  
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">Šta treba da obezbedite</h3>
            <ul className="mt-3 list-disc ml-5 text-white-600">
              <li>Prostor od <strong>minimalno 3×3 metra</strong></li>
              <li>Standardna <strong>strujna utičnica</strong></li>
            </ul>
          </div>
  
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">Šta mi obezbeđujemo</h3>
            <ul className="mt-3 list-disc ml-5 text-white-600">
              <li>Kompletna 360 platforma i montaža/demontaža</li>
              <li>Profesionalno osvetljenje i operater</li>
              <li>Instant edit videa i QR / WhatsApp / e-mail deljenje</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  