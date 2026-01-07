import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "360 Video Booth za Proslave | Premium snimanje na licu mesta",
  description: "Premium 360 video booth za venčanja i proslave. Instant editovani video, QR sharing, WhatsApp i e-mail. Rezervišite termin danas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        <main className="min-h-screen">
          <div className="max-w-7xl mx-auto px-6">{children}</div>
        </main>
      </body>
    </html>
  );
}
