import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getDemo } from "../../content/demos";
import { getLocale, ui, type Locale } from "../../lib/i18n";
import { Hero, Services, Testimonials, FAQ } from "../../components/sections";
import { Contact } from "../../components/Contact";
import { StickyCtaBar } from "../../components/StickyCtaBar";

type Params = { slug: string };
type SearchParams = { lang?: string };

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Params | Promise<Params>;
  searchParams?: SearchParams | Promise<SearchParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sp = await searchParams;

  const locale: Locale = getLocale(sp?.lang);
  const d = getDemo(slug, locale);

  if (!d) return {};

  return {
    title: d.meta?.title ?? d.businessName,
    description: d.meta?.description ?? d.heroSubheadline,
    openGraph: {
      title: d.meta?.title ?? d.businessName,
      description: d.meta?.description ?? d.heroSubheadline,
      type: "website",
    },
  };
}

export default async function DemoPage({
  params,
  searchParams,
}: {
  params: Params | Promise<Params>;
  searchParams?: SearchParams | Promise<SearchParams>;
}) {
  const { slug } = await params;
  const sp = await searchParams;

  const locale: Locale = getLocale(sp?.lang);
  const t = ui[locale];

  const d = getDemo(slug, locale);
  if (!d) notFound();

  const dir = locale === "he" ? "rtl" : "ltr";
  const otherLocale = locale === "he" ? "en" : "he";
  const otherLabel = locale === "he" ? "English" : "עברית";

  return (
    <main
      dir={dir}
      style={
        {
          "--primary": d.theme.primary,
          "--accent": d.theme.accent,
          "--bg": d.theme.background,
        } as React.CSSProperties
      }
      className="min-h-screen bg-[var(--bg)]"
    >
      {/* background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
        <div className="absolute left-[-200px] top-[-200px] h-[420px] w-[420px] rounded-full bg-[var(--primary)] blur-[120px]" />
        <div className="absolute bottom-[-220px] right-[-220px] h-[520px] w-[520px] rounded-full bg-[var(--accent)] blur-[140px]" />
      </div>

      <header className="mx-auto max-w-5xl px-6 pt-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          <div className="text-sm font-semibold text-white">{d.businessName}</div>

          <div className="flex items-center gap-3">
            <Link className="text-xs text-white/70 hover:text-white" href={`/?lang=${locale}`}>
              {t.allDemos}
            </Link>

            <Link className="text-xs text-white/70 hover:text-white" href={`/d/${d.slug}?lang=${otherLocale}`}>
              {otherLabel}
            </Link>
          </div>
        </div>
      </header>

      <Hero d={d} t={t} />
      <Services d={d} t={t} />
      <Testimonials d={d} t={t} />
      <FAQ d={d} t={t} />
      <Contact d={d} t={t} locale={locale} />

      <footer className="pb-20 md:pb-10">
        <div className="mx-auto max-w-5xl px-6 text-center text-xs text-white/50">{t.demoNote}</div>
      </footer>

      <StickyCtaBar
        phoneE164={d.contact.phoneE164}
        whatsappE164={d.contact.whatsappE164}
        businessName={d.businessName}
        t={t}
      />
    </main>
  );
}
