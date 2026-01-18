"use client";

import { useMemo, useState } from "react";
import type { DemoContent } from "../content/demos/types";
import { telHref, whatsappHref } from "../lib/links";
import type { Locale } from "../lib/i18n";

type T = {
  contact: string;
  quickOptions: string;
  call: string;
  whatsapp: string;
  sending: string;
  send: string;
  sentOk: string;
  sentErr: string;
  namePh: string;
  phonePh: string;
  msgPh: string;
  demoFormNote: string;
};

export function Contact({ d, t, locale }: { d: DemoContent; t: T; locale: Locale }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const waText = useMemo(() => {
    return locale === "he"
      ? `היי! ראיתי את הדף (${d.businessName}). אפשר הצעת מחיר/קביעת תור?`
      : `Hi! I saw your site (${d.businessName}). I'd like a quote / appointment.`;
  }, [locale, d.businessName]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/lead", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Bad response");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 pb-24">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold text-white">{t.contact}</h2>
          <p className="mt-2 text-sm text-white/70">{t.demoFormNote}</p>

          <form className="mt-6 space-y-3" onSubmit={onSubmit}>
            <input type="hidden" name="demo" value={d.slug} />

            {/* honeypot */}
            <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <input
              name="name"
              required
              placeholder={t.namePh}
              className="w-full rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-white outline-none"
            />
            <input
              name="phone"
              required
              placeholder={t.phonePh}
              className="w-full rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-white outline-none"
            />
            <textarea
              name="message"
              rows={4}
              placeholder={t.msgPh}
              className="w-full rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-white outline-none"
            />
            <button
              disabled={status === "sending"}
              className="w-full rounded-2xl bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-white disabled:opacity-60"
            >
              {status === "sending" ? t.sending : t.send}
            </button>

            {status === "sent" && <p className="text-sm text-white/80">{t.sentOk}</p>}
            {status === "error" && <p className="text-sm text-white/80">{t.sentErr}</p>}
          </form>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">{t.quickOptions}</h3>
          <div className="mt-4 space-y-2 text-sm text-white/75">
            <a className="block rounded-2xl bg-white/10 px-4 py-3 text-white" href={telHref(d.contact.phoneE164)}>
              {t.call}: {d.contact.phoneDisplay}
            </a>
            <a
              className="block rounded-2xl bg-white/10 px-4 py-3 text-white"
              href={whatsappHref(d.contact.whatsappE164, waText)}
              target="_blank"
              rel="noreferrer"
            >
              {t.whatsapp}
            </a>
            <div className="mt-3 text-xs text-white/60">{d.contact.hoursLine}</div>
            <div className="text-xs text-white/60">{d.contact.addressLine}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
