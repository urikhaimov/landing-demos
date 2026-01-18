export type Locale = "en" | "he";

export function getLocale(lang?: string): Locale {
  return lang === "he" ? "he" : "en";
}

export const ui = {
  en: {
    allDemos: "All demos",
    services: "Services",
    reviews: "Reviews",
    faq: "FAQ",
    contact: "Contact",
    call: "Call",
    whatsapp: "WhatsApp",
    quickOptions: "Quick options",
    demoNote: "Demo website — not a real business. Built with Next.js.",
    sending: "Sending...",
    send: "Send",
    sentOk: "Sent! We’ll get back to you soon.",
    sentErr: "Error sending. Try WhatsApp instead.",
    namePh: "Name",
    phonePh: "Phone",
    msgPh: "Message (optional)",
    demoFormNote:
      "This is a demo form. In real projects, we connect it to email/CRM.",
  },
  he: {
    allDemos: "כל הדמואים",
    services: "שירותים",
    reviews: "ביקורות",
    faq: "שאלות נפוצות",
    contact: "יצירת קשר",
    call: "התקשר",
    whatsapp: "וואטסאפ",
    quickOptions: "אפשרויות מהירות",
    demoNote: "אתר דמו — לא עסק אמיתי. נבנה עם Next.js.",
    sending: "שולח...",
    send: "שלח",
    sentOk: "נשלח! נחזור אליך בהקדם.",
    sentErr: "שגיאה בשליחה. נסו וואטסאפ במקום.",
    namePh: "שם",
    phonePh: "טלפון",
    msgPh: "הודעה (לא חובה)",
    demoFormNote:
      "זהו טופס דמו. בפרויקט אמיתי מחברים למייל/CRM.",
  },
} as const;
