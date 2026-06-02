export const OWNER_EMAIL = "tvoja360prica.studio@gmail.com";

export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function formatDate(dateStr) {
  const [year, month, day] = dateStr.split("-");
  return `${day}.${month}.${year}.`;
}

function row(label, value) {
  return `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #888888; font-size: 13px; width: 42%; vertical-align: top;">
        ${label}
      </td>
      <td style="padding: 12px 0 12px 16px; border-bottom: 1px solid #eeeeee; color: #111111; font-size: 14px; font-weight: 500; vertical-align: top;">
        ${value}
      </td>
    </tr>
  `;
}

function dataTable(rows) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
      ${rows.join("")}
    </table>
  `;
}

/** Premium HTML layout — inline styles for email clients */
export function emailLayout({ title, intro, content, footerNote }) {
  return `
<!DOCTYPE html>
<html lang="sr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8f8f8; font-family: Georgia, 'Times New Roman', serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f8f8; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 40px rgba(17,17,17,0.08);">
          
          <!-- Gold accent bar -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #D4AF37, #e8c96a, #D4AF37);"></td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding: 36px 40px 24px; text-align: center; background-color: #111111;">
              <p style="margin: 0; font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: #D4AF37; font-family: Arial, Helvetica, sans-serif;">
                Premium 360° Video Booth
              </p>
              <h1 style="margin: 10px 0 0; font-size: 26px; font-weight: 400; color: #ffffff; letter-spacing: 0.02em;">
                Tvoja <span style="color: #D4AF37;">360</span> Priča
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 36px 40px;">
              <h2 style="margin: 0 0 16px; font-size: 22px; font-weight: 400; color: #111111; line-height: 1.3;">
                ${title}
              </h2>
              <p style="margin: 0 0 28px; font-size: 15px; line-height: 1.7; color: #555555; font-family: Arial, Helvetica, sans-serif;">
                ${intro}
              </p>
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px 36px; border-top: 1px solid #f0f0f0; text-align: center;">
              ${
                footerNote
                  ? `<p style="margin: 0 0 16px; font-size: 13px; line-height: 1.6; color: #888888; font-family: Arial, Helvetica, sans-serif;">${footerNote}</p>`
                  : ""
              }
              <p style="margin: 0; font-size: 12px; color: #aaaaaa; font-family: Arial, Helvetica, sans-serif;">
                <a href="mailto:${OWNER_EMAIL}" style="color: #D4AF37; text-decoration: none;">${OWNER_EMAIL}</a>
                &nbsp;·&nbsp; Beograd &amp; cela Srbija
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function contactOwnerEmail({ name, phone, email, message }) {
  const content = `
    <div style="background-color: #f8f8f8; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
      <p style="margin: 0 0 16px; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; color: #D4AF37; font-family: Arial, Helvetica, sans-serif; font-weight: 600;">
        Podaci pošiljaoca
      </p>
      ${dataTable([
        row("Ime", escapeHtml(name)),
        row("Telefon", escapeHtml(phone)),
        row("E-mail", `<a href="mailto:${escapeHtml(email)}" style="color: #111111; text-decoration: none;">${escapeHtml(email)}</a>`),
      ])}
    </div>
    <div style="background-color: #ffffff; border: 1px solid #eeeeee; border-radius: 12px; padding: 24px;">
      <p style="margin: 0 0 12px; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; color: #888888; font-family: Arial, Helvetica, sans-serif; font-weight: 600;">
        Poruka
      </p>
      <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #333333; font-family: Arial, Helvetica, sans-serif;">
        ${escapeHtml(message).replace(/\n/g, "<br>")}
      </p>
    </div>
    <p style="margin: 24px 0 0; text-align: center;">
      <a href="mailto:${escapeHtml(email)}" style="display: inline-block; padding: 12px 28px; background-color: #111111; color: #ffffff; text-decoration: none; border-radius: 999px; font-size: 13px; font-family: Arial, Helvetica, sans-serif; font-weight: 600;">
        Odgovori korisniku
      </a>
    </p>
  `;

  return emailLayout({
    title: "Nova kontakt poruka",
    intro: `Stigla vam je nova poruka sa sajta od <strong style="color: #111111;">${escapeHtml(name)}</strong>.`,
    content,
    footerNote: "Odgovorite direktno korisniku klikom na dugme iznad ili Reply u vašem mejl klijentu.",
  });
}

