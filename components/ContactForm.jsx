// components/ContactForm.jsx
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [ok, setOk] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setOk(null);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setOk(true);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setOk(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto" id="contact">
      <h2 className="text-2xl font-bold text-center">Imate pitanje? Pišite nam</h2>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Vaše ime"
          className="w-full rounded-md border px-4 py-2"
        />
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          className="w-full rounded-md border px-4 py-2"
        />
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Poruka"
          className="w-full rounded-md border px-4 py-2"
        />

        <div className="flex items-center gap-4">
          <button className="rounded-md bg-amber-600 px-5 py-2 text-white font-semibold hover:bg-amber-700">
            Pošalji
          </button>

          {ok === true && <span className="text-green-600">Hvala — poslaćemo odgovor uskoro.</span>}
          {ok === false && <span className="text-red-600">Došlo je do greške. Pokušajte ponovo.</span>}
        </div>
      </form>
    </div>
  );
}
