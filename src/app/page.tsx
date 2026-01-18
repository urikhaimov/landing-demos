

import Link from "next/link";
import { getLocale, ui, type Locale } from "./lib/i18n";
import { listDemos } from "./content/demos";

type SearchParams = { lang?: string };

export default async function Home({
  searchParams,
}: {
  searchParams?: SearchParams | Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const locale: Locale = getLocale(sp?.lang);
  const t = ui[locale];

  const demos = listDemos(locale);

  const otherLocale: Locale = locale === "he" ? "en" : "he";
  const otherLabel = locale === "he" ? "English" : "עברית";

  return (
    <main dir={locale === "he" ? "rtl" : "ltr"} className="min-h-screen bg-[#050814] text-white">
      <header className="mx-auto max-w-5xl px-5 sm:px-6 pt-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              {t.homeTitle}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-white/70 max-w-2xl">
              {t.homeSubtitle}
            </p>
          </div>

          <Link
            href={`/?lang=${otherLocale}`}
            className="text-xs text-white/70 hover:text-white border border-white/10 bg-white/5 backdrop-blur rounded-full px-3 py-2"
          >
            {otherLabel}
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 sm:px-6 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((d) => (
            <div key={d.slug} className="card">
              <div className="text-sm font-semibold">{d.businessName}</div>
              <div className="mt-1 text-xs muted-text">{d.locationCity}</div>

              <p className="mt-3 text-sm soft-text line-clamp-3">{d.heroSubheadline}</p>

              <div className="mt-5 flex items-center justify-between">
                <Link
                  href={`/d/${d.slug}?lang=${locale}`}
                  className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-white text-black hover:bg-white/90"
                >
                  {t.viewDemo}
                </Link>

                <span className="text-xs text-white/50">{d.slug}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-xs text-white/50">{t.demoNote}</div>
      </section>
    </main>
  );
}
