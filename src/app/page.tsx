import { listDemos } from "./content/demos";

export default function HomePage() {
  const demos = listDemos();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-bold">Next.js Local Landing Demos</h1>
        <p className="mt-2 text-white/70">
          Click a demo. These are built from one reusable template with different content.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {demos.map((d) => (
            <a key={d.slug} href={`/d/${d.slug}`} className="rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
              <div className="text-sm text-white/70">{d.city}</div>
              <div className="mt-1 text-lg font-semibold">{d.businessName}</div>
              <div className="mt-2 text-sm text-white/70">{d.heroHeadline}</div>
              <div className="mt-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                /d/{d.slug}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
