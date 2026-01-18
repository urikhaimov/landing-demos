"use client";

import { telHref, whatsappHref } from "../lib/links";

export function StickyCtaBar(props: {
  phoneE164: string;
  whatsappE164: string;
  businessName: string;
  t: { call: string; whatsapp: string };
}) {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-4 md:hidden">
      <div className="mx-auto flex max-w-xl gap-3 rounded-2xl bg-black/70 p-3 backdrop-blur">
        <a
          className="flex-1 rounded-xl bg-[var(--primary)] px-4 py-3 text-center text-sm font-semibold text-white"
          href={telHref(props.phoneE164)}
        >
          {props.t.call}
        </a>
        <a
          className="flex-1 rounded-xl bg-[var(--accent)] px-4 py-3 text-center text-sm font-semibold text-white"
          href={whatsappHref(props.whatsappE164, `Hi! I saw your site (${props.businessName}). Can I get a quote?`)}
          target="_blank"
          rel="noreferrer"
        >
          {props.t.whatsapp}
        </a>
      </div>
    </div>
  );
}
