export const OWNER_EMAIL = "tvoja360prica.studio@gmail.com";

export async function sendEmail({ subject, html, replyTo, to }) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error(
      "[Email] RESEND_API_KEY nije podešen u .env.local — e-mail nije poslat."
    );
    return { ok: false, error: "missing_api_key" };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM || "Tvoja 360 Priča <onboarding@resend.dev>",
      to: [to || OWNER_EMAIL],
      reply_to: replyTo || undefined,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Email send failed:", err);
    return { ok: false, error: err };
  }

  return { ok: true };
}
