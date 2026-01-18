export type DemoSlug = "electrician" | "clinic" | "studio";

export type DemoTheme = {
  primary: string; // hex
  accent: string; // hex
  background: string; // hex
};

export type DemoService = {
  title: string;
  description: string;
};

export type DemoTestimonial = {
  name: string;
  text: string;
  rating?: 5 | 4;
};

export type DemoFAQ = {
  q: string;
  a: string;
};

export type DemoContent = {
  slug: DemoSlug;
  businessName: string;
  city: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  trust: { ratingText: string; highlights: string[] };
  services: DemoService[];
  testimonials: DemoTestimonial[];
  faqs: DemoFAQ[];
  contact: {
    phoneDisplay: string;
    phoneE164: string; // +972...
    whatsappE164: string; // +972...
    addressLine: string;
    hoursLine: string;
    emailTo: string; // for real projects; demo just logs
  };
  theme: DemoTheme;
  meta: { title: string; description: string };
};