export function bookingOwnerEmail({ name, phone, email, social, date, eventType, startTime, hours }) {
  const content = `
    <div style="background-color: #f8f8f8; border-radius: 12px; padding: 24px;">
      <p style="margin: 0 0 16px; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; color: #D4AF37; font-family: Arial, Helvetica, sans-serif; font-weight: 600;">
        Detalji rezervacije
      </p>
      ${dataTable([
        row("Ime i prezime", escapeHtml(name)),
        row("Telefon", escapeHtml(phone)),
        row("E-mail", `<a href="mailto:${escapeHtml(email)}" style="color: #111111; text-decoration: none;">${escapeHtml(email)}</a>`),
        row("Instagram / Facebook", escapeHtml(social || "—")),
        row("Datum događaja", escapeHtml(formatDate(date))),
        row("Tip događaja", escapeHtml(eventType)),
        row("Početak", escapeHtml(startTime)),
        row("Sati angažovanja", escapeHtml(hours)),
      ])}
    </div>
    <p style="margin: 24px 0 0; text-align: center;">
      <a href="mailto:${escapeHtml(email)}" style="display: inline-block; padding: 12px 28px; background-color: #111111; color: #ffffff; text-decoration: none; border-radius: 999px; font-size: 13px; font-family: Arial, Helvetica, sans-serif; font-weight: 600;">
        Kontaktiraj klijenta
      </a>
    </p>
  `;

  return emailLayout({
    title: "Novi upit za rezervaciju",
    intro: `<strong style="color: #111111;">${escapeHtml(name)}</strong> je poslao/la upit za <strong style="color: #111111;">${escapeHtml(eventType)}</strong> — ${escapeHtml(formatDate(date))}.`,
    content,
    footerNote: "Kontaktirajte klijenta u najkraćem roku radi potvrde termina.",
  });
}

export function bookingConfirmationEmail({ name, phone, email, social, date, eventType, startTime, hours }) {
  const content = `
    <div style="background-color: #f8f8f8; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
      <p style="margin: 0 0 16px; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; color: #D4AF37; font-family: Arial, Helvetica, sans-serif; font-weight: 600;">
        Pregled vašeg upita
      </p>
      ${dataTable([
        row("Ime i prezime", escapeHtml(name)),
        row("Telefon", escapeHtml(phone)),
        row("E-mail", escapeHtml(email)),
        row("Instagram / Facebook", escapeHtml(social || "—")),
        row("Datum događaja", escapeHtml(formatDate(date))),
        row("Tip događaja", escapeHtml(eventType)),
        row("Početak događaja", escapeHtml(startTime)),
        row("Sati angažovanja", escapeHtml(hours)),
      ])}
    </div>
    <div style="background-color: #111111; border-radius: 12px; padding: 20px 24px; text-align: center;">
      <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #cccccc; font-family: Arial, Helvetica, sans-serif;">
        ✓ Upit uspešno primljen &nbsp;·&nbsp; Odgovor stiže uskoro
      </p>
    </div>
  `;

  return emailLayout({
    title: `Hvala, ${escapeHtml(name)}!`,
    intro: "Uspešno smo primili vaš upit za rezervaciju 360° video booth usluge. Neko iz našeg tima će vas kontaktirati u <strong style=\"color: #111111;\">najkraćem mogućem roku</strong> radi potvrde termina i finalnih detalja.",
    content,
    footerNote: `Imate pitanja pre nego što vas kontaktiramo? Pišite nam na <a href="mailto:${OWNER_EMAIL}" style="color: #D4AF37; text-decoration: none;">${OWNER_EMAIL}</a>.`,
  });
}
