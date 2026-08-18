import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { company } from "@/lib/site-data";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  website?: string; // Honeypot anti-spam field
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const raw = (await request.json().catch(() => null)) as Partial<ContactPayload> | null;

    if (!raw) {
      return NextResponse.json(
        { error: "Invalid request format." },
        { status: 400 },
      );
    }

    // Honeypot spam check
    if (raw.website && raw.website.trim() !== "") {
      return NextResponse.json({ ok: true, message: "Message received." });
    }

    const name = typeof raw.name === "string" ? raw.name.trim() : "";
    const email = typeof raw.email === "string" ? raw.email.trim() : "";
    const phone = typeof raw.phone === "string" ? raw.phone.trim() : "Not provided";
    const subject = typeof raw.subject === "string" && raw.subject.trim() !== "" ? raw.subject.trim() : "New Website Project Enquiry";
    const message = typeof raw.message === "string" ? raw.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in your name, email, and message." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // SMTP Configuration
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const mailFrom = process.env.MAIL_FROM ?? smtpUser ?? "enquiries@greenspaceinfra.com";
    const mailTo = process.env.MAIL_TO ?? company.email ?? "info@greenspaceinfra.com";

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 16px; background: #ffffff;">
        <div style="border-bottom: 2px solid #43a324; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #111611; margin: 0; font-size: 22px;">New Contact Enquiry — Green Space Infra</h2>
          <p style="color: #687068; margin: 4px 0 0 0; font-size: 13px;">Received via website contact form</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #687068; width: 120px;"><strong>Client Name:</strong></td>
            <td style="padding: 8px 0; color: #111611; font-weight: bold;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #687068;"><strong>Email:</strong></td>
            <td style="padding: 8px 0; color: #2f7f1d;"><a href="mailto:${safeEmail}" style="color: #2f7f1d; text-decoration: none;">${safeEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #687068;"><strong>Phone:</strong></td>
            <td style="padding: 8px 0; color: #111611;">${safePhone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #687068;"><strong>Subject:</strong></td>
            <td style="padding: 8px 0; color: #111611;">${safeSubject}</td>
          </tr>
        </table>

        <div style="margin-top: 16px; padding: 18px; background: #f8faf7; border-left: 4px solid #43a324; border-radius: 8px;">
          <strong style="display: block; margin-bottom: 8px; color: #111611; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Message Brief:</strong>
          <p style="margin: 0; line-height: 1.6; color: #343834; font-size: 14px; white-space: normal;">${safeMessage}</p>
        </div>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f0f0f0; text-align: center; color: #9ca3af; font-size: 11px;">
          © ${new Date().getFullYear()} Green Space Infra • Automated Notification System
        </div>
      </div>
    `;

    // If SMTP credentials exist, send real email
    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"${safeName} via Green Space Infra" <${mailFrom}>`,
        to: mailTo,
        replyTo: email,
        subject: `[Website Enquiry] ${subject} - from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: emailHtml,
      });

      console.log(`Email successfully dispatched to ${mailTo} from ${email}`);
    } else {
      // If SMTP is not yet set in environment, log the received message cleanly
      console.log("----------------------------------------");
      console.log("📥 NEW CONTACT FORM SUBMISSION RECEIVED:");
      console.log(`From: ${name} <${email}> | Phone: ${phone}`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log(`Recipient Target: ${mailTo}`);
      console.log("Tip: Add SMTP_HOST, SMTP_USER, SMTP_PASS, MAIL_TO in .env.local to send live emails.");
      console.log("----------------------------------------");
    }

    return NextResponse.json({
      ok: true,
      message: "Thank you. Your message has been received and our team will get back to you shortly.",
    });
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      { error: "We could not process your enquiry right now. Please try again or contact us directly." },
      { status: 500 },
    );
  }
}
