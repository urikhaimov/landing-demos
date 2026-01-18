import type { DemoContent } from "./types";

export const electricianDemo: DemoContent = {
  slug: "electrician",
  businessName: "RG Electric Pro (Demo)",
  city: "Ramat Gan",
  tagline: "Fast, safe, professional work",
  heroHeadline: "Electrician in Ramat Gan — same-day service",
  heroSubheadline:
    "Emergency fixes, panels, lighting, troubleshooting. Clear pricing and clean work. Call or WhatsApp for a quick quote.",
  primaryCta: { label: "Call now", href: "#contact" },
  secondaryCta: { label: "WhatsApp quote", href: "#contact" },
  trust: {
    ratingText: "4.9★ • 120+ reviews",
    highlights: ["Arrive on time", "Warranty on work", "Transparent pricing"],
  },
  services: [
    { title: "Emergency fixes", description: "Short circuits, power issues, outages." },
    { title: "Electrical panels", description: "Upgrades, breakers, safety checks." },
    { title: "Lighting & switches", description: "Indoor/outdoor lighting installs." },
    { title: "Fault troubleshooting", description: "Fast diagnostics and safe repair." },
    { title: "Smart home prep", description: "Wiring for smart devices & appliances." },
    { title: "Safety inspection", description: "Professional check before renovation." },
  ],
  testimonials: [
    { name: "Dana R.", text: "Super fast response and very clean work. Highly recommended.", rating: 5 },
    { name: "Omer L.", text: "Explained the issue clearly and fixed it quickly. Fair price.", rating: 5 },
    { name: "Shir S.", text: "Arrived on time and finished everything neatly. Great service.", rating: 5 },
  ],
  faqs: [
    { q: "Do you offer same-day service?", a: "Yes, for most urgent cases we can come the same day (subject to availability)." },
    { q: "How do pricing and quotes work?", a: "We give a quick estimate by phone/WhatsApp and confirm after on-site assessment." },
    { q: "Do you provide warranty?", a: "Yes — warranty depends on the job type and parts used." },
  ],
  contact: {
    phoneDisplay: "050-123-4567",
    phoneE164: "+972501234567",
    whatsappE164: "+972501234567",
    addressLine: "Service area: Ramat Gan + nearby",
    hoursLine: "Sun–Thu 08:00–20:00 • Fri 08:00–14:00",
    emailTo: "demo@rg-electric.example",
  },
  theme: { primary: "#0ea5e9", accent: "#22c55e", background: "#0b1220" },
  meta: {
    title: "Electrician Landing Page Demo (Next.js)",
    description: "A fast local-business landing page demo focused on calls and WhatsApp leads.",
  },
};
