import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must have at least 2 characters")
    .max(100),
  email: z.string().trim().email("Invalid email address"),
  subject: z.string().trim().min(3, "Subject is too short").max(150),
  message: z.string().trim().min(10, "Message is too short").max(5000),
  website: z.string().optional().default(""),
});

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const firstError =
        parsed.error.issues[0]?.message || "Invalid form data.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { name, email, subject, message, website } = parsed.data;

    if (website && website.trim() !== "") {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <contact@portfolio.hugolomba.com>",
      to: ["hugo@hugolomba.com"],
      replyTo: email,
      subject: `Portfolio contact: ${subject}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #18181b;">
          <h2>New message from your portfolio</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        { error: error.message || "Failed to send email." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 },
    );
  }
}
