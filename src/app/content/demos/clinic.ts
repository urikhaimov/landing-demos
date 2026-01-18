import type { DemoContent } from "./types";

export const clinicDemo: DemoContent = {
  slug: "clinic",
  businessName: "Carmel Dental Clinic (Demo)",
  city: "Tel Aviv",
  tagline: "Gentle care, modern equipment",
  heroHeadline: "Dental clinic in Tel Aviv — gentle, professional care",
  heroSubheadline:
    "Cleanings, whitening, implants, and kids dentistry. Friendly staff and transparent pricing. Book a consultation today.",
  primaryCta: { label: "Book consultation", href: "#contact" },
  secondaryCta: { label: "Call clinic", href: "#contact" },
  trust: {
    ratingText: "4.8★ • 300+ happy patients",
    highlights: ["Modern equipment", "Clear treatment plan", "English/Hebrew"],
  },
  services: [
    { title: "Cleaning & checkups", description: "Routine care and prevention." },
    { title: "Whitening", description: "Safe treatments with noticeable results." },
    { title: "Implants", description: "High-quality implant solutions." },
    { title: "Kids dentistry", description: "Comfort-first approach for children." },
    { title: "Urgent visits", description: "Fast help for pain and emergencies." },
    { title: "Cosmetic dentistry", description: "Smile improvements and restorations." },
  ],
  testimonials: [
    { name: "Noam K.", text: "Very professional and calm. Great experience.", rating: 5 },
    { name: "Eden M.", text: "Clear explanation and painless treatment. תודה!", rating: 5 },
    { name: "Lior A.", text: "Clean clinic, friendly staff, on-time appointment.", rating: 5 },
  ],
  faqs: [
    { q: "Do you accept new patients?", a: "Yes — you can book a first consultation via phone or the form below." },
    { q: "Do you treat children?", a: "Yes, and we focus on a calm, friendly approach." },
    { q: "How long is a consultation?", a: "Usually 20–30 minutes depending on the case." },
  ],
  contact: {
    phoneDisplay: "03-555-1122",
    phoneE164: "+97235551122",
    whatsappE164: "+972501112233",
    addressLine: "Tel Aviv (Demo address)",
    hoursLine: "Sun–Thu 09:00–18:00",
    emailTo: "demo@carmel-clinic.example",
  },
  theme: { primary: "#a855f7", accent: "#06b6d4", background: "#0b1220" },
  meta: {
    title: "Clinic Landing Page Demo (Next.js)",
    description: "A clinic landing page demo built in Next.js with strong trust + booking CTA.",
  },
};
