import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const payload = {
    demo: String(formData.get("demo") ?? ""),
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    message: String(formData.get("message") ?? ""),
    at: new Date().toISOString(),
  };

  // Demo behavior: log the lead on the server.
  console.log("NEW_LEAD_DEMO", payload);

  return NextResponse.json({ ok: true });
}
