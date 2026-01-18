import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // ensure Node runtime (not Edge)

function getEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

function clamp(str: string, max: number) {
  return str.length > max ? str.slice(0, max) : str;
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Honeypot (optional anti-spam): if filled => ignore
    const honey = String(formData.get("company") ?? "").trim();
    if (honey) return NextResponse.json({ ok: true });

    const demo = clamp(String(formData.get("demo") ?? "").trim(), 50);
    const name = clamp(String(formData.get("name") ?? "").trim(), 80);
    const phone = clamp(String(formData.get("phone") ?? "").trim(), 40);
    const message = clamp(String(formData.get("message") ?? "").trim(), 2000);

    if (!name || !phone) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const EMAIL_TO = getEnv("EMAIL_TO");
    const SMTP_HOST = getEnv("SMTP_HOST");
    const SMTP_PORT = Number(getEnv("SMTP_PORT"));
    const SMTP_SECURE = String(getEnv("SMTP_SECURE")).toLowerCase() === "true";
    const SMTP_USER = getEnv("SMTP_USER");
    const SMTP_PASS = getEnv("SMTP_PASS");

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const subject = `New lead (${demo || "landing"}) - ${name}`;
    const text =
      `New lead received\n\n` +
      `Demo: ${demo}\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Message: ${message || "-"}\n` +
      `Time: ${new Date().toISOString()}\n`;

    await transporter.sendMail({
      from: `Landing Leads <${SMTP_USER}>`,
      to: EMAIL_TO,
      subject,
      text,
      replyTo: SMTP_USER, // or set to a client email field if you add one
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("LEAD_EMAIL_ERROR", err);
    return NextResponse.json({ ok: false, error: "Email send failed" }, { status: 500 });
  }
}
