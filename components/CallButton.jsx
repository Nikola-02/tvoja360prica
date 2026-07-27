"use client";

import { useEffect, useState } from "react";

const PHONE_DISPLAY = "061 123 4567";
const PHONE_HREF = "tel:+381611234567";

export default function CallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={PHONE_HREF}
      aria-label={`Pozovi ${PHONE_DISPLAY}`}
      title={`Pozovi ${PHONE_DISPLAY}`}
      className={`fixed z-[65] bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#c9a84c] text-[#0f0f0f] shadow-[0_10px_28px_rgba(201,168,76,0.45)] transition-all duration-300 hover:bg-[#b8942d] hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a84c] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    </a>
  );
}
