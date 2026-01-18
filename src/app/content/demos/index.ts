import { clinicDemo } from "./clinic";
import { electricianDemo } from "./electrician";
import { studioDemo } from "./studio";
import type { DemoContent, DemoSlug } from "./types";
import type { Locale } from "../../lib/i18n";
import { heOverrides } from "./he"; // add this file (below) if you don’t have it yet

const demos: Record<DemoSlug, DemoContent> = {
  electrician: electricianDemo,
  clinic: clinicDemo,
  studio: studioDemo,
};

export function getDemo(slug: string, locale: Locale = "en"): DemoContent | null {
  const key = (slug ?? "").toLowerCase().trim();
  const base = (demos as Record<string, DemoContent>)[key];
  if (!base) return null;

  if (locale === "he") {
    const ovr = heOverrides[base.slug];
    return ovr ? ({ ...base, ...ovr } as DemoContent) : base;
  }

  return base;
}

export function listDemos(locale: Locale = "en"): DemoContent[] {
  if (locale !== "he") return Object.values(demos);

  return Object.values(demos).map((base) => {
    const ovr = heOverrides[base.slug];
    return ovr ? ({ ...base, ...ovr } as DemoContent) : base;
  });
}
