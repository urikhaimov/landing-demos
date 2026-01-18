import type { DemoContent } from "./types";

export const studioDemo: DemoContent = {
  slug: "studio",
  businessName: "Pulse Studio (Demo)",
  city: "Givatayim",
  tagline: "Small group training that works",
  heroHeadline: "Small group training in Givatayim — stronger in 6 weeks",
  heroSubheadline:
    "Personal coaching vibe in small groups. Strength, mobility, fat loss. Try a free intro session and feel the difference.",
  primaryCta: { label: "Free trial session", href: "#contact" },
  secondaryCta: { label: "WhatsApp us", href: "#contact" },
  trust: {
    ratingText: "4.9★ • 200+ members",
    highlights: ["Small groups", "Friendly coaches", "Flexible schedule"],
  },
  services: [
    { title: "Strength training", description: "Progressive programs for all levels." },
    { title: "Mobility & posture", description: "Move better, feel better." },
    { title: "Fat loss plan", description: "Training + simple habits guidance." },
    { title: "Personal sessions", description: "1:1 coaching available." },
    { title: "Beginner friendly", description: "Start safely and build consistency." },
    { title: "Community vibe", description: "Motivation through a supportive group." },
  ],
  testimonials: [
    { name: "Tal S.", text: "The best studio atmosphere — I finally stay consistent.", rating: 5 },
    { name: "Maya G.", text: "Great coaches and a plan that actually works.", rating: 5 },
    { name: "Amit P.", text: "Small groups make a huge difference. Highly recommend.", rating: 5 },
  ],
  faqs: [
    { q: "Is this good for beginners?", a: "Yes — we adapt exercises and progress safely from your level." },
    { q: "What should I bring?", a: "Water, towel, and sports shoes. We have the rest." },
    { q: "How do I book a trial?", a: "Use the form below or WhatsApp us with preferred times." },
  ],
  contact: {
    phoneDisplay: "052-777-8899",
    phoneE164: "+972527778899",
    whatsappE164: "+972527778899",
    addressLine: "Givatayim (Demo address)",
    hoursLine: "Sun–Thu 07:00–21:00 • Fri 07:00–13:00",
    emailTo: "demo@pulse-studio.example",
  },
  theme: { primary: "#f97316", accent: "#22c55e", background: "#0b1220" },
  meta: {
    title: "Fitness Studio Landing Page Demo (Next.js)",
    description: "A fitness studio demo landing page optimized for WhatsApp and trial bookings.",
  },
};
