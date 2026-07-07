import { NextResponse } from "next/server";
import { sendEmail, OWNER_EMAIL } from "../../../../lib/sendEmail";
import {
  bookingOwnerEmail,
  bookingConfirmationEmail,
} from "../../../../lib/emailTemplates";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, social, date, eventType, location, startTime, hours } = body;

    if (!name || !phone || !email || !date || !eventType || !location || !startTime || !hours) {
      return NextResponse.json({ error: "Nedostaju obavezna polja" }, { status: 400 });
    }

    const data = { name, phone, email, social, date, eventType, location, startTime, hours };

    const ownerResult = await sendEmail({
      to: OWNER_EMAIL,
      subject: `Nova rezervacija — ${eventType} (${date}) — ${name}`,
      html: bookingOwnerEmail(data),
      replyTo: email,
    });

    if (!ownerResult.ok) {
      return NextResponse.json(
        { error: "Slanje obaveštenja nije uspelo. Pokušajte ponovo ili pišite na email." },
        { status: 500 }
      );
    }

    const confirmationResult = await sendEmail({
      to: email,
      subject: `Potvrda upita — ${eventType} — Tvoja 360 Priča`,
      html: bookingConfirmationEmail(data),
      replyTo: OWNER_EMAIL,
    });

    if (!confirmationResult.ok) {
      console.error("[Booking] Potvrda korisniku nije poslata:", confirmationResult.error);
    }

    return NextResponse.json(
      { ok: true, confirmationSent: confirmationResult.ok },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Booking]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
