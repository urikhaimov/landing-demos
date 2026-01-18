import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Heebo } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
});

export const metadata: Metadata = {
  title: "Landing Demos",
  description: "Local business landing pages",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${geistSans.variable} ${heebo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
