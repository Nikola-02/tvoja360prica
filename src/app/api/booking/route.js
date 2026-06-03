import { NextResponse } from "next/server";
import { sendEmail, OWNER_EMAIL } from "../../../../lib/sendEmail";
import {
  bookingOwnerEmail,
  bookingConfirmationEmail,
} from "../../../../lib/emailTemplates";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, social, date, eventType, startTime, hours } = body;

    if (!name || !phone || !email || !date || !eventType || !startTime || !hours) {
      return NextResponse.json({ error: "Nedostaju obavezna polja" }, { status: 400 });
    }

    const data = { name, phone, email, social, date, eventType, startTime, hours };

    const ownerResult = await sendEmail({
      subject: `Rezervacija — ${eventType} (${date}) — ${name}`,
      html: bookingOwnerEmail(data),
      replyTo: email,
    });

    if (!ownerResult.ok) {
      return NextResponse.json({ error: "Slanje nije uspelo" }, { status: 500 });
    }

    const confirmationResult = await sendEmail({
      to: email,
      subject: `Potvrda upita — ${eventType} — 360 Priča`,
      html: bookingConfirmationEmail(data),
      replyTo: OWNER_EMAIL,
    });

    if (!confirmationResult.ok) {
      console.error("Potvrda korisniku nije poslata:", confirmationResult.error);
    }

    return NextResponse.json({ ok: true, confirmationSent: confirmationResult.ok }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
