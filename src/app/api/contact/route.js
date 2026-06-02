import { NextResponse } from "next/server";
import { sendEmail } from "../../../../lib/sendEmail";
import { contactOwnerEmail } from "../../../../lib/emailTemplates";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    if (!name || !phone || !email || !message) {
      return NextResponse.json({ error: "Nedostaju obavezna polja" }, { status: 400 });
    }

    const result = await sendEmail({
      subject: `Kontakt — ${name}`,
      html: contactOwnerEmail({ name, phone, email, message }),
      replyTo: email,
    });

    if (!result.ok) {
      return NextResponse.json({ error: "Slanje nije uspelo" }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
