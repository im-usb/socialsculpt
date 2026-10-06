"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-coral mb-3">
        Contact Us
      </p>
      <h1 className="font-display text-4xl md:text-6xl mb-4">
        Ready to Social Sculpt?
      </h1>
      <p className="max-w-lg text-ink/70 mb-12">
        Fill in your details and our team will get back to you within one
        business day — or book a slot directly on our calendar.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide mb-1">
              Name
            </label>
            <input
              required
              type="text"
              className="w-full border-2 border-ink rounded-lg px-4 py-3 bg-paper focus:outline-none focus:border-coral"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide mb-1">
              Email
            </label>
            <input
              required
              type="email"
              className="w-full border-2 border-ink rounded-lg px-4 py-3 bg-paper focus:outline-none focus:border-coral"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide mb-1">
              Brand / Company
            </label>
            <input
              type="text"
              className="w-full border-2 border-ink rounded-lg px-4 py-3 bg-paper focus:outline-none focus:border-coral"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide mb-1">
              What do you need help with?
            </label>
            <textarea
              rows={4}
              className="w-full border-2 border-ink rounded-lg px-4 py-3 bg-paper focus:outline-none focus:border-coral"
            />
          </div>
          <button
            type="submit"
            className="bg-ink text-paper px-7 py-3 rounded-full hover:bg-coral transition-colors"
          >
            {submitted ? "Thanks — we'll be in touch!" : "Send message"}
          </button>
        </form>

        <div className="border-2 border-ink rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-display text-2xl mb-3">Prefer a call?</h2>
            <p className="text-sm text-ink/70">
              Book a 1:1 slot directly on our calendar and we&apos;ll walk you
              through what a campaign could look like for your brand.
            </p>
          </div>
          <a
            href="#"
            className="mt-8 inline-block bg-lime text-ink px-6 py-3 rounded-full text-sm font-bold text-center hover:bg-coral hover:text-paper transition-colors"
          >
            Schedule a call →
          </a>
        </div>
      </div>
    </main>
  );
}
