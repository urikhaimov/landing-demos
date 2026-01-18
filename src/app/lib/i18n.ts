export type Locale = "he" | "en";

export function getLocale(lang?: string): Locale {
  return lang === "en" ? "en" : "he"; // ✅ default = he
}

export const ui = {
  en: {
    // Home
    homeTitle: "Next.js Local Landing Demos",
    homeSubtitle:
      "Pick a demo. These are built from a reusable template with different content.",
    viewDemo: "View demo",

    // Header / nav
    allDemos: "All demos",

    // Sections
    services: "Services",
    reviews: "Reviews",
    faq: "FAQ",
    contact: "Contact",

    // CTAs
    call: "Call",
    whatsapp: "WhatsApp",
    quickOptions: "Quick options",

    // Notes
    demoNote: "Demo website — not a real business. Built with Next.js.",
    demoFormNote:
      "This is a demo form. In real projects, we connect it to email/CRM.",

    // Form
    sending: "Sending...",
    send: "Send",
    sentOk: "Sent! We’ll get back to you soon.",
    sentErr: "Error sending. Try WhatsApp instead.",
    namePh: "Name",
    phonePh: "Phone",
    msgPh: "Message (optional)",
  },

  he: {
    // Home
    homeTitle: "דמואים לדפי נחיתה (Next.js)",
    homeSubtitle:
      "בחרו דמו. כל דמו מבוסס על תבנית חוזרת עם תוכן ועיצוב שונים.",
    viewDemo: "לצפייה",

    // Header / nav
    allDemos: "כל הדמואים",

    // Sections
    services: "שירותים",
    reviews: "ביקורות",
    faq: "שאלות נפוצות",
    contact: "יצירת קשר",

    // CTAs
    call: "התקשר",
    whatsapp: "וואטסאפ",
    quickOptions: "אפשרויות מהירות",

    // Notes
    demoNote: "אתר דמו — לא עסק אמיתי. נבנה עם Next.js.",
    demoFormNote: "זהו טופס דמו. בפרויקט אמיתי מחברים למייל/CRM.",

    // Form
    sending: "שולח...",
    send: "שלח",
    sentOk: "נשלח! נחזור אליך בהקדם.",
    sentErr: "שגיאה בשליחה. נסו וואטסאפ במקום.",
    namePh: "שם",
    phonePh: "טלפון",
    msgPh: "הודעה (לא חובה)",
  },
} as const;

export type Ui = typeof ui;
