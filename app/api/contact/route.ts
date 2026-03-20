import { NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT = process.env.RESEND_TO_EMAIL ?? "exports@indotropicalagriculture.com";
const SENDER = process.env.RESEND_FROM_EMAIL ?? "Indo Tropical Agriculture <onboarding@resend.dev>";

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json();
  const { name, company, product, message } = body;
  const email = typeof body.email === "string" ? body.email.trim() : body.email;

  if (!name || !email || !product || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 }
    );
  }

  const { error } = await resend.emails.send({
    from: SENDER,
    to: RECIPIENT,
    replyTo: email,
    subject: `New Quote Request: ${product} — ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">
          New Quote Request
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #44403c; width: 140px;">Name</td>
            <td style="padding: 8px 12px; color: #1c1917;">${escapeHtml(name)}</td>
          </tr>
          <tr style="background-color: #fafaf9;">
            <td style="padding: 8px 12px; font-weight: bold; color: #44403c;">Email</td>
            <td style="padding: 8px 12px; color: #1c1917;">
              <a href="mailto:${escapeHtml(email)}" style="color: #059669;">${escapeHtml(email)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #44403c;">Company</td>
            <td style="padding: 8px 12px; color: #1c1917;">${company ? escapeHtml(company) : "—"}</td>
          </tr>
          <tr style="background-color: #fafaf9;">
            <td style="padding: 8px 12px; font-weight: bold; color: #44403c;">Product Interest</td>
            <td style="padding: 8px 12px; color: #1c1917;">${escapeHtml(product)}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background-color: #fafaf9; border-radius: 8px;">
          <p style="font-weight: bold; color: #44403c; margin: 0 0 8px 0;">Message</p>
          <p style="color: #1c1917; margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #a8a29e;">
          This inquiry was submitted via the Indo Tropical Agriculture website contact form.
          You can reply directly to this email to respond to the sender.
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
