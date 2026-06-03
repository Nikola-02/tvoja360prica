export const OWNER_EMAIL = "tvoja360prica.studio@gmail.com";

const DEFAULT_FROM = "Tvoja 360 Priča <noreply@tvoja360prica.com>";

function getFromAddress() {
  return process.env.EMAIL_FROM || DEFAULT_FROM;
}

export async function sendEmail({ subject, html, replyTo, to }) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error(
      "[Email] RESEND_API_KEY nije podešen — dodaj ga u Vercel Environment Variables."
    );
    return { ok: false, error: "missing_api_key" };
  }

  const payload = {
    from: getFromAddress(),
    to: Array.isArray(to) ? to : [to || OWNER_EMAIL],
    subject,
    html,
  };

  if (replyTo) {
    payload.reply_to = replyTo;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("[Email] Slanje nije uspelo:", err);
    return { ok: false, error: err };
  }

  const data = await res.json().catch(() => ({}));
  return { ok: true, id: data.id };
}
