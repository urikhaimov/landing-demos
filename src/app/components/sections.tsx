import type { DemoContent } from "../content/demos/types";
import { telHref, whatsappHref } from "../lib/links";

type T = {
  services: string;
  reviews: string;
  faq: string;
  call: string;
  whatsapp: string;
};

export function Hero({ d, t }: { d: DemoContent; t: T }) {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-16 md:pt-24">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            {d.businessName} • {d.city} • {d.tagline}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{d.heroHeadline}</h1>
          <p className="text-base leading-relaxed text-white/75 md:text-lg">{d.heroSubheadline}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={d.primaryCta.href}
              className="rounded-2xl bg-[var(--primary)] px-5 py-3 text-center text-sm font-semibold text-white shadow"
            >
              {d.primaryCta.label}
            </a>
            <a
              href={d.secondaryCta.href}
              className="rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              {d.secondaryCta.label}
            </a>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-white/70">
            {d.trust.highlights.map((h) => (
              <span key={h} className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                {h}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white">{d.trust.ratingText}</div>

            <div className="text-sm text-white/75">
              <div className="mt-3 grid gap-2">
                <a className="rounded-2xl bg-white/10 px-4 py-3 text-white" href={telHref(d.contact.phoneE164)}>
                  {t.call}: {d.contact.phoneDisplay}
                </a>
                <a
                  className="rounded-2xl bg-white/10 px-4 py-3 text-white"
                  href={whatsappHref(d.contact.whatsappE164, `Hi! I'd like details about your service (${d.businessName}).`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.whatsapp}: {d.contact.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="text-xs text-white/60">{d.contact.hoursLine}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services({ d, t }: { d: DemoContent; t: T }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">{t.services}</h2>
          <p className="mt-2 text-sm text-white/70">Clear offer + fast contact = more leads.</p>
        </div>
        <div className="hidden text-sm text-white/60 md:block">{d.trust.ratingText}</div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {d.services.map((s) => (
          <div key={s.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="text-base font-semibold text-white">{s.title}</div>
            <div className="mt-2 text-sm text-white/70">{s.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Testimonials({ d, t }: { d: DemoContent; t: T }) {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <h2 className="text-2xl font-bold text-white">{t.reviews}</h2>
      <p className="mt-2 text-sm text-white/70">Trust is what converts local traffic.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {d.testimonials.map((tt) => (
          <div key={tt.name} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold text-white">{tt.name}</div>
            <div className="mt-3 text-sm text-white/75">{tt.text}</div>
            <div className="mt-3 text-xs text-white/60">{(tt.rating ?? 5) === 5 ? "★★★★★" : "★★★★☆"}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FAQ({ d, t }: { d: DemoContent; t: T }) {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <h2 className="text-2xl font-bold text-white">{t.faq}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {d.faqs.map((f) => (
          <div key={f.q} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold text-white">{f.q}</div>
            <div className="mt-2 text-sm text-white/70">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
