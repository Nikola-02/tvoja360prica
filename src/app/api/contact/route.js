// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // OPTIONAL: send to Supabase or email provider
    // if you want to store contact requests in Supabase, uncomment below and configure lib/supabaseClient
    /*
    import { supabase } from "@/lib/supabaseClient";
    await supabase.from("contacts").insert([{ name, email, message }]);
    */

    // For now: just log server-side (or integrate with email provider: SendGrid / Brevo)
    console.log("Contact:", { name, email, message });

    // Example: call external email API here (SendGrid / Brevo) using fetch with API key from env

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
