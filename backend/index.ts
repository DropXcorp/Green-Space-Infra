import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const port = Number(process.env.PORT ?? 3001);
const frontendOrigin = process.env.FRONTEND_ORIGIN ?? "http://localhost:3000";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT ?? 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpSecure = process.env.SMTP_SECURE === "true";
const mailFrom = process.env.MAIL_FROM ?? smtpUser;
const mailTo = process.env.MAIL_TO ?? smtpUser;

const transporter =
  smtpHost && smtpUser && smtpPass
    ? nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })
    : null;

const corsHeaders = {
  "Access-Control-Allow-Origin": frontendOrigin,
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
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

function buildMessageEmail(payload: ContactPayload) {
  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safeSubject = escapeHtml(payload.subject);
  const safeMessage = escapeHtml(payload.message).replaceAll("\n", "<br />");

  return {
    subject: `[Contact Form] ${payload.subject}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Subject: ${payload.subject}`,
      "",
      payload.message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin: 0 0 16px;">New contact form submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space: normal; padding: 16px; border: 1px solid #e5e7eb; border-radius: 12px; background: #f9fafb;">
          ${safeMessage}
        </div>
      </div>
    `,
  };
}

async function readPayload(request: Request) {
  const raw = (await request.json().catch(() => null)) as Partial<ContactPayload> | null;

  if (!raw) {
    return null;
  }

  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  const subject = typeof raw.subject === "string" ? raw.subject.trim() : "";
  const message = typeof raw.message === "string" ? raw.message.trim() : "";

  if (!name || !email || !subject || !message) {
    return null;
  }

  if (!isValidEmail(email)) {
    return null;
  }

  return { name, email, subject, message };
}

Bun.serve({
  port,
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (url.pathname === "/health") {
      return Response.json({ ok: true }, { headers: corsHeaders });
    }

    if (url.pathname !== "/contact" || request.method !== "POST") {
      return Response.json({ error: "Not found" }, { status: 404, headers: corsHeaders });
    }

    if (!transporter || !mailFrom || !mailTo) {
      return Response.json(
        {
          error:
            "Mail service is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, and MAIL_TO.",
        },
        { status: 500, headers: corsHeaders },
      );
    }

    const payload = await readPayload(request);

    if (!payload) {
      return Response.json(
        { error: "Please fill in name, email, subject, and message with a valid email address." },
        { status: 400, headers: corsHeaders },
      );
    }

    try {
      const { subject, text, html } = buildMessageEmail(payload);

      await transporter.sendMail({
        from: mailFrom,
        to: mailTo,
        replyTo: payload.email,
        subject,
        text,
        html,
      });

      return Response.json(
        { ok: true, message: "Your message has been sent successfully." },
        { headers: corsHeaders },
      );
    } catch (error) {
      console.error("Failed to send contact email:", error);
      return Response.json(
        { error: "We could not send your message right now. Please try again later." },
        { status: 500, headers: corsHeaders },
      );
    }
  },
});

console.log(`Mail API running on http://localhost:${port}`);
